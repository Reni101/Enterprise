import {createRoot} from 'react-dom/client';
import {App} from "./App";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import {Main} from "./pages/main";
import {About} from "./pages/about";
import {ThemeProvider} from "@/common/theme";
import './common/styles/index.scss'


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