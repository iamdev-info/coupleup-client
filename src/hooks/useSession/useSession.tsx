import { useContext } from 'react'
import AuthContext from '~/contexts/AuthContext/AuthContext'

function useSession() {
  return useContext(AuthContext)
}

export default useSession
