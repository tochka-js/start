import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt=" "/>
        </div>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTacqvnviz1w72eZSZQ9CivPXpVwGvrRAfeEyVFT-Dqa-84I_Q1&usqp=CAU"
                alt=" "/>
        </div>
       <MyPosts />
    </div>
}
export default Profile;