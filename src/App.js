import React, { useState } from "react";
import "./styles.css";

var musicDatabase = {
  EDM: [
    {
      Song: "Instagram",
      Rating: 4.5
    },
    {
      Song: "Tremor",
      Rating: 4.3
    },
    {
      Song: "When I Grow Up",
      Rating: 4.0
    }
  ],
  "Hip Hop": [
    {
      Song: "Rockstar",
      Rating: 4.8
    },
    {
      Song: "Believe It",
      Rating: 4.6
    },
    {
      Song: "Dr. Dre",
      Rating: 4.5
    }
  ],
  Pop: [
    {
      Song: "Uptown Funk",
      Rating: 4.8
    },
    {
      Song: "Just the Way You Are",
      Rating: 4.7
    },
    {
      Song: "Somebody That I Used to Know",
      Rating: 4.6
    }
  ]
};

var genreList = Object.keys(musicDatabase);

export default function App() {
  const [genre, setGenre] = useState("EDM");
  function handleGenre(genre) {
    if (genreList.includes(genre)) {
      setGenre(genre);
    } else {
    }
  }

  return (
    <div className="App">
      <h1>Playlists</h1>
      <h2>Checkout my all time favourite playlist here</h2>

      <div style={{ display: "inline" }}>
        <button className="button" onClick={() => handleGenre("EDM")}>
          EDM
        </button>
        <button className="button" onClick={() => handleGenre("Hip Hop")}>
          Hip Hop
        </button>
        <button className="button" onClick={() => handleGenre("Pop")}>
          Pop
        </button>
      </div>

      <hr style={{ width: "70%" }} />
      <h3>Songs</h3>

      <div>
        {musicDatabase[genre].map((element) => {
          return (
            <div key={element.Song} className="song-item">
              <h2 className="song"> {element.Song}</h2>
              <small className="rating"> Rating - {element.Rating}/5</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
