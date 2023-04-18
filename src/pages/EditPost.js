import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import ReactQuillModules from '../modules/ReactQuillModules'

const EditPost = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState("")
    const [redirect, setRedirect] = useState(false)

    const modules = ReactQuillModules()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/post/${id}`)

            if (response.ok) {
                const postInfo = await response.json()

                setTitle(postInfo.title)
                setContent(postInfo.content)
                setSummary(postInfo.summary)
            }
        }
        fetchData()
    }, [])

    const handleUpdatePost = (e) => {
        e.preventDefault()

        const fetchPost = async () => {
            const data = new FormData()
            data.set("title", title)
            data.set("summary", summary)
            data.set("content", content)
            data.set("id", id)

            if(file?.[0]) {
                data.set("file", file?.[0])
            }

            const response = await fetch(`http://localhost:3001/post/${id}`, {
                method: "PUT",
                body: data,
                credentials: "include"
            })

            if (response.ok) {
                setRedirect(true)
            }
        }
        fetchPost()
    }

    if (redirect) {
        return <Navigate to={`/post/${id}`}></Navigate>
    }

    return (
        <div>
            <form action="" onSubmit={handleUpdatePost}>
                <h2>Edit Post</h2>

                <input type="text" placeholder='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='summary' name='summary' value={summary} onChange={(e) => setSummary(e.target.value)}/>
                <input type="file" onChange={(e) => setFile(e.target.files)} />
                <ReactQuill
                    value={content}
                    modules={modules}
                    onChange={newValue => setContent(newValue)}
                ></ReactQuill>

                <button type='submit' style={{ marginTop: "20px" }}>Edit Post</button>
            </form>
        </div>
    )
}

export default EditPost