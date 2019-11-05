import React from 'react';
import {Redirect} from 'react-router-dom';

function withAuth(Component) {
    return function NewComponent(props) {
        const user = localStorage.getItem('sagaUser');
        if(user){
            return <Component {...props} user={JSON.parse(user)} />
        }        
        else{
            return <Redirect to="/signin" />
        }
    }
}

export default withAuth;