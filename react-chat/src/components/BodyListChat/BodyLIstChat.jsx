import React from "react";
import classes from "./BodyListChat.module.css"
import {DoneAll} from "@mui/icons-material";

export default function BodyLIstChat(props){
    return(
            <div className={classes.chat} onClick={() => props.handleChatClick()}>
                <div className={classes.avatar}>
                    <img src={props.img_locate} className={classes.avatar_user} alt="default_avatar"/>
                </div>
                <div className={classes.name_user_last_message}>
                    <div className={classes.name_of_user}>
                        {props.name_user1}
                    </div>
                    <div className={classes.last_message}>
                        {props.last_message}
                    </div>
                </div>
                <div className={classes.message_time_reading}>
                    <div className={classes.message_time}>
                        {props.time_message}
                    </div>
                    <div className={classes.reading}>
                        <DoneAll />
                    </div>
                </div>
            </div>
    )
}