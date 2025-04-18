import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostsDetails = () => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(-1)
    }
    const post = useLoaderData();
    return (
        <div style={{border:'3px solid orange',
            width:'500px',
            backgroundColor:'black',
            color:'white',
            margin:'15px 5px'
        }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default PostsDetails;