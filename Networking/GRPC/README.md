# gRPC

- Install dependencies : 
    for GRPC : @grpc/grpc-js , @grpc/proto-loader 
    for REST : express , body-parser

- Create the protolcol buffer file 
- Added Service and message definitions
- Created server/index.js
    - Added definitions to the proto service functions
    - And exposed the grpc server

- Created client/client.js (gRPC client)
    - Using proto file made a connection to the server customerService
    - Exposed the client grpc for REST

- Created client/index.js (REST)
    - Made an express server and exposed it for the browsers
    - Used the exposed grpc client to trigger functions in the grpc server
