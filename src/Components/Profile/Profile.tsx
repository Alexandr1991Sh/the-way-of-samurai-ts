import React from "react";
import MyPosts from "./MyPosts/MyPosts.tsx";
import ProfileInfo from "../ProfileInfo/ProfileInfo.tsx";

type ProfileProps = {
    posts: string
}

const Profile = (props: ProfileProps)=>{
    return(
        <div>
           <ProfileInfo/>
          <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile