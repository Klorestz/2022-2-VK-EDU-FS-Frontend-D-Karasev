import React from "react";
import classes from "./MessagesForm.module.css"
import AttachmentIcon from '@mui/icons-material/Attachment';
import Message from "../Message/Message";

export default function MessagesForm(props){
    return(
        <>
            <div className={classes.messages}>
                {
                    props.messages.map((message) =>
                        <Message
                        key={message.id}
                        text={message.text}
                        date={message.date} />
                    )
                }
            </div>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <input className={classes.form} value={props.value} placeholder="Введите сообщение" onChange={props.handleChange} />
                    <button className={classes.attachemnets}>
                        <AttachmentIcon />
                    </button>
            </form>
        </>
    )
}
