import React from 'react'
import { formatISO9075 } from "date-fns"
import { Link } from 'react-router-dom'

const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
    return (
        <>
            {author?.username && (
                <div className="post">
                    <div className="image">
                        <Link to={`/post/${_id}`}>
                            <img src={'http://localhost:3001/' + cover} alt="" />
                        </Link>
                    </div>
                    
                    <div className="texts">
                        <Link>
                            <h2 to={`/post/${_id}`}>{title}</h2>
                            <p className="info">
                                <span>{author?.username}</span>
                                <time>{formatISO9075(new Date(createdAt))}</time>
                            </p>
                            <p className="summary">{summary}</p>
                        </Link>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default Post