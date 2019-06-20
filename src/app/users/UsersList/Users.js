import React from 'react';
import { fetchUsers } from '../../../services/userServices.js'
import UserItem from '../UserItem/UserItem.js'

class Users extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            users: []
        }
    }

    loadUsers() {
        fetchUsers()
            .then(users => {
                return this.setState({ users })
            })

    }

    componentDidMount() {
        this.loadUsers();
    }


    render() {
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
                        {this.state.users.map((user, index) => {
                            return <UserItem key={index} user={user} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }


}


export default Users;