import React from 'react';


function Profile(props) {
  return (
<div>

    <div>
        <h4> {props.fname} </h4>
    </div>
    <div>
        <h4> {props.lname} </h4>
    </div>
    <div>

    </div>
    <button>Submit</button>
    </div>

  );
}


export default Profile;
