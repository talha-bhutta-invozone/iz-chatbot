import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/global.scss';
const BotDialogues1 = () => {


return(
  
       <div>
           <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
           <p className="text-sm mb-3">Get access to pool of tech experts across multiple domains</p>
       </div>
       
);
}

export default BotDialogues1;


export const BotDialogues4 = () => {


    return(
      
           <div className="text-container">
               <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
               <p className="text-sm mb-3">Please confirm your your contact information and best time to meet, We will send an appointment to your calender instantly.</p>
               <p className="text-sm mb-3">Please select the date and time that you're available, also confirm your email address</p>
           </div>
           
    );
    }

    export const BotDialogues2 = () => {


        return(
          
               <div>
                   <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
                   <p className="text-sm mb-3">What kind of work design & development work do you need ?</p>
               </div>
               
        );
        }
    export const form = () =>
    {
            return(
                <div>
                    <input type="text" placeholder="Full Name" className="input-style"/><br />
                    <input type="text" placeholder="Email Address" className="input-style mt-2"/><br />
                    <input type="text" placeholder="Phone" className="input-style mt-2"/><br />
                    <Link to="/calender">
                    <button className="bg-blue-500 rounded py-1 px-2 mt-2 text-xs text-white">send</button>
                    </Link>
                </div>
            );

    }