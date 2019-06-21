import React from 'react';
import { fetchUser } from '../../../services/userServices.js';

class UserSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    loadUser() {
        const userId = this.props.match.params.id;
        fetchUser(userId)
            .then(data => {
                console.log(data);
                return this.setState({ user: data });
            })
    }

    componentDidMount() {
        this.loadUser();
    }

    render() {
        const { user } = this.state;
        if (!user) {
            return <p> Loading User...</p>
        }

        return (
            <div className="text-light">User Single
            </div>
        )
    }
}

export default UserSingle;
