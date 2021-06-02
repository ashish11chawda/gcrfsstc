import React from 'react';
import ReactDOM from 'react-dom';
import "./printStatus.css";

function ActuallyPrint(data, user){
  let status=["❌","❌","❌","❌"];
  if(data === 4){
    status[0] = status[1] = status[2] = status[3] = "✔️";
  }
  if(data === 3){
    status[0] = status[1] = status[2] = "✔️";
  }
  if(data === 2){
    status[0] = status[1] = "✔️";
  }
  else if(data === 1){
    status[0] = "✔️";
  }
  ReactDOM.render(
    <React.StrictMode>
    <div className="status-div">
      <ul>
      <li><strong>{user.name}</strong></li>
      <li><strong>{user.college}</strong></li>
        <li>{status[3]} <span>Ultimate Milestone</span></li>
        <li>{status[2]} <span>Third Milestone</span></li>
        <li>{status[1]} <span>Second Milestone</span></li>
        <li>{status[0]} <span>First Milestone</span></li>
        <li>☑️ <strong>{user.quest}</strong> Quests Completed</li>
        <li>☑️ <strong>{user.skillBadge}</strong> Skill Badges Completed</li>
        <li><strong>You can now create your badge <a href="https://badge.gcrfsstc.study" style={{"textDecoration":"none","backgroundColor":"#EA4335","color":"#fff"}}>&nbsp;here&nbsp;</a>.</strong></li>
      </ul>
    </div>
    </React.StrictMode>,
    document.getElementById('status-div')
  );
}

export default function PrintStatus(user){
  let data = user[0];
  
  let status = CheckMilestoneStatus(data);
  const {first,second,third,fourth} = status;

  if(fourth){
    ActuallyPrint(4, status);
  }
  else if(third && (fourth === false)){
    ActuallyPrint(3, status);
  }
  else if(second && (third === false) && (fourth === false)){
    ActuallyPrint(2, status);
  }
  else if(first && (second === false) && (third === false) && (fourth === false)){
    ActuallyPrint(1, status);
  }
  else if (!(first && second && third && fourth)){
    ActuallyPrint(0, status);
  }
}
export function CheckMilestoneStatus(user) {
    let status = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      profile: true,
      quest: 0,
      skillBadge: 0,
      name: "",
      college: "",
      setValue: function( props, value ) {
        while ( props.length ) this[ props.pop() ] = value;
      }
    }
    if (user.EnrolmentStatus !== "All Good"){
      alert(
        "Your Public Profile URL is wrong! Please contact facilitators to correct it"
      );
      status.profile = false;
      return status;
    }
    let quest = user.Quests["$numberInt"];
    let skillBadge = user.SkillBadges["$numberInt"];
    status.quest = quest;
    status.skillBadge = skillBadge;
    status.name = user.StudentName;
    status.college = user.Institution;
    if (quest === "30" && skillBadge === "15") {
      status.setValue(["first","second","third","fourth"],true);
    } else if (quest >= 24 && skillBadge >= 12) {
      status.setValue(["first","second","third"],true);
    } else if (quest >= 16 && skillBadge >= 8) {
      status.setValue(["first","second"],true);
    } else if (quest >= 8 && skillBadge >= 4) {
      status.setValue(["first"],true);
    } else {
      alert("You've not Achieved any Milestone!")
    }
    return status;
  }