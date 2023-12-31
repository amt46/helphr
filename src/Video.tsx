import how_to_draw_shift from "./how_to_draw_shift_and_create_schedule.mp4";

const Video = () => {
  return (
    <video controls width="100%">
      <source src={how_to_draw_shift} type="video/webm" />
      <source src={how_to_draw_shift} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;
