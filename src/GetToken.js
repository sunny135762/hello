import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE, RESOURCE } from "./Constant";
//Arrow function 
export const getAccessToken = () => {
    console.log('getAccessToken')
    return new Promise((res, rej) => {
      const expireTime = localStorage.getItem('expires_on');
    const currentTimeStamp = Math.floor(Date.now() / 1000)
    if(expireTime && expireTime - currentTimeStamp >= 3) {
      res(localStorage.getItem('access_token'))
    } else {
        var bodyFormData = new FormData();
        bodyFormData.append('grant_type', 'client_credentials');
        bodyFormData.append('client_id', 'aefd71ea-fd3a-4811-a603-04710fb5d58a');
        bodyFormData.append('client_secret', 'WvP7Q~XM9c5NSzXdn2nRh-UnzYlg5hDRP53bk');
        bodyFormData.append('resource', 'https://management.azure.com');
        axios({
            method: "POST",
            url: "https://login.microsoftonline.com/bfc719c6-e552-4cbe-8b6c-6ee9fa6b3cc3/oauth2/token",
            data: bodyFormData,
            headers: { 
              "Content-Type": "multipart/form-data" 
            },
          })
            .then(function (response) {
              const access_token = response.data.access_token
              const expires_on = response.data.expires_on
              localStorage.setItem('expires_on', expires_on)
              localStorage.setItem('access_token', access_token)
              res(access_token)
            })
            .catch(function (response) {
              console.log(response);
            });
      }
    })
    
    }