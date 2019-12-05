import React from 'react';

const VideoItem = ({video})=>{
    return (
<div className="item">
    <img alt="img" src={video.snippet.thumbnail.medium.url} />
{video.snippet.title}

    </div>
    )
}

export default VideoItem;