import React from "react";
import classes from "./ProfileBody.module.css"
import photo_camera from "./static/camera.png"

export default function ProfileBody(props){
    return(
        <div className={classes.edit_profile}>
            <div className={classes.edit_photo}>
                <img src={photo_camera} className={classes.camera} alt="default_avatar"/>
                <img src={props.image_user} className={classes.edit_avatar} alt="default_avatar"></img>
            </div>
            <div className={classes.info_user}>
                <div className={classes.input_desc}>Full name</div>
                <input className={classes.text_input} placeholder="" type="text"/>
            </div>
            <div className={classes.info_user}>
                <div className={classes.input_desc}>Username</div>
                <input className={classes.text_input} placeholder="@" type="text"/>
                <div className={classes.input_info}>Minimum length is 5 characters</div>
            </div>
            <div className={classes.info_user}>
                <div className={classes.input_desc}>Bio</div>
                <input className={classes.text_input} placeholder="" type="text"/>
                <span className={classes.input_info}>Any details about you</span>
            </div>
        </div>
    )
}