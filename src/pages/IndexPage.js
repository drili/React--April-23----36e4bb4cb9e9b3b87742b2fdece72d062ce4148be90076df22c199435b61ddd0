import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:3001/post")

                if (response.ok) {
                    const postsData = await response.json()
                    setPosts(postsData)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} key={post._id}></Post>
            ))}
        </>
    )
}

export default IndexPage