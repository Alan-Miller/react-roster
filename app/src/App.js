import React, { Component } from 'react';
import TeamComponent from './components/Team/team.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      team1Roster: ['Joe','Moe','Flow'],
      team2Roster: ['Barry',"Harry",'Chuck'],
      selectedTeam: 1,
      tempName: ''
    }
  }
  render() {
    return (
        <div>
          <button>Team1</button>
           <button>Team2</button>
          <input type="text"/>
       <TeamComponent roster={this.state.team1Roster}/>
       <TeamComponent roster={this.state.team2Roster}/>
      </div>
    )
  }
}

export default App;
