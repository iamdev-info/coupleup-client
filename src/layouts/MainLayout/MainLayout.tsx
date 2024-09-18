import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='font-playpen-regular'>
      <Outlet />
    </div>
  )
}

export default MainLayout
