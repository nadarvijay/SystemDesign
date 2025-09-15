import React, { Suspense } from "react";

const Cart = React.lazy(() => import('cart/Cart'));

const App = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Hello from React Webpack App 🚀</h1>
            <Suspense fallback={<div>Loading remote Cart...</div>}>
                <Cart />
            </Suspense>
        </div>
    )
}

export default App;