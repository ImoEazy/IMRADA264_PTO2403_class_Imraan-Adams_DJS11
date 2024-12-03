import React, { useState } from 'react';// 'useState' A React hook used to manage the component's state

//AudioPlayer: A functional component that accepts a prop episode.
const AudioPlayer = ({ episode }) => {//The episode prop is expected to be an object containing details about the audio episode (like title and duration).
  
  //state variables
  //playing: Manages whether the audio is currently playing.
  const [playing, setPlaying] = useState(false);
  //visible: Manages whether the audio player is visible
  const [visible, setVisible] = useState(true); // State to manage visibility
   
  //functions
  //Toggles the playing state between true and false.
  //Determines whether the text "Play" or "Pause" is displayed on the button.
  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };
  //Sets visible to false, effectively hiding the player.
  const closePlayer = () => {
    setVisible(false); // Set visibility to false when closing
  };
  
  //If visible is false, the component returns null, meaning nothing will be rendered on the screen
  if (!visible) {
    return null; 
  }
  //The player is rendered when visible is true:
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="flex items-center">
        {/*Toggles between "Play" and "Pause" text based on the playing state.*/}
        <button onClick={togglePlay} className="mr-4">
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="flex-1">
          <strong>{episode?.title}</strong>
          <p>{episode?.duration}</p>{/*Displays the episode's title and duration.*/}
        </div>
        <audio
          controls
          src="https://www.example.com/audio/placeholder.mp3"//A native HTML <audio> element with a placeholder audio file.
          className="mr-4"
        />
        <button onClick={closePlayer} className="text-red-500"> {/*A button to close (hide) the player.*/}
          Close
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;