import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'


interface Props {
    videoId?: string
    height?: string
    width?: string 
}

const YoutubePlayer: React.FC<Props> = ({ videoId = '2g811Eo7K8U', height = '520', width = '100%' }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // event.target.pauseVideo()
  }

  const playerOptions: YouTubeProps['opts'] = {
    height,
    width,
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 1,
    }
  }
  
    return (
    <YouTube videoId={videoId} opts={playerOptions} onReady={onPlayerReady} />
  )
}

export default YoutubePlayer