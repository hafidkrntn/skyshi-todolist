import axios from "axios";
import React, { useEffect, useState } from "react";
import ActivityGroupCard from "../components/ActivityGroupCard";
import ButtonList from "../components/ButtonList";

const Homepage = () => {
  const [activityGroupData, setActivityGroupData] = useState([]);

  const baseurl = process.env.REACT_APP_BASEURL;

  const handleAddActivityGroup = async () => {
    const res = await axios.post(`${baseurl}/activity-groups`, {
      title: "New Activity",
      email: "hafidkrntn@gmail.com",
    });
    console.log(res);
  };

  const showActivityGroup = async () => {
    try {
      const res = await axios.get(
        `${baseurl}/activity-groups?email=hafidkrntn@gmail.com`
      );
      setActivityGroupData(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveActivityGroup = async (id) => {
    console.log(id);
    try {
      await axios.delete(`${baseurl}/activity-groups/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    showActivityGroup();
  });

  return (
    <div style={{ padding: "0px 220px" }}>
      <div className="d-flex justify-content-between flex-wrap mx-auto" style={{paddingTop: "43px", paddingBottom: "55px"}}>
        <h2>Activity</h2>
        <ButtonList title="Tambah" onClick={handleAddActivityGroup} />
      </div>
      <div className="d-flex gap-3 flex-wrap">
        {activityGroupData.map((data) => (
          <ActivityGroupCard
            data={data}
            onClickDelete={() => handleRemoveActivityGroup(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
