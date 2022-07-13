import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CreateNote from '../component/CreateNote';
const Home = () => {
    const [addItem,setAddItem] = useState([]);
    const addNote = (note) =>{
        //alert('jyoti');
        setAddItem((prevData)=>{
       return [...prevData,note];
    });

    };
    return(
    <>
   <Header/>
   
    <h1 className="text-center text-capitalize">Welcome to Our Site</h1>
    <div className="container">
    
     <CreateNote passNote={addNote}/>
     </div> 
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
    
);
}
export default Home;