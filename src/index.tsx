import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./routes/Router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={routerConfig}></RouterProvider>
);
