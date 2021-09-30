
import React from "react";
import {Link} from 'react-router-dom';
import '../../assets/styles/global.scss';

const chatHead = () => {


return(
        <div className="rounded-tr-lg rounded-tl-lg bot-head bg-blue-500 p-4">
            <Link to="/">
            <h3 className="text-lg font-semibold text-white">Iz Bot</h3>
            </Link>
            <p className="text-sm text-white">What can I help learn more about?</p>
        </div>

);
}

export default chatHead;