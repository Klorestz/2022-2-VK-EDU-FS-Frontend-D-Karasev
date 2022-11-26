import React from "react";
import classes from "./Message.module.css";

export default function Message(props){

    return(
        <>
                    <div className={classes.message_block}>
                        {props.text}
                        <div className={classes.message_date} >
                            {props.date}
                        </div>
                    </div>
        </>
    )
}