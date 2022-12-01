import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from "./HeaderChat.module.css"
import classNames from "classnames";
import {Link} from "react-router-dom";

export default function HeaderChat(props){
    return(
        <div className={classes.header}>
            <button className={classNames(classes.back_to_list_chat, classes.button_headers)}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <ArrowBackIcon sx={{fontSize : "35px"}}/>
                </Link>
            </button>
            <div className={classes.name_of_chat}>
                <div className={classes.name_of_chat_user}>
                    {props.name}
                </div>
                <div className={classes.name_of_chat_last_visited}>
                    {props.last_visited}
                </div>
            </div>
            <button className={classes.button_headers}>
                <SearchIcon sx={{fontSize : "35px"}} className={classes.icon}/>
            </button>
            <button className={classes.button_headers}>
                <MoreVertIcon sx={{fontSize : "35px"}} className={classes.icon}/>
            </button>
        </div>
    )
}