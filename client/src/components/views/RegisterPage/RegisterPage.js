import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    });

    const { email, name, password, confirmPassword } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        }); 
    };

    const onSubmit = e => {
        e.preventDefault();

        if(password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
        }

        let body = {
            email: email,
            name: name,
            password: password
        };

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    props.history.push('/login');
                } else {
                    alert('Failed to sign up');
                }
            })
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh"
        }}>
            <form 
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
                onSubmit={onSubmit}
            >
                <label>Email </label>
                <input type="email" name="email" onChange={onChange} value={email} />
                <label>Name </label>
                <input type="text" name="name" onChange={onChange} value={name} />
                <label>Password </label>
                <input type="password" name="password" onChange={onChange} value={password} />
                <label>Confirm Password </label>
                <input type="password" name="confirmPassword" onChange={onChange} value={confirmPassword} />
                <br />
                <input type="submit" value="join" />
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);