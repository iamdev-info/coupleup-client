import { Button } from '~/components/ui/button'

const HomePage = () => {
  return (
    <div className='w-full h-[100vh] bg-black   flex flex-col items-center justify-center gap-10'>
      <h1 className='text-5xl text-white font-bold'>couple up.</h1>
      <Button className='w-[220px] h-[50px] text-xl font-bold' variant={'secondary'}>
        Get Started
      </Button>
    </div>
  )
}

export default HomePage
