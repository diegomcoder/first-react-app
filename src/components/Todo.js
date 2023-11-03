import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// React component function
function Todo(props) {

    // React hook
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }


    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
        { modalIsOpen && <Backdrop onMyAction={closeModalHandler} /> }
      </div>
    </div>
  );
}

export default Todo;
