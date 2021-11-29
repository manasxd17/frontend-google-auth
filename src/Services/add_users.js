import axios from 'axios'

const add_user = async(name, email, access_token) => {
    const userData = {
        'name':name,
        'email':email,
        'token':access_token
    }
    try{
        const structure = {
            'method':'post',
            'url':'http://9755-202-142-70-145.ngrok.io',
            'data':userData
        }
        const response = await axios(structure)
        return response
    }
    catch(error){
        return error.message
    }
}

export {add_user} 
