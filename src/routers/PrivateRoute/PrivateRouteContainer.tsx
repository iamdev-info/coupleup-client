import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { ErrorState, Loader } from '~/components'

type Props = {
  permissions?: string[]
  roles?: string[]
  redirectTo?: string
}

function PrivateRouteContainer(props: Props) {
  // const { permissions, roles, redirectTo = '/' } = props

  // const { isAuthenticated, user, loadingUserData } = useSession()
  // const { hasAllPermissions } = validateUserPermissions({
  //   user,
  //   permissions,
  //   roles
  // })

  // if (loadingUserData) {
  //   return null
  // }

  // if (!isAuthenticated) {
  //   return <Navigate to={redirectTo} />
  // }

  // if (!hasAllPermissions) {
  //   return <Navigate to='/' />
  // }

  return (
    <ErrorBoundary fallback={<ErrorState text='An error occurred in the application.' />}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PrivateRouteContainer
