import React from "react";
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This private info!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) =>{
    return(props) => (
        <div>
            {props.isAuthenticated && <p>You are authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="details"/>, document.getElementById('app'));