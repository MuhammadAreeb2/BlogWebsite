'use client'
import { useState } from 'react'
import './add.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBlogs() {
    let currentDate = new Date();
    const [posttitle, setposttitle] = useState('')
    const [postdescription, setpostdescription] = useState('')
    console.log(posttitle)
    console.log(postdescription)
    const submit = () => {
        let key = localStorage.getItem("userid")

        // let data = {
        //     postdescription: postdescription,
        //     posttitle: posttitle,
        //     uid: key,
        //     timestamp: currentDate 
        // }
        if (posttitle == "" || postdescription == "") {
            alert('req field ')
        }

        else {

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/blogs/addpost',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    title: posttitle,
                    description: postdescription,
                    uid: key,
                    timestamp: currentDate
                }
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    toast.success('Blog Added');
                })
                .catch((error) => {
                    toast.error('An error occurred while logging in.');
                });

        }


    }
    return (
        <>
            <div class="login-box">
                <div>
                    <div class="user-box">
                        <input type="text" name="blogs" value={posttitle} onChange={(e) => setposttitle(e.target.value)} required="" />
                        <label>Blog Title </label>
                    </div>
                    <div class="user-box">
                        <textarea type="text" name="" required="" value={postdescription} onChange={(e) => setpostdescription(e.target.value)} />
                        <label>Description </label>
                    </div>
                    <center>
                        <button style={{ color: "white" }} onClick={() => submit()}>
                            Add  Blog
                            <span></span>
                        </button></center>
                </div>
                
            </div>
            <ToastContainer />
        </>
    )
}
export default AddBlogs