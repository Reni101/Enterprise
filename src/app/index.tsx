import {createRoot} from 'react-dom/client';
import {App} from "./App";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'


import '../shared/styles/index.scss'
import {ThemeProvider} from "@/app/providers/theme-provider";
import {Main} from "@/pages/main";
import {About} from "@/pages/about";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Main/>
            }, {
                path: "/about",
                element: <About/>
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);