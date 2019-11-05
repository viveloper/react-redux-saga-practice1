import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions';

function Signin(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signin, user } = props;

    const onChange = e => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
        else {

        }
    }

    const onSubmit = e => {
        e.preventDefault();        
        signin(username, password)
    }

    if(!user){
        return (
            <div className="signin">
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" name="username" placeholder="username" onChange={onChange} value={username} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" onChange={onChange} value={password} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
    else
    {
        return (
            <Redirect to="/" />
        );        
    }
    
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signin: (username, password) => {
            dispatch(signin(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);