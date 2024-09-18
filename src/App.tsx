import { RouterProvider } from 'react-router-dom'
import { Router } from './routers'
import { ThemeProvider } from './providers'

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
