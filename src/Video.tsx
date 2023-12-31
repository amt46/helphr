import { url } from "./utils";

const Video = () => {
  return (
    <video controls width="100%">
      <source
        src={`${url}/how_to_draw_shift_and_create_schedule-KM3mH6aQ.mp4`}
        type="video/webm"
      />
      <source
        src={`${url}/how_to_draw_shift_and_create_schedule-KM3mH6aQ.mp4`}
        type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;
