import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from '@/app/App'
import { PrivateLayout } from '@/app/providers/router/privat-rotures/private-layout'
import { privateRoutes } from '@/app/providers/router/privat-rotures/private-routers'
import { PublicLayout } from '@/app/providers/router/public-routers/public-layuot'
import { publicRoutes } from '@/app/providers/router/public-routers/public-routers'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PrivateLayout />,
        children: privateRoutes,
      },
      {
        element: <PublicLayout />,
        children: publicRoutes,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
