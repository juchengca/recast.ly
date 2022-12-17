import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query},
    dataType: 'json', // added data type
    youtube_api_key: YOUTUBE_API_KEY,
    success: function(res) {
      callback(res);
      console.log('successfully searched YouTube');
    },
    error: function() {
      console.log('search YouTube error');
    }
  });
};

export default searchYouTube;
