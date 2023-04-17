import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatISO9075 } from "date-fns"

const PostPage = () => {
    const { id } = useParams()
    const [postInfo, setPostInfo] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3001/post/${id}`)

                if (response.ok) {
                    const postData = await response.json()
                    setPostInfo(postData)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost()
    }, [])

    if (!postInfo) {
        return ""
    }

    return (
        <div className='post-page'>
            <h1>{postInfo.title}</h1>

            <div className="image">
                <img src={`http://localhost:3001/${postInfo.cover}`}></img>
            </div>

            <div className="post-info">
                <span>By @{postInfo.author.username}</span>
                <span>|</span>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </div>

            <div dangerouslySetInnerHTML={{__html: postInfo.content}}>
            </div>
        </div>
    )
}

export default PostPage