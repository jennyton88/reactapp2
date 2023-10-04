import React, {useState, useEffect} from 'react';
import UserPost from "./UserPost";

export default function Feed({backendData}) {

  return (
    <div>
      
      {(typeof backendData.posts === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.posts.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />)
      )}
    </div>
  )
}