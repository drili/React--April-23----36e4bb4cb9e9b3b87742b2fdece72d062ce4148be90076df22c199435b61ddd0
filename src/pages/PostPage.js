import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatISO9075 } from "date-fns"
import { UserContext } from '../UserContext'

const PostPage = () => {
    const { id } = useParams()
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)

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
            {userInfo.id === postInfo.author._id && (
                <div className='edit-row'>
                    <Link className='edit-btn' to={`/edit/${postInfo._id}`}>Edit Post</Link>
                </div>
            )}

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