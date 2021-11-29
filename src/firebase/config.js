import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyB40_KWhmWVwT9vSRCsJiIwUFb2xEEH6Jc",
    authDomain: "q-gcp-rd11-11-itd-qcaps-21-11.firebaseapp.com",
  };

let instance

const getInstance = () => {
    if(instance){
        return instance
    }
    else{
        instance = firebase.initializeApp(firebaseConfig)
        return instance
    }
}

export default getInstance;

