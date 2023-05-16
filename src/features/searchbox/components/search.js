import React, { useState } from 'react';

import './search.css';
import { InfoBox } from './infobox';

function Search(props) {
  // the value of the search field 
  const [name, setName] = useState(props.setvalue);

  // the search result
  const [foundUsers, setFoundUsers] = useState(props.data);
  const [matchUsers, setMatchUsers] = useState(props.data)
  let [showInfo1, setShowInfo1] = useState(false);

  function onChangeName(value) {
    setName(value)
    props.getvalue(value)
    const matchresults = props.data.filter((user) => {
      return user.name.toLowerCase()===(value.toLowerCase());
    });
    setMatchUsers(matchresults)
  }

  const filter = (e) => {
    const keyword = e.target.value;
    
    if (keyword !== '') {
      const results = props.data.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      const matchresults = props.data.filter((user) => {
        return user.name.toLowerCase()===(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setMatchUsers(matchresults)
      setFoundUsers(results);
    } else {
      setFoundUsers(props.data);
      // If the text field is empty, show all users
    }

  };

  return (
    <div className="">
      <input
        type="search"
        value={name}
        onChange={(e)=>{setName(e.target.value);filter(e);props.getvalue(e.target.value)}}
        onClick={(e)=>{setShowInfo1(true);filter(e)}}
        className="input-box form-control"
        placeholder="Search"
      />
     
        <InfoBox show={showInfo1} align={props.align} title={props.title} filter={filter} onChangeName={onChangeName} onClickOutside={() => setShowInfo1(false)} matched={matchUsers} name={name} foundUsers={foundUsers}/>
     
    </div>
  );
}

export default Search;