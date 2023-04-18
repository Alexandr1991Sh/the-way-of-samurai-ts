import React from "react";
import Posts from "./Posts/Posts.tsx";
import s from './MyPosts.module.css'

type MyPostsProps = {
    posts: any
}

const MyPosts = (props: MyPostsProps) => {
    const newPosts = props.posts.map(p => { return <Posts message={p.message} likesCount={p.likesCount}/>})

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>

                    {newPosts}

                </div>
            </div>
        </div>
    )
}

export default MyPosts