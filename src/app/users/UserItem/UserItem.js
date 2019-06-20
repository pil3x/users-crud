import React from 'react';

const UserItem = (props) => {
    const { user } = props;
    return (
        <>
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.website}</td>
            </tr>
        </>
    )
}

export default UserItem;