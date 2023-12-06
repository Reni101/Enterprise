import {createRoot} from 'react-dom/client';
import {App} from "./App";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'


import '../shared/styles/index.scss'
import {ThemeProvider} from "@/app/providers/theme-provider";
import {MainPage} from "@/pages/main";
import {AboutPage} from "@/pages/about";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            }, {
                path: "/about",
                element: <AboutPage/>
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);