import YouTube, { YouTubeProps } from 'react-youtube';

interface PlayerProps {
  videoId: string;
}

export function Player({ videoId }: PlayerProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    width: '1100px',
    height: '581px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}