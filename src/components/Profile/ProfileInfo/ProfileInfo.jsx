import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                    alt=" "/>
            </div>
            <div className={s.postBlock}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTacqvnviz1w72eZSZQ9CivPXpVwGvrRAfeEyVFT-Dqa-84I_Q1&usqp=CAU"
                    alt=" "/>
            </div>
        </div>
    )
}
export default ProfileInfo;