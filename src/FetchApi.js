import React,{useEffect, useState} from 'react'

//importing axios
import axios  from 'axios'
import { getAccessToken } from './GetToken'

// functional component
function FetchApi()
{
   const[data,setData]=useState('')

   
// onclick function 
   const  getAPI = async () =>
   {
    const accessToken = await getAccessToken()
    //https://management.azure.com/subscriptions/35919583-2c63-47ea-951d-91bd0158f03b?api-version=2020-01-01
axios({
    method:'GET',
    url:' https://management.azure.com/subscriptions/35919583-2c63-47ea-951d-91bd0158f03b?api-version=2020-01-01',
    headers:{
        
        Authorization: `Bearer ${accessToken}`
    
        // Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iZmM3MTljNi1lNTUyLTRjYmUtOGI2Yy02ZWU5ZmE2YjNjYzMvIiwiaWF0IjoxNjY2MDc2NzUzLCJuYmYiOjE2NjYwNzY3NTMsImV4cCI6MTY2NjA4MDg3MCwiYWNyIjoiMSIsImFpbyI6IkFXUUFtLzhUQUFBQUVIekYvbTNtYk1UWnU5T1ZqRDUvVmVSVGJZN3Z3VFZyMXNLR3pac0FBOGRsRVd2WmIwOGhwZm9ndjh3RDJFTGhlLzNHcHBZNnNpb1g2bzdWaGtJVnk0UUt2UU16Si83M21SazVDSVpPT01rYndGazBZekNIOXRSamVXRkRveFU4IiwiYWx0c2VjaWQiOiIxOmxpdmUuY29tOjAwMDMwMDAwMEZGMTYyNDciLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiYjY3N2MyOTAtY2Y0Yi00YThlLWE2MGUtOTFiYTY1MGE0YWJlIiwiYXBwaWRhY3IiOiIwIiwiZW1haWwiOiJpbmZ5XzY5MjgwMEBvdXRsb29rLmNvbSIsImZhbWlseV9uYW1lIjoiU29tYXN1bmRhcmFtIiwiZ2l2ZW5fbmFtZSI6IlJhamFzZWthcmFuIiwiZ3JvdXBzIjpbIjM5NTgyOTQyLWE3ZGYtNDkzNS04ZjFmLTk1MjVhYjJiMGUxMyIsIjVlOTg1ZDQwLWI1M2UtNDZmNS05N2E5LTQ5NWQ2OWFkOWRkOSIsImZlMjUwOTQ2LTFlZjYtNDkxNi05YTE2LTFhMzA4MzJjZjA5ZiJdLCJpZHAiOiJsaXZlLmNvbSIsImlwYWRkciI6IjEwMy4xNTkuMjQ5LjE0NiIsIm5hbWUiOiJSYWphc2VrYXJhbiBTb21hc3VuZGFyYW0iLCJvaWQiOiI0NjcwYjlkOC0zYzQ1LTQyZmUtYmQ3Zi0xOTQxOTk3ZjI4MWEiLCJwdWlkIjoiMTAwMzIwMDE3MDAzRTM0NiIsInJoIjoiMC5BVk1BeGhuSHYxTGx2a3lMYkc3cC1tczh3MFpJZjNrQXV0ZFB1a1Bhd2ZqMk1CTlRBT0UuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoib2NFaGl4WFBLRmkyeHdJY056ZG5uTjZGQ1FhdkM5WjB0NkEyeUpzMTNDayIsInRpZCI6ImJmYzcxOWM2LWU1NTItNGNiZS04YjZjLTZlZTlmYTZiM2NjMyIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jaW5meV82OTI4MDBAb3V0bG9vay5jb20iLCJ1dGkiOiJwbGRHSGpFQ1EwcVo4NzZhQUdOUkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI5Yjg5NWQ5Mi0yY2QzLTQ0YzctOWQwMi1hNmFjMmQ1ZWE1YzMiLCIxM2JkMWM3Mi02ZjRhLTRkY2YtOTg1Zi0xOGQzYjgwZjIwOGEiXSwieG1zX3RjZHQiOjE1OTQwMzU0OTV9.I3dOunMgut1eFZtIaYg5kiMH9gco4bsbm21k7hy4F2ZRBFahwUbTlRG9e6ggcAul5lcnwVJ3h4Uuox-F-Ni232xTzxol9g8YfJ19kY-T_Sxq3XgBFboKL0EaKMx7FbIx5KgBBfpPv1cN8VCBA2biXN2PSLUksw4AjIUe0ZjtMFz0xBo5-8rHNtwcki5z5J2kg7G8cDRgWxEEzxNoTqOaq-ZDa7orfTHlmuYg0OjzstSyAOihO2xlDNDGR1BIu9E21JjbInMgdUcxRYw94u5QBsObY3dgjRziJfpCjwd2-gwL9QrD2asVpAEni7uQZSd0RtsezAU11OtIcF9Y6_NRXg`
    }

})
.then((res)=>{
    //response is stored in data
setData(res.data)
console.log(data)  
})
.catch(error=>{
    setData(error)
})

   }
   useEffect(()=>
  {
    getAPI()

  },[])
    return(
        <div>
           <button onClick={getAPI}>Click</button>
           
        </div>
    )
}
export default FetchApi