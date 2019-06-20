import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    const { user } = props;
    return (

        <tr>
            <th scope="row">{user.id}</th>
            <td><Link to={"/users/" + user.id}>{user.name}</Link></td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.website}</td>
        </tr>

    )
}

export default UserItem;