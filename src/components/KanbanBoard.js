import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import "../styles/KanbanBoard.css";
import { FcHighPriority } from "react-icons/fc";
import { LuSignalLow, LuSignal, LuSignalHigh } from "react-icons/lu";
import StatusLabel from "../utils/Status";
import PriorityLabels from "../utils/Priority";

const sortTickets = (tickets, ordering) => {
  return [...tickets].sort((a, b) => {
    if (ordering === "priority") return b.priority - a.priority;
    if (ordering === "title") return a.title.localeCompare(b.title);
    return 0;
  });
};

const KanbanBoard = ({ ticketsRef, userRef, groupBy, orderBy }) => {
  const groupTickets = (groupBy) => {
    switch (groupBy) {
      case "status":
        return ticketsRef.reduce((groups, ticket) => {
          const { status } = ticket;
          if (!groups[status]) groups[status] = [];
          groups[status].push(ticket);
          return groups;
        }, {});
      case "user":
        return ticketsRef.reduce((groups, ticket) => {
          const { userId } = ticket;
          if (!groups[userId]) groups[userId] = [];
          groups[userId].push(ticket);
          return groups;
        }, {});
      case "priority":
        return ticketsRef.reduce((groups, ticket) => {
          const { priority } = ticket;
          if (!groups[priority]) groups[priority] = [];
          groups[priority].push(ticket);
          return groups;
        }, {});
      default:
        return ticketsRef;
    }
  };

  const userMap = userRef.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  const groupedTickets = groupTickets(groupBy);
  console.log(groupedTickets);

  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "row",
          // flexWrap: "nowrap",
          // overflowX: "auto",
          // overflowY: "hidden",
          // minWidth: "",
        }
      }
      className="kanban_container"
    >
      {Object.keys(groupedTickets).map((key) => (
        <div key={key}>
          <div className="">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: "1rem",
                padding: "0.5rem",
                paddingTop: "1.5rem",
              }}
            >
              <div
                style={{
                  padding: "0 1rem 0 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* left-portion */}
                {groupBy === "user" ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaUser
                        style={{
                          fontSize: "1.5rem",
                        }}
                      />
                      <span
                        style={{
                          paddingLeft: "0.5rem",
                          fontSize: "1.5rem",
                        }}
                      >
                        {userMap[key]}
                      </span>
                      <span
                        style={{
                          padding: "0.2rem",
                          paddingLeft: "0.8rem",
                          paddingRight: "0.8rem",
                          marginLeft: "0.5rem",
                          fontSize: "1.5rem",
                          background: "#2a8aeb",
                          color: "white",
                          borderRadius: "999rem",
                        }}
                      >
                        {groupedTickets[key].length}
                      </span>
                    </div>
                  </>
                ) : groupBy === "status" ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <StatusLabel keyValue={key} />
                      <span
                        style={{
                          paddingLeft: "0.5rem",
                          fontSize: "1.5rem",
                        }}
                      >
                        {key}
                      </span>
                      <span
                        style={{
                          padding: "0.2rem",
                          paddingLeft: "0.8rem",
                          paddingRight: "0.8rem",
                          marginLeft: "0.5rem",
                          fontSize: "1.5rem",
                          background: "#2a8aeb",
                          color: "white",
                          borderRadius: "999rem",
                        }}
                      >
                        {groupedTickets[key].length}
                      </span>
                    </div>
                  </>
                ) : groupBy === "priority" ? (
                  <>
                    {key === 4 ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <FcHighPriority
                            style={{
                              fontSize: "1.5rem",
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            Urgent
                          </span>
                          <span
                            style={{
                              padding: "0.2rem",
                              paddingLeft: "0.8rem",
                              paddingRight: "0.8rem",
                              marginLeft: "0.5rem",
                              fontSize: "1.5rem",
                              background: "#2a8aeb",
                              color: "white",
                              borderRadius: "999rem",
                            }}
                          >
                            {groupedTickets[key].length}
                          </span>
                        </div>
                      </>
                    ) : key === 3 ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <LuSignal
                            style={{
                              fontSize: "1.5rem",
                              color: "#f26507",
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            High
                          </span>
                          <span
                            style={{
                              padding: "0.2rem",
                              paddingLeft: "0.8rem",
                              paddingRight: "0.8rem",
                              marginLeft: "0.5rem",
                              fontSize: "1.5rem",
                              background: "#2a8aeb",
                              color: "white",
                              borderRadius: "999rem",
                            }}
                          >
                            {groupedTickets[key].length}
                          </span>
                        </div>
                      </>
                    ) : key === 2 ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <LuSignalHigh
                            style={{
                              fontSize: "1.5rem",
                              color: "#f2d307",
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            Medium
                          </span>
                          <span
                            style={{
                              padding: "0.2rem",
                              paddingLeft: "0.8rem",
                              paddingRight: "0.8rem",
                              marginLeft: "0.5rem",
                              fontSize: "1.5rem",
                              background: "#2a8aeb",
                              color: "white",
                              borderRadius: "999rem",
                            }}
                          >
                            {groupedTickets[key].length}
                          </span>
                        </div>
                      </>
                    ) : key === 1 ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <LuSignalLow
                            style={{
                              fontSize: "1.5rem",
                              // color: "#c7f011",
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            Low
                          </span>
                          <span
                            style={{
                              padding: "0.2rem",
                              paddingLeft: "0.8rem",
                              paddingRight: "0.8rem",
                              marginLeft: "0.5rem",
                              fontSize: "1.5rem",
                              background: "#2a8aeb",
                              color: "white",
                              borderRadius: "999rem",
                            }}
                          >
                            {groupedTickets[key].length}
                          </span>
                        </div>
                      </>
                    ) : key === 0 ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <HiDotsHorizontal
                            style={{
                              fontSize: "1.5rem",
                              // color: "green",
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            No priority
                          </span>
                          <span
                            style={{
                              padding: "0.2rem",
                              paddingLeft: "0.8rem",
                              paddingRight: "0.8rem",
                              marginLeft: "0.5rem",
                              fontSize: "1.5rem",
                              background: "#2a8aeb",
                              color: "white",
                              borderRadius: "999rem",
                            }}
                          >
                            {groupedTickets[key].length}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>null</>
                    )}
                  </>
                ) : null}

                {/* right-portion */}
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <HiDotsHorizontal
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                  <IoMdAdd
                    style={{
                      paddingLeft: "0.5rem",
                      fontSize: "1.5rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {groupedTickets[key]
            .sort((a, b) => {
              if (orderBy === "priority") {
                return b.priority - a.priority;
              } else if (orderBy === "title") {
                return a.title.localeCompare(b.title);
              }
              return 0;
            })
            .map((ticket) => (
              <div
                key={ticket.id}
                style={{
                  background: "white",
                  color: "black",
                  padding: "0.7rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  // textAlign: "center",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease-in-out",
                  margin: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    {ticket.id}
                  </div>
                  <div>
                    <StatusLabel keyValue={ticket.status} />
                  </div>
                </div>
                {/* middle */}
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {ticket.title}
                </div>
                {/* bottom */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <PriorityLabels keyValue={ticket.priority} />
                  {ticket.tag.length > 0 && (
                    <>
                      <span
                        style={{
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          border: "1px grey dotted",
                          transition: "box-shadow 0.3s ease-in-out",
                          padding: "0.2rem",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          borderRadius: "0.5rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        feature Request
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
