import React from 'react';
import CreateUser from '../../components/CreateUser/CreateUser.js';


class CreateUserPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            email: '',
            errors: {}
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        const { errors } = this.state;
        delete errors[name]

        this.setState({
            [name]: value,
            errors,
        })
    }

    validateForm() {
        const { name, email } = this.state;

        let errors = {};
        if (name.length < 3) {
            errors.name = '*Name too short';
        }

        if (!email.includes('@')) {
            errors.email = '*Invalid mail';
        }

        const hasErrors = Object.keys(errors).length;
        if (hasErrors) {
            this.setState({ errors })
        }

        return !hasErrors;
    }

    onSubmit() {
        if (!this.validateForm()) {
            return;
        }

        const { name, email } = this.state;
        console.log("continue with submitting");
    }


    componentDidMount() {

    }

    render() {

        const { name, errors, email } = this.state;
        const { onInputChange, onSubmit } = this;

        return (
            <>
                <CreateUser
                    errors={errors}
                    onSubmit={onSubmit}
                    onInputChange={onInputChange}
                    name={name}
                    email={email} />

            </>
        )
    }
}

export default CreateUserPage;