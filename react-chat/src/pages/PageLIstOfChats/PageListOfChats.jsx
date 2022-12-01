import React from "react";
import classes from "./PageListOfChats.module.css"
import HeaderListChat from "../../components/HeaderListChat/HeaderListChat";
import BodyLIstChat from "../../components/BodyListChat/BodyLIstChat";
import FloatButton from "../../components/FloatButton/FloatButton";
import image_user from "./static/avataaars.png"
import image_user2 from "./static/woman.png";

const chats =[
    {id : 1, name : "Дженнифер Эшли", message : "Ты куда пропал?", time_message : "15:52", image : image_user},
    {id : 2, name : "Ксения", message : "Как дела?", time_message: "14:52", image: image_user2}
]

export default function PageListOfChats({handlechatclick})
{
    return(
        <>
            <HeaderListChat></HeaderListChat>
            <div className={classes.list_of_chats}>
                {
                    chats.map((chat) =>
                        <BodyLIstChat
                            chat_id= {chat.id}
                            img_locate={chat.image}
                            name_user={chat.name}
                            last_message={chat.message}
                            time_message={chat.time_message}
                            handleChatClick={handlechatclick}
                        >
                    </BodyLIstChat>
                    )
                }
            </div>
            <FloatButton></FloatButton>
        </>
    )
}