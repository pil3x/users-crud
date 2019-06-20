import React from 'react';
import { fetchUser } from '../../../services/userServices.js';

class UserSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: null
        }
    }

    loadUser() {
        const userId = this.props.match.params.id;
        fetchUser(userId)
            .then(data => {
                console.log(data);
                return this.setState({ author: data });
            })
    }

    componentDidMount() {
        this.loadUser();
    }

    render() {
        return (
            <div>User Single</div>
        )
    }
}

export default UserSingle;