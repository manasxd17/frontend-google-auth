import React from 'react'
import { GoogleAuth } from '../../firebase/main'
import './SignIn.css'
import { useNavigate } from 'react-router';
import { add_user } from '../../Services/add_users'
export default function SignIn() {
    const navigate = useNavigate();
    const GoogleAuthHandler = async (event) => {
        try {
            event.preventDefault()
            const res = await GoogleAuth()
            const result = await add_user(res.additionalUserInfo.profile.given_name, res.additionalUserInfo.profile.email, res.credential.accessToken)
            navigate('/home')
            console.log(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2">Email : </label>
                        <input type="text" className="form-control col-sm-8" placeholder="Enter your email"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2">Password : </label>
                        <input type="password" className="form-control col-sm-8" placeholder="Enter your password"></input>
                    </div>
                    <div className="login-button">
                        <button type="submit" className="btn btn-outline-dark">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                        <br />
                        <br />
                        <p>------------OR-------------</p>
                        <small>Sign in via google  </small>
                        <button className="btn btn-outline-primary" onClick={GoogleAuthHandler}>
                            <i className="fa fa-google" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
