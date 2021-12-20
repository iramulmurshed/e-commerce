import React from 'react';
import {Link} from "react-router-dom";

const OutNav = () => {
    return (
        <div>
            <Link to="/signup"><button>Sign UP</button></Link>
            <Link to="/login"><button>login</button></Link>

        </div>
    );
};

export default OutNav;