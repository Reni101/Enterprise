import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <div> sign in</div>,
    },
    {
        path: '/signup',
        element: <div> signup</div>,
    },
    {
        path: '/check_email',
        element: <div> checkEmail</div>,
    },
    {
        path: '/forgot_password',
        element: <div> forgot_password</div>,
    },
    {
        path: '/create_new_password/:token',
        element:<div> create_new_password</div>,
    },
    {
        path: '/*',
        element: <div> noteFount</div>,
    },
]