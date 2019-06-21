import React from 'react';

const CreateUser = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <>
            <div className="container mt-5">
                <form className="text-light" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Name"
                            onChange={props.onInputChange}
                            value={props.name}
                            autoComplete="off" />
                    </div>
                    <p className="text-danger">{props.errors.name}</p>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={props.onInputChange}
                            value={props.email} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <p className="text-danger">{props.errors.email}</p>

                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>

            </div>
        </>
    )
}


export default CreateUser;