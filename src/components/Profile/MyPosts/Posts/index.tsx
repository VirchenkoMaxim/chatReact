import React, { Component } from 'react'
import '../../styles/Post.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../redux'
import { profileActions, profileSelectors } from '../../../../redux/profile'
export const Posts = (props:any) => {
    const dispatch = useDispatch();
    let posts = useSelector((state: RootState )=> [...profileSelectors.posts(state)])
    let addPost = (value:string) => {
        dispatch(profileActions.addPost("j"))
   }
    let post = posts.reverse().map((item, index) => {
        return (
        <div key={index} className="post">
            <img className="post__img" src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="" />
            <div className="post__message"> {props.message}</div>
            <span className="post__like">Like: {props.like}</span>
        </div >
        )
    })
    return (
           <>
           {post}
           </>
        ) 
}
