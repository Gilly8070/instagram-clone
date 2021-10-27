import Post from "./Post";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from "react";

// const posts = [
//     {
//         id: '123',
//         username: 'sgahsse',
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         caption: 'Hey there!!!',
//     },
//     {
//         id: '434',
//         username: 'sgahsse',
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         caption: 'Hey there!!!',
//     },
// ]

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => 
        onSnapshot(
            query(collection(db, 'posts'),
                orderBy('timestamp', 'desc')),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        ), [db]);
    // console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    );
}

export default Posts
