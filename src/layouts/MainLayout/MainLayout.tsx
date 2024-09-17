import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='font-roboto-regular'>
      <Outlet />
    </div>
  )
}

export default MainLayout
