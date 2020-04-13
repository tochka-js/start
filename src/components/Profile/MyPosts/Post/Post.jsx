import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt=" "/>
                {props.message}
                <div>
                  <span>
                      <button>like</button>{props.likesCount}
                  </span>

                </div>
            </div>
        </div>
    );

}
export default Post;