import React,{ useEffect } from 'react'
import FetchApi from './FetchApi'
import { getAccessToken } from './GetToken'
function App()
{
  useEffect(()=>
  {
    getAccessToken()

  })
  return(
    <div>
      <FetchApi/>
      
    </div>
  )
}
export default App