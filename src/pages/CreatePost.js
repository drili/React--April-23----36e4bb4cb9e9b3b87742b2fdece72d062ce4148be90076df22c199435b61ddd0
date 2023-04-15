import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import ReactQuillModules from '../modules/ReactQuillModules'

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState("")
    const [redirect, setRedirect] = useState(false)

    const modules = ReactQuillModules()

    const handleCreatePost = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.set("title", title)
        data.set("summary", summary)
        data.set("content", content)
        data.set("file", file[0])

        const response = await fetch("http://localhost:3001/post", {
            method: "POST",
            body: data
        })

        if (response.ok) {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to={"/"}></Navigate>
    }
    
    return (
        <div>
            <form action="" onSubmit={handleCreatePost}>
                <h2>Create New Post</h2>

                <input type="text" placeholder='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='summary' name='summary' value={summary} onChange={(e) => setSummary(e.target.value)}/>
                <input type="file" onChange={(e) => setFile(e.target.files)} />
                <ReactQuill
                    value={content}
                    modules={modules}
                    onChange={newValue => setContent(newValue)}
                ></ReactQuill>

                <button type='submit' style={{ marginTop: "20px" }}>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost