import React, { useState, useEffect } from "react";
import "./PostList.css"
import { Post } from "../Post/Post";
import { useSelector } from "react-redux";
import { selectList } from "./postsSlice";

export const PostList = () => {

    const posts = useSelector(selectList);
    const [data, setData] = useState(posts);
    // const [data, setData] = useState([{
    //     data: {
    //         score: 100,
    //         title: "MEGATHREAD: VINCE MCMAHON LOVES BIG SWEATY MEN",
    //         thumbnail: "https://b.thumbs.redditmedia.com/Bmz12yKeSqdPFmkL1mifbAWF4rNWytCGFzcDn80TIoE.jpg",
    //         num_comments: 123,
    //         author: "Kyle Guers",
    //         created: 1677850349.0,
    //     },
    // },
    // {
    //     data: {
    //         score: 2300,
    //         title: "BOSTON CONNER IS A BIG FAT STOOGE",
    //         thumbnail: "https://b.thumbs.redditmedia.com/gpjLUKwI431mG7KYLYNsKGcENpKHgaq5nHybGSzpu-I.jpg",
    //         num_comments: 123,
    //         author: "Kyle Guers",
    //         created: 1677850349.0,
    //     },
    // }])

    useEffect(() => {
        setData(posts);
    }, [posts, data, setData]);


    if (data.length === 0) {
        return (
            <div className="postList-empty">
                <h3>Use Search Bar At The Top Of The Page To Find Content</h3>
            </div>
        );
    };

    return (
        <div className="postList">
            {data.map((post, index )=> {
                let datum = post.data;
                return <Post key={index} datum={datum} />;
            })}
        </div>
    );
};
