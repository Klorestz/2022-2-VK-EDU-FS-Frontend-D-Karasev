import React from "react";
import ProfileHeader from "../../components/ProdileHeader/ProfileHeader";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import classes from "../PageChat/PageChat.module.css";
import image_user from "./static/profile.png"

export default function PageProfile(){
    return(
        <div className={classes.dialogue}>
            <ProfileHeader></ProfileHeader>
            <ProfileBody
                image_user={image_user}
            />
        </div>
    )
}