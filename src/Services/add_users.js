import axios from 'axios'
// import { AuthHeader } from './Auth_header'
const add_user = async(access_token) => {
    try{
        const structure = {
            method:'post',
            url:'http://localhost/auth-service/auth/swap-token',
            headers:{'Content-Type':'application/x-www-form-urlencoded','X_Requested_With':'XMLHttpRequest'},
            data:access_token
        }
        const response = await axios(structure)
        return response
    }
    catch(error){
        return error.message
    }
}

export {add_user}
