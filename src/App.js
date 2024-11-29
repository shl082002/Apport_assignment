import React, { useState, useEffect } from "react";
import axios from "axios";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";
import { debounce } from "lodash";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const handleUpdateState = debounce((value) => {
    localStorage.setItem("groupBy", value);
  }, 300);

  const handleChange = (event) => {
    const state = event.target.value;
    setGroupBy(event.target.value);
    handleUpdateState(state);
  };

  const handleChangeOrder = (event) => {
    setOrderBy(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        // console.log(response.data);
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // console.log(tickets);
  console.log(users);

  const userMap = users.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  console.log(userMap);

  useEffect(() => {
    const savedGrouping = localStorage.getItem("groupBy") || "status";
    console.log(savedGrouping);
    setGroupBy(savedGrouping);
  }, []);

  return (
    <>
      <div className="container">
        {/* header */}
        <div className="header">
          <select
            id="dropdown"
            value={groupBy}
            onChange={handleChange}
            style={{
              fontSize: "1.2rem",
              padding: "0.3rem",
              borderRadius: "0.5rem",
            }}
          >
            <option value="status" defaultChecked>
              Status
            </option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          <select
            id="dropdown"
            value={orderBy}
            onChange={handleChangeOrder}
            style={{
              fontSize: "1.2rem",
              padding: "0.3rem",
              marginLeft: "2rem",
              borderRadius: "0.5rem",
            }}
          >
            {/* <option value="asc" disabled defaultChecked>
              Order?
            </option> */}
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
        {/* body */}
        <div className="main">
          {/* create cards */}

          <KanbanBoard
            ticketsRef={tickets}
            userRef={users}
            groupBy={groupBy}
            orderBy={orderBy}
          />
        </div>
        {/* body */}
      </div>
    </>
  );
};

export default App;
