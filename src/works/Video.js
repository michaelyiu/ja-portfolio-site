import React, { useState } from 'react'

const Video = (props) => {
	const [videoClicked, setClicked] = useState(false);
	const { video } = props;
	console.log(video);
	return (

		<div className="video-intro">
			<div className={"image " + (videoClicked ? "show" : null)} onClick={() => setClicked(true)}>
				<div className="play-button btn"></div>
				<a /*href="javascript:"*/ id="btn_play" className="btn"><img src={video.snippet.thumbnails.high.url} alt="play video" /></a>
			</div>

			<iframe src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0&autoplay=${videoClicked ? 1 : 0}`} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>
		</div>
	)
}

export default Video;