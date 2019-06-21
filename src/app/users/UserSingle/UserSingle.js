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
        const { author } = this.state;
        return (
            <div className="text-light">User Single
            <p>sds</p>
            </div>
        )
    }
}

export default UserSingle;