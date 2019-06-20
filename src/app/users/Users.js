import React from 'react';
import UserItem from './UserItem/UserItem';

const Users = (props) => {

    const { listOfUsers } = props;
    // console.log(listOfUsers);
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listOfUsers.map((user, index) => {
                        return <UserItem key={index} user={user} />
                    })}
                </tbody>
            </table>

        </>
    )

}

export default Users;