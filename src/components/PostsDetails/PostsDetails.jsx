import React from 'react';
import { useLoaderData } from 'react-router';

const PostsDetails = () => {
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
        </div>
    );
};

export default PostsDetails;