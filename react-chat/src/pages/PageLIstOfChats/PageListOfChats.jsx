import React from "react";
import classes from "./PageListOfChats.module.css"
import HeaderListChat from "../../components/HeaderListChat/HeaderListChat";
import BodyLIstChat from "../../components/BodyListChat/BodyLIstChat";
import FloatButton from "../../components/FloatButton/FloatButton";
import image_user from "./static/avataaars.png"
import image_user2 from "./static/woman.png";


export default function PageListOfChats({handlechatclick})
{
    return(
        <>
            <HeaderListChat></HeaderListChat>
            <div className={classes.list_of_chats}>
                <BodyLIstChat
                    chat_id={1}
                    img_locate={image_user}
                    name_user={"Дженнифер Эшли"}
                    last_message={"Ты куда пропал?"}
                    time_message={"15:52"}
                    handleChatClick={handlechatclick}
                >
                </BodyLIstChat>
                    <BodyLIstChat
                        chat_id={2}
                        img_locate={image_user2}
                        name_user={"Ксения"}
                        last_message={"Как дела?"}
                        time_message={"14:52"}
                        handleChatClick={handlechatclick}
                    >
                    </BodyLIstChat>
            </div>
            <FloatButton></FloatButton>
        </>
    )
}