import Icon from '@mdi/react';
import { mdiAccountCancel, mdiAccountCheck, mdiAccountQuestion } from '@mdi/js';

function EvenCard({event,userList}) {
    return (
        <div class="card shadow" style={{marginBottom: "10px"}}>
        <div class="card-body">
          <h5 class="card-title" style={{fontWeight: 'bold'}}>{event.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Datum: {event.date}</h6>
          <p class="card-text">{event.description}</p>
          <a href="/" class="btn btn-success" style={{marginRight: "5px"}}>Zůčastním se</a>
          <a href="/" class="btn btn-danger">Nezůčastním se</a>
          <div class="grid" style={{display: "inline", float: "right"}}>
          <Icon path={mdiAccountCheck} size={1} color="green"/>
          {event.willAttend.length}
          <Icon path={mdiAccountCancel} size={1} color="rgb(180,0,0)"/>
          {event.willNotAttend.length}
          <Icon path={mdiAccountQuestion} size={1} color="orange"/>
          {userList.length - event.willAttend.length - event.willNotAttend.length}
          </div>
        </div>
      </div>
    );
}

export default EvenCard;