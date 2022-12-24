// import React from 'react';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

var App = () => {
// class App extends React.Component {

  const [currentVideo, setVideo] = React.useState(exampleVideoData[0]);
  const [videoList, setVideoList] = React.useState(exampleVideoData);
  const [search, setSearch] = React.useState('cat');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {

    searchYouTube(search, (data) => {
      setVideo(data[0]);
      setVideoList(data);
    });

  }, [search]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/*<div><h5><em>search</em> view goes here</h5></div>*/}
          <Search searchHandler={handleChange} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          <VideoList videos={videoList} setVideo={setVideo}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
