import React from 'react';
import {Link} from "react-router-dom";


const OutNav = () => {
    return (
        <div className="position-sticky top-0">
            <div className="d-flex justify-content-evenly s-nav bg-opacity-100 p-2">
                <h1 className="text-center text-color mx-4 text-uppercase">
                    E-SHOP
                </h1>
                <h1 className="s-dash">Seller </h1>
                <div className="d-flex flex-row justify-content-evenly p-2">
                    <Link to="/signup">
                        <button className="btn btn-success mx-3">Signup</button>
                    </Link>
                    {/*<div>*/}
                    {/*    <h4 className="text-light mx-3">Welcome Back, {name}</h4>*/}
                    {/*</div>*/}
                    <div>
                        <Link to="/login">
                            <button className="btn btn-danger mx-3">login</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        // <div>
        //     <Link to="/signup"><button>Sign UP</button></Link>
        //     <Link to="/login"><button>login</button></Link>
        //
        // </div>
    );
};

export default OutNav;