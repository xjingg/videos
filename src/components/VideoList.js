import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos})=>{
    const renderList = videos.map(video=>{
        return (
            <VideoItem video={video}/>
        )
    })
    return(
        <div className="ui relaxed divided">{renderList}
            </div>
    )
}

export default VideoList;