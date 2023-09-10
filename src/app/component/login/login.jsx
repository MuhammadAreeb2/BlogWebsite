"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import './login.css'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from '../loader/loader'

function Login() {
    const route = useRouter()
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('')
    const [name, setname] = useState('')

    const [loader, setloader] = useState(false)

    const login = () => {
        setloader(true)
        console.log(email, password)
        var data = {
            email,
            password
        }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/login',
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                setloader(false)

                console.log(JSON.stringify(response.data));
                // alert(response.data.message)
                toast.success(response.data.message);
                if (response.data.message == "User Login") {
                    localStorage.setItem('username', response.data.data.name)
                    localStorage.setItem('userid', response.data.data._id)
                    route.push(`./component/navbar/${response.data.data._id}`);
                }
                //  if (response.data.success) {

                // }
            })
            .catch((error) => {
                console.log(error);
                toast.error('An error occurred while logging in.');
                setloader(false)
            });

    }


    const signin = () => {
        setloader(true)
        var data = {
            email, password, name
        }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/signup',
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                setloader(false)

                console.log(JSON.stringify(response.data));
// front end se login kro
                toast.success(response.data.message);


            })
            .catch((error) => {
                console.log(error);
                toast.error('An error occurred while logging in.');
                setloader(false)
            });

    }

    return (
        <div className="main my-16 mx-auto w-80 " >
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="login">
                <div className="form">

                    <label htmlFor="chk" aria-hidden="true" className='text-center'>Log in</label>
                    <div className='flex justify-center align-center'>
                        <div> <i className="fa fa-user pr-2 " style={{ color: "white" }}></i></div>
                        <div><input className="input" type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" required />
                        </div>
                    </div>
                    <div className='flex'>
                        <div> <i className="fa fa-lock pr-2 " style={{ color: "white" }}></i></div>
                        <div><input className="input" type="password" value={password} name="pswd" onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" required />
                        </div>
                    </div>
                    {
                        loader ?
                            <Loader /> :
                            <button onClick={() => login()}>Log in</button>


                    }
                </div>
            </div>

            <div className="register">
                <div className="form">
                    <label htmlFor="chk" className='text-center' aria-hidden="true">Register</label>
                    <input className="input" type="text" name="txt" placeholder="Username" value={name} onChange={(e) => setname(e.target.value)} required />
                    <input className="input" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                    <input className="input" type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                    {
                        loader ?
                            <Loader /> :
                            <button onClick={() => signin()}>Register</button>
                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};


export default Login;
