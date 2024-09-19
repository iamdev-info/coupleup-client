const useBarItem = () => {
  const bottomBarList = [
    {
      label: 'Home',
      icon: '/icons/home.svg'
    },
    {
      label: 'Box',
      icon: '/icons/box.svg'
    },
    {
      label: '',
      icon: '/icons/heart.svg'
    },
    {
      label: 'Search',
      icon: '/icons/search.svg'
    },
    {
      label: 'Me',
      icon: '/icons/profile.svg'
    }
  ]
  return {
    bottomBarList
  }
}
const BottomBar = () => {
  const { bottomBarList } = useBarItem()
  return (
    <div className='fixed bottom-0 left-0 w-full min-h-[50px] bg-primary z-[5] flex items-center gap-3 px-[20px] py-[7px] justify-between'>
      {bottomBarList.map((item) => {
        return (
          <div className='flex flex-col justify-center items-center gap-[3px]'>
            {item.label === '' ? (
              <div className='w-[60px] h-[60px] bg-primary-foreground rounded-[100px] flex items-center justify-center absolute top-[-30px] left-1/2 translate-x-[-50%] border-2 border-primary'>
                <img src={item.icon} alt='' className='w-[40px]' />
              </div>
            ) : (
              <img src={item.icon} alt='' className='w-[30px]' />
            )}
            <span className='text-white'>{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default BottomBar
