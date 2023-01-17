import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

const months = ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"];

export const Post = (props) => {
    const {datum} = props;
    
    let date = new Date(datum.created * 1000);

    return (
        <div className="post-wrapper">
            <div className="up-down">
                <FontAwesomeIcon className="fa" icon={faSortUp} />
                <p>{datum.score}</p>
                <FontAwesomeIcon className="fa" icon={faSortDown} />
            </div>
            <div className="post-main">
                <h2 className="post-title">{datum.title}</h2>
                <img src={datum.thumbnail} alt="" className="post-image"></img>
                <div className="post-foot">
                    <div className="post-comment">
                        <FontAwesomeIcon icon={faCommentDots}/>
                        <h5>{datum.num_comments}</h5>
                    </div>
                    <div className="post-time">
                        <p>Created</p>
                        <h5>{`${months[date.getUTCMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h5>
                    </div>
                    <div className="post-author">
                        <FontAwesomeIcon icon={faUser} />
                        <h5>{datum.author}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}