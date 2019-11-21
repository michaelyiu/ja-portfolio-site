import React, { useEffect, useState } from 'react';
import Video from './Video';

const Work = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOqJ8PLVyqiDmrZWIVDsOPAt25fmeloBw&channelId=UCUMHM23In1ItaANJgsiFHzA&part=snippet,id&order=date&maxResults=20');
			const json = await response.json();
			setVideos(json.items);
		}
		fetchVideos();
	}, [])

	return (
		<div className="flex-container">
			{
				videos.reduce(
					(filtered, video) => {
						if (!video.id.videoId) {
							return filtered;
						}
						return filtered.concat(
							<Video video={video} key={video.id.videoId} />
						);
					}
					, [])
			}
		</div>
	)
}

export default Work;
