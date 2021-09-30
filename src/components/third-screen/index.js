import React, {useState} from "react";
import ChatHead from "../chatbot-head";
import ChatFooter from "../chatbot-footer";
import { Chooseoptions2 } from '../select-options';
import { BotDialogues2 } from "../bot-Dialogues";
import messageicon from '../../assets/icons/message-icon.svg';
import '../../assets/styles/global.scss';
const thirdScreen = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [chat , setChat] = useState(true);

return(
    <div className="complete_bot second_screen_size">
       
        {chat? 
         <>
         <div className=" border border-blue-500 rounded-lg">

         <ChatHead />
         <div className="message_body">
             <div className="user_message">
                 <p className="text-xs text-gray-400 time">You 11:47 am</p>
                 <p className="text-sm">Web development</p>
             </div>
        </div>     

                <div className="p-4 mt-6">
                    <BotDialogues2 />
                   <Chooseoptions2 />
                </div>
                <ChatFooter />
            </div></>
   
     :
      ''
      }
 <div className="chat_icon">
  <img onClick={() => setChat(!chat)} src={messageicon} alt="" />
</div>
 </div>

);
}

export default thirdScreen;