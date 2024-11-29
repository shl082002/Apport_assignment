import React from "react";
import { FcHighPriority } from "react-icons/fc";
import { LuSignalLow, LuSignal, LuSignalHigh } from "react-icons/lu";
import { RiProgress5Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GoCircle } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiUserSquareFill } from "react-icons/pi";

const StatusLabel = ({ keyValue }) => {
  return (
    <>
      {keyValue === "In progress" ? (
        <>
          <RiProgress5Line
            style={{
              fontSize: "1.5rem",
              color: "#f0ad11",
            }}
          />
        </>
      ) : keyValue === "Todo" ? (
        <>
          <GoCircle
            style={{
              fontSize: "1.5rem",
              color: "#7c8282",
            }}
          />
        </>
      ) : keyValue === "Done" ? (
        <>
          <FaCheckCircle
            style={{
              fontSize: "1.5rem",
              color: "#118bf0",
            }}
          />
        </>
      ) : keyValue === "Canceled" ? (
        <>
          <MdCancel
            style={{
              fontSize: "1.5rem",
              color: "#7c8282",
            }}
          />
        </>
      ) : keyValue === "Backlog" ? (
        <>
          <MdPendingActions
            style={{
              fontSize: "1.5rem",
              color: "#f01111",
            }}
          />
        </>
      ) : (
        <>
          <FaUser
            style={{
              fontSize: "1.5rem",
            }}
          />
        </>
      )}
    </>
  );
};

export default StatusLabel;
