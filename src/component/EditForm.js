import React,{Fragment,useState,useEffect} from  'react'
import Modal from'react-modal';
import {connect} from 'react-redux'
import {editTodo} from "../js/actions";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            :'#c5d0dd'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditForm =({todo,editTodo})=>{
    const [show,setShow]=useState(false);
    const[text,setText]=useState();
    useEffect(() => {

            setText(todo.text);

    }, [show,todo.text]);
    const handleSubmit=(e)=>{
        e.preventDefault()

        editTodo(text);
        toggleModale()
    }

    const toggleModale=()=>{
        setShow(!show)
    }
    return(
        <Fragment>
            <button onClick={toggleModale}>Edit</button>
            <Modal isOpen={show} style={customStyles} onRequestClose={toggleModale}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input className="edit-input" type="text" value={text} onChange={(e)=>setText(e.target.value)} required/>
                    <button type="submit">Confirm</button>
                    <button onClick={toggleModale}>Cancel</button>
                </form>

            </Modal>
        </Fragment>
    )
};
export default connect(null,{editTodo}) (EditForm);
