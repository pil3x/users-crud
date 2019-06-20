import React from 'react';
import { fetchUsers } from '../../../services/userServices.js'
import Users from '../../users/Users.js'

class Home extends React.Component {
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
        // const { users } = this.state;
        return (
            <>
                <Users listOfUsers={this.state.users} />
            </>
        )
    }


}


export default Home;