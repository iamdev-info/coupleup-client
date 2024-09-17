import { useSession } from '~/hooks'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate, Outlet } from 'react-router-dom'
import { ErrorState, Loader } from '~/components'

function PublicRoute() {
  const { isAuthenticated } = useSession()

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <ErrorBoundary fallback={<ErrorState text='An error occurred in the application.' />}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PublicRoute
