import { Outlet } from 'react-router-dom'
import { BottomBar, Navbar } from '~/components'

const MainLayout = () => {
  return (
    <div className='font-playpen-regular'>
      <Navbar />
      <Outlet />
      <BottomBar />
    </div>
  )
}

export default MainLayout
