import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {firestore} from "../firebase";

function PostDetail() {
  const [post,setPost] = useState({});
  const {postId} = useParams();

  useEffect(()=>{
    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot)=>{
      console.log("Snapshot",snapshot.data());

      setPost(snapshot.data());
    });

  },[]);

  return <div className="post-detail">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>;
}

export default PostDetail;
