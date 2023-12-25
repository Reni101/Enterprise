import {RouteObject} from "react-router-dom";

export const privateRoutes: RouteObject[] = [
    {
        path: '/profile',
        element: <div> profile</div>,
    },
    {
        path: '/decks',
        element: <div>table</div>,
    },
]