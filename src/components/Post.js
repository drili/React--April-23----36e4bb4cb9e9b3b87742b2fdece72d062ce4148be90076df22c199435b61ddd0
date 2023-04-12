import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="image">
                <img src="https://i0.wp.com/onlysky.media/wp-content/uploads/2022/09/are_ai_art_engines_ripping_off_artists.jpg?fit=1200%2C800&ssl=1" alt="" />
            </div>
            
            <div className="texts">
                <h2>Are AI art programs ripping off human artists?</h2>
                <p className="info">
                    <a href="" className="outter">Bob Marley</a>
                    <time>12-04-2023 15:09</time>
                </p>
                <p className="summary">This new evolution shatters the limits of what we thought computers could do. The classic conception of the computer is a mindless golem that excels at repetitive number-crunching but is incapable of creativity. However, these art engines have an uncanny intelligence. They can match human beings, imagination for imagination, giving form and shape to any notion we can conceive of. Some even seem to have a sense of humor.</p>
            </div>
        </div>
    )
}

export default Post