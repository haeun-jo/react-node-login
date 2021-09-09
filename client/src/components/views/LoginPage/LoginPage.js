import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password
        };

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error');
                }
            })

        setInputs({
            email: "",
            password: ""
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
                    flexDirection: "column",
                }}
                onSubmit={onSubmit}
            >
                <label>Email </label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="이메일을 입력해주세요." 
                    onChange={onChange}
                    value={email} 
                />
                <label>Password </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={onChange}
                    value={password} 
                />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default withRouter(LoginPage);