import './video.css';

function Video() {
  return (
    <video controls width="600">
      <source src="https://servidor-video-public2.s3.us-east-2.amazonaws.com/Y2meta.app-cucaracha+con+autotune+(letra)-(720p).mp4" type="video/mp4" />
      
    </video>
  );
}

export default Video;

