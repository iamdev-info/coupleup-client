import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Loader } from '~/components'
import PrivateRouteContainer from '../PrivateRoute/PrivateRouteContainer'
import { PrivateRoutes } from '../PrivateRoute/PrivateRoutes'
import { paths } from '../paths'
import { MainLayout } from '~/layouts'
import { AuthProvider } from '~/providers'
const RouterInstance = createBrowserRouter([
  {
    path: paths.ROOT_PATH,
    element: (
      <AuthProvider>
        <PrivateRouteContainer />
      </AuthProvider>
    ),
    children: [
      {
        element: <MainLayout />,
        children: PrivateRoutes.map((route) => {
          return {
            path: route.path,
            element: <Suspense fallback={<Loader />}>{route.element}</Suspense>
          }
        })
      }
    ]
  }
])
export default RouterInstance
