import React from "react";

function Footer({setTeam}){
    return(
      <section className="buttons">
            <div className="homeButtons">
              {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
              <button className="homeButtons__touchdown" onClick={ () => setTeam('home', 7) }>Home Touchdown</button>
              <button className="homeButtons__fieldGoal" onClick={ () => setTeam('home', 2) }>Home Field Goal</button>
            </div>
            <div className="awayButtons">
              <button className="awayButtons__touchdown" onClick={ () => setTeam('away', 7) }>Away Touchdown</button>
              <button className="awayButtons__fieldGoal" onClick={ () => setTeam('away', 2) }>Away Field Goal</button>
            </div>
        </section>
    );
}

export default Footer;