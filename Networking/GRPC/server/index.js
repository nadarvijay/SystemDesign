const PROTO_PATH = __dirname + "/customers.proto";
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Loads and parses the .proto file synchronously.
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: true,
    enums: true,
    arrays: true,
    defaults: true
})


// Converts the loaded proto definition into a usable JS object.
const customerProto = grpc.loadPackageDefinition(packageDefinition);

// added new for constructor
const server = new grpc.Server();

const customers = [
    {
        id: "1",
        name: "Vijay",
        age: 25,
        address: "Chembur"
    },
    {
        id: "2",
        name: "Amlan",
        age: 24,
        address: "Panvel"
    }
]

server.addService(customerProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers });
    },
    get: (call, callback) => {

    },
    insert: (call, callback) => {  // null in callback indicates that there is no error
        try {
            const newCustomer = { ...call.request }
            newCustomer.id = customers.length + 1;
            customers.push(newCustomer);
            callback(null, newCustomer);
        }
        catch (e) {
            console.error(e);
        }
    },
    update: (call, callback) => {
        const id = call.request.id;
        const oldCustomerId = customers.findIndex((customer) => customer.id == id);
        if (oldCustomerId === -1) {
            return callback({
                code: grpc.status.NOT_FOUND,
                message: `Customer with ID ${id} not found`,
            });
        }

        const existingCustomer = customers[oldCustomerId];
        const updates = call.request;

        for (let key in updates) {
            if (updates[key]) {
                existingCustomer[key] = updates[key];
            }
        }
        customers[oldCustomerId] = existingCustomer;
        callback(null, existingCustomer);
    },
    remove: (call, callback) => {
        const id = customers.findIndex((customer) => customer.id == call.request.id);
        if (id === -1) {
            return callback({
                code: grpc.status.NOT_FOUND,
                message: `Customer with ID ${call.request.id} not found`,
            });
        }
        customers.splice(id, 1);
        callback(null, null);
    }
})


//Added a callback function
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error('Server binding failed:', err);
        return;
    }
    console.log(`🚀 gRPC Server running on port ${port}`);
    server.start();
});
