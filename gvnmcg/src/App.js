import React from 'react';
import './App.css';
import  WorkExperience  from "./WorkExperience";

const App = () => (
  <div className="App">
    Gavin
    <label>Todo:</label>
    <ol>
      <li>Contacts</li>
      <li>Education</li>
      <li>Experience</li>
      <li>Skills</li>
      <li>Examples</li>
      <li>WorkExperience</li>
      <li>Impressive interactivity</li>
      <li>Theme change based on time of day</li>
      <li>Links to Appropiate Spotify playlist</li>
      <li>Game</li>
    </ol>

    <WorkExperience/> 
  </div>
);

export default App;
