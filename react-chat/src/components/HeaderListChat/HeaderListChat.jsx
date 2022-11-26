import React from "react";
import classes from "./HeaderListChat.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HeaderListChat(){
    return(
        <div className={classes.header}>
            <button className={classes.button_header_list}>
                <MenuIcon className={classes.icon} sx={{fontSize : "34px"}}/>
            </button>
            <div className={classes.name_of_page}>
                Мессенджер
            </div>
            <button className={classes.button_header_list}>
                <MoreVertIcon className={classes.icon} sx={{fontSize : "34px"}}/>
            </button>
        </div>
    )
}
