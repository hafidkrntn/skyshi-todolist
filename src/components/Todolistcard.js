import React from "react";
import { Form } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs'

const Todolistcard = ({ data, onClickDelete }) => {

  return (
    <div style={{width: "1000px", height: "80px", background: "#ffffff", boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding:"30px"}}>
      <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={data.title} />
        <BsTrash fontSize="24px" onClick={onClickDelete}/>
      </Form.Group>
    </div>
  );
};

export default Todolistcard;
