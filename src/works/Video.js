import React from 'react'

const Video = (props) => {
	const { video } = props;
	console.log(video);
	return (

		<div className="video-intro">
			<div className="image">
				<div className="play-button btn"></div>
				<a /*href="javascript:"*/ id="btn_play" className="btn"><img src={video.snippet.thumbnails.high.url} alt="play video" /></a>
			</div>

			<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0"></iframe>
		</div>
	)
}

export default Video;