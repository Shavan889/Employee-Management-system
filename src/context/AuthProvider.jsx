import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()  
 
    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalstorage()
      const {employees} = getLocalstorage()
      setUserData(employees)
    }, [])
    
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider