import React,{useState}from 'react'
import {Link} from 'react-router-dom'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') 

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
    }
    const onChangePass = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div className="bg-image" 
            style={{marginTop: "150px"}}
            >
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-4" >
                        <h3 >Login</h3>
                        <form>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={onChangeEmail} aria-describedby="emailHelp"></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" value={password} onChange={onChangePass} ></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <Link to = '/home'>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
export default Login