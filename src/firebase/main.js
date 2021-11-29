import firebase from 'firebase/app';
import getInstance from './config';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider()

const GoogleAuth = async() => {
    try{
        const response = await getInstance().auth().signInWithPopup(provider)
        return response
    }
    catch (error){
        return error.message
    }
}

export {GoogleAuth}