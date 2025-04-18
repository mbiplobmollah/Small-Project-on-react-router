import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    // console.log(userPromise)
    const user = use(userPromise)
    console.log(user)

    const {name,username,email} = user;
    return (
        <div>
            <p><small>User Name: {username}</small></p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails2;