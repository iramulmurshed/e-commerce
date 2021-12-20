import React from 'react';

const ErrorMessage = (props) => {
    const messages=props.messeges;
    let key=0;

    return (
        <div className="m-3 w-50 mx-auto bg-danger bg-opacity-25">
            {
                messages.map(err=><li className="m-2 p-2 text-danger" key={key++}>{err[0]}</li>)
            }
        </div>
    );
};

export default ErrorMessage;