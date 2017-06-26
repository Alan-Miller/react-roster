import React, { Component } from 'react';

class TeamComponent extends Component{
  

    render(){
        return(
           <div>
           <ul>{
                this.props.roster.map((PlayerName,index) => {
                    return <li key={index}>{PlayerName }</li>
                })}
           </ul>
           </div>
        )
    }
}

export default TeamComponent