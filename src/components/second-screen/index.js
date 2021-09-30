import React, { useState } from "react";
import ChatHead from "../chatbot-head";
import ChooseOption1 from "../select-options";
import ChatFooter from "../chatbot-footer";
import BotDialogues1 from "../bot-Dialogues";
import messageicon from "../../assets/icons/message-icon.svg";
import '../../assets/styles/global.scss';
const secondScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [chat, setChat] = useState(true);

  return (
    <div className="complete_bot second_screen_size">
      {chat ? (
        <>
          <div className=" border border-blue-400 rounded-lg">
            <ChatHead />
            <div className="message_body"></div>

            <div className="p-4 mt-6">
              <BotDialogues1 />
              <ChooseOption1 />
            </div>
            <ChatFooter />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="chat_icon">
        <img onClick={() => setChat(!chat)} src={messageicon} alt="" />
      </div>
    </div>
  );
};

export default secondScreen;
