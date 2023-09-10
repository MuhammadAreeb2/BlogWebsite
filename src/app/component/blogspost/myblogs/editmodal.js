// EditModal.js
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './editmodal.css'
import axios from 'axios';

const EditModal = ({ isOpen, onClose ,_id}) => {

    console.log(_id)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSaveClick = () => {
        const data = {
            title: title,
            description: description,
        };

        
let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `http://localhost:3000/api/blogs/edit/${_id}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
        // Close the modal or perform other actions as needed
        onClose();
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="div">
                        Update your Blog
                    </Typography>

                    <div className="popup">
                        <div class="form">
                            <input placeholder="Enter Blog Title" name="title" type="text" className="input_field" value={title}
                                onChange={handleTitleChange} />
                            <textarea placeholder="Description of Blog" name="description" className="input_field" value={description}
                                onChange={handleDescriptionChange} />

                            <button className="submit" onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
};

export default EditModal;
