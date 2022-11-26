import React from "react";
import classes from "./PageListOfChats.module.css"
import HeaderListChat from "../../components/HeaderListChat/HeaderListChat";
import BodyLIstChat from "../../components/BodyListChat/BodyLIstChat";
import FloatButton from "../../components/FloatButton/FloatButton";
import image_user from "./static/avataaars.png"


export default function PageListOfChats({handleChatClick})
{
    return(
        <>
            <HeaderListChat></HeaderListChat>
            <div className={classes.list_of_chats}>
                <BodyLIstChat
                    img_locate={image_user}
                    name_user1={"Дженнифер Эшли"}
                    last_message={"Ты куда пропал?"}
                    time_message={"15:52"}
                    handleChatClick={handleChatClick}
                >
                </BodyLIstChat>
            </div>
            <FloatButton></FloatButton>
        </>
    )
}