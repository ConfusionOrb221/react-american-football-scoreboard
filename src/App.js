//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Header from './Header';
import Footer from './Footer';


// TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

function App() {
  const [homeValue, homeSetValue] = useState(32);
  const [awayValue, awaySetValue] = useState(32);
  function setTeams(teamName, value){
    if(teamName === 'home'){
      homeSetValue(homeValue + value);
    }
    else if(teamName === 'away'){
      awaySetValue(awayValue + value);
    }
  }
  return (
      <div className="container">
        <Header home = { homeValue } away = { awayValue }  />
        <Footer setTeam = { setTeams }  />
      </div>
  );
}
export default App;
