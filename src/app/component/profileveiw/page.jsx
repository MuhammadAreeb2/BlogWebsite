"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProfileCard from './profilecard'
import Navbar from '../navbar/[id]/navbar'


function profile() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // axios
        // const axios = require('axios');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/getuser',
            headers: {}
        };

        axios.request(config)
            .then((response) => {

                console.log((response.data));
                for (const i of response.data.data) {
                    if (i._id === localStorage.getItem("userid")) {
                        console.log(i)
                        setUserData(i);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <div className='flex' >
            <div>
                <Navbar />
            </div>
            <div style={{ margin: "auto" }} className='my-10'>
                {userData && (
                    <ProfileCard
                        name={userData.name}
                        email={userData.email}

                    />
                )}

            </div>
        </div>
    );
}

export default profile;
