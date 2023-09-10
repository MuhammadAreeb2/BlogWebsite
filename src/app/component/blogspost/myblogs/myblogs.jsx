"use client"
import './myblogs.css'
import profile from '../../../assests/profile.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditModal from './editmodal';



function MyBlog() {
    const [editModalId, setEditModalId] = useState(null);
    let usernamee = localStorage.getItem("username")
    const [blogsdata, setblogsdata] = useState([])
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for modal visibility
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    useEffect(() => {

    }, [isDataUpdated]);

    useEffect(() => {


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/blogs/getblog',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setblogsdata(response.data.data)
                console.log(blogsdata)
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    const onDelete = (id) => {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/blogs/delete/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setIsDataUpdated(true);
                console.log(JSON.stringify(response.data));
                toast.success('Delete successful');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error');
            });

    }
    const onEdit = (id) => {
        // Open the EditModal when the "Edit" button is clicked
        setIsEditModalOpen(true);
        setEditModalId(id);
    }
    const closeEditModal = () => {
        // Close the EditModal
        setIsEditModalOpen(false);
    }

    return (
        <>
            <div className='myblogs_div'  >
                <div>
                <div className="referral-heading-container">
                    <div className="thin-line-left" data-aos="fade-right" data-aos-delay="300"></div>
                    <h2 className="referral-heading heading_my_blog">  My blog s</h2>
                    <div className="thin-line-right" data-aos="fade-left" data-aos-delay="300" ></div>
                </div>


                {
                    blogsdata.map((value, i) => {
                        const [createdAtDate, createdAtTime] = value.createdAt.split('T');
                        const Time = createdAtTime.split('.')[0];

                        return (
                            <>
                                <div className="border-2 my-14  border-gray-300  pb-3 myblogs">
                                    <div className='flex p-2'>
                                        <div >
                                            <Image src={profile} className='w-20' alt='pic' />
                                        </div>
                                        <div className='flex flex-col mx-3'>
                                            <div>
                                                <h2>Name : {usernamee}</h2>
                                                {/* <h2>{value.title}</h2> */}
                                            </div>

                                            <div >
                                                <h5>{createdAtDate}</h5>
                                                <h5>{Time}</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <h2 className='text-2xl font-semibold italic'>{value.title}</h2>
                                        <p>
                                            {value.description}
                                        </p>
                                    </div>
                                    <div className='flex'>
                                        <div className='mx-4'>
                                            <button className='edit' onClick={() => onEdit(value._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                                <span>Edit</span>
                                            </button>
                                        </div>
                                        <div>
                                            <button className=' edit' onClick={() => onDelete(value._id)}  >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                                <span>Delete</span>
                                            </button>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
         </div>
            {isEditModalOpen && <EditModal isOpen={isEditModalOpen} onClose={closeEditModal} _id={editModalId} />}
        </>
    )
}
export default MyBlog