import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonList from "../components/ButtonList";
import { Modal, Button, Form } from "react-bootstrap";
import Todolistcard from "../components/Todolistcard";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [show, setShow] = useState(false);
  const [itemListTitle, setItemListTitle] = useState("");
  const [type, setType] = useState("");
  const [itemList, setItemList] = useState([]);
  let { id } = useParams();
  const baseurl = process.env.REACT_APP_BASEURL;

  const handleClose = async () => {
    try {
      const res = await axios.post(`${baseurl}/todo-items`, {
        activity_group_id: id,
        title: itemListTitle,
        _comment: type,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    setShow(false);
  };

  const showTodoListItem = async () => {
    try {
      const res = await axios.get(
        `${baseurl}/todo-items?activity_group_id=${id}`
      );
      setItemList(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTodoListItem = async (itemId) => {
    try {
      const res = await axios.delete(`${baseurl}/todo-items/${itemId}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    showTodoListItem();
  });

  const handleShow = () => setShow(true);

  return (
    <div style={{ padding: "0px 220px" }}>
      <div
        className="d-flex justify-content-between flex-wrap mx-auto"
        style={{ paddingTop: "43px", paddingBottom: "55px" }}
      >
        <h2>Activity</h2>
        <ButtonList title="Tambah" onClick={handleShow} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah List Item</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3 p-2">
          <Form.Label>Nama List Item</Form.Label>
          <Form.Control
            placeholder="Tambahkan nama activity"
            onChange={(e) => setItemListTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 p-2">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option value="Very High">Very High</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            <option value="Very Low">Very Low</option>
          </Form.Select>
        </Form.Group>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {itemList.map((data) => (
          <Todolistcard
            data={data}
            onClickDelete={() => removeTodoListItem(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;
