import { lazy } from 'react'
import { paths } from '../paths'
interface IRoute {
  path: string
  element: JSX.Element
}

const HomePage = lazy(() => import('~/pages/HomePage'))

export const PrivateRoutes: IRoute[] = [
  {
    path: paths.ROOT_PATH,
    element: <HomePage />
  }
]
