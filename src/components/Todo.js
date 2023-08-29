import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){

  const [modalsOpen , setModelIsOpen ]  = useState (false);        
    function deletehandeler(){
      setModelIsOpen(true);
  }
  function closeModalHandler(){
    setModelIsOpen(false);
  }


    return(
    <div className="card">  
      <h2>{props.text}</h2>
      <div className="actions">
      <button className="btn" onClick={deletehandeler}>Delete</ button>
      <div>
      {modalsOpen && ( <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> ) }
      
      
      {modalsOpen && <Backdrop onCancel={closeModalHandler} />}
      
      </div>
      
      </div>
    </div>  
  )
}

export default Todo;