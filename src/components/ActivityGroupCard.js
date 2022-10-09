import React from "react";
import { Card } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ActivityGroupCard = ({ data, onClickDelete }) => {

  return (
    <Link to={`/detail/${data.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
      <Card style={{ width: "235px", height: "234px", padding: "24px" }} key={data.id}>
        <div className="d-flex flex-column">
          <p style={{fontSize: 18, fontWeight: 700, lineHeight: '27px'}}>{data.title}</p>

          <div className="d-flex">
            <p style={{fontWeight: 500, fontSize: 14, color: '#888888', lineHeight: '21px'}}>{data.created_at}</p>
            <BsTrash fontSize="24px" onClick={onClickDelete}/>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ActivityGroupCard;
