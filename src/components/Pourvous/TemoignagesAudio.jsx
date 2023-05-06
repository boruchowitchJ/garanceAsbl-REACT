import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";
//...

const Multiplayer = (props) => {
  const { nom, description, photo } = props;
  return (
    <div>
      <div className="col-md-4 mb-10 my-5">
        <div
          class="card text-center"
          style={{
            marginBottom: 50,
            height: "auto",
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropfilter: "blur(30px)",
          }}
        >
          <h1 style={{ color: "#e02965" }}>{nom}</h1>
          <h7 style={{ color: "#F8CD42" }}>{description} </h7>
          <AudioPlayer src={photo} onPlay controls />
        </div>
      </div>
    </div>
  );
};
export default Multiplayer;
