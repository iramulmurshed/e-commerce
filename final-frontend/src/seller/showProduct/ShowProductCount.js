import React from 'react';

const ShowProductCount = (props) => {
    return (
        <div className="d-flex justify-content-evenly p-5 m-5 bg-success bg-opacity-75 text-light">
            <h1>Upcoming : {props.u}</h1>
            <h1>Stock Out :{props.o}</h1>
            <h1>Available : {props.a}</h1>
        </div>
    );
};

export default ShowProductCount;