import React from 'react';
import { useLoaderData } from 'react-router';

const userStyle ={
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    color: 'white',
    backgroundColor: 'black'
}


const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)
    const {address,company,username,website} = user
    return (
        <div style={userStyle}>
            <h3>User Details here</h3>
            <p>Street: {address.street}, Suite: {address.suite}, City: {address.city}, Zipcode: {address.zipcode}</p>
            <p>Company Name: {company.name}</p>
            <p>UserName: {username}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default UserDetails;