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

const PriorityLabels = ({ keyValue }) => {
  return (
    <>
      {keyValue == 4 ? (
        <>
          <FcHighPriority
            style={{
              fontSize: "1.5rem",
            }}
          />
        </>
      ) : keyValue == 3 ? (
        <>
          <LuSignal
            style={{
              fontSize: "1.5rem",
              color: "#f26507",
            }}
          />
        </>
      ) : keyValue == 2 ? (
        <>
          <LuSignalHigh
            style={{
              fontSize: "1.5rem",
              color: "#f2d307",
            }}
          />
        </>
      ) : keyValue == 1 ? (
        <>
          <LuSignalLow
            style={{
              fontSize: "1.5rem",
            }}
          />
        </>
      ) : keyValue == 0 ? (
        <>
          <HiDotsHorizontal
            style={{
              fontSize: "1.5rem",
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

export default PriorityLabels;
