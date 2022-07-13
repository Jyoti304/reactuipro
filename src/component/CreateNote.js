import React, { useState } from 'react';

import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Note from '../component/Note';


const CreateNote = (props) => {

    const[note,setNote] = useState({title: "",content: "",
});
    const InputEvent =(event) =>{
        //const value   = event.target.value;
        //const name = event.target.name;
        
        const {name, value} = event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value,
            };
        
    });
    console.log(note);
};
const addEvent = () => {
   props.passNote(note);
}
 
 return(
    <>
    
      <div className="main-note"> 
      <div className="row">
      <div className="card">
       <form>
      
       Title: <input type="text" plcaholder=" Title" name="title" autoComplete='off' value={note.title} onChange={InputEvent} /><br/> <br/>
       Text:  <textarea name="content" rows="" columns="" placeholder="Write the Note" value={note.content} onChange={InputEvent}></textarea><br/> <br/>
       <Button onClick={addEvent}><AddCircleOutlineIcon/></Button>
       </form>
       </div></div>
      </div>
      <Note/>
    
    </>
 
);

}
export default CreateNote;