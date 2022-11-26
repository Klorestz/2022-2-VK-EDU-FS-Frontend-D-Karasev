import React from "react";
import classes from "./FloatButton.module.css"
import {Edit} from "@mui/icons-material";

export default function FloatButton(){
    return(
        <div className={classes.button_create_chat}>
            <Edit sx={{fontSize : "35px"}}/>
        </div>
    )
}