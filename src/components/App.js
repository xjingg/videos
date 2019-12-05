import React from 'react';
import SearchBox from './SearchBox';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = {videos: []};
    onTermSubmit = async term => {
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });

       this.setState( {videos:response.data.items});
    };

    render(){
        return(
            <div className="ui container">
                <SearchBox onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
                <VideoList videos={this.state.videos} />
                </div>
        )
    }
}

export default App;
