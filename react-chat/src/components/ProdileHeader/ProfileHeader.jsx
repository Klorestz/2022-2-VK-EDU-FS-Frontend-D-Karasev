import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import classes from "./ProfileHeader.module.css";
import {Link} from "react-router-dom";

export default function ProfileHeader(){
    return(
        <div className={classes.header}>
            <button className={classes.button_headers}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <ArrowBackIcon className={classes.icon} sx={{fontSize : "35px"}}/>
                </Link>
            </button>
            <div className={classes.name_of_page}>
                Edit chat
            </div>
            <button className={classes.button_headers}>
                <DoneIcon  className={classes.icon} sx={{fontSize : "35px"}}/>
            </button>
        </div>
    )
}