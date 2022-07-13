import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const Note =  () => {
    return(
     <>
       <div className="note-div">
       
         <h1>title</h1>
         <p>this is the content</p>
         <Button><DeleteIcon/></Button>
       
       
       </div>     
     </>

    );
}
export default Note;