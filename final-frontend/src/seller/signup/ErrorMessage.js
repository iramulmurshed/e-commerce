import React from 'react';

const ErrorMessage = (props) => {
    const messages=props.messeges;
    let key=0;

    return (
        <div className="m-3">
            {
                messages.map(err=><li className="m-2 p-2" key={key++}>{err[0]}</li>)
            }
        </div>
    );
};

export default ErrorMessage;