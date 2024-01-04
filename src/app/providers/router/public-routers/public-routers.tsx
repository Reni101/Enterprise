import { RouteObject } from 'react-router-dom'
import { routes } from '@/shared/const'
import { SignIn } from '@/pages/signIn'

export const publicRoutes: RouteObject[] = [
  {
    path: routes.AUTH.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: routes.AUTH.SIGN_UP,
    element: <div> signup</div>,
  },
  {
    path: routes.AUTH.CHECK_EMAIL,
    element: <div> checkEmail</div>,
  },
  {
    path: routes.AUTH.FORGOT_PASSWORD,
    element: <div> forgot_password</div>,
  },
  {
    path: routes.AUTH.CREATE_NEW_PASSWORD,
    element: <div> create_new_password</div>,
  },
  {
    path: routes.NOT_FOUND,
    element: <div> notFount</div>,
  },
]
