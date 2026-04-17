/** @format */

"use client";
import React from "react";
import toast from "react-hot-toast";
import { MdAddIcCall } from "react-icons/md";
import { FcSms } from "react-icons/fc";
import { FaVideo } from "react-icons/fa6";

const CheckInButtons = ({ friendName }) => {
  const handleCheckIn = (type) => {
    toast.success(`${type} with ${friendName} recorded!`, {});
  };

  return (
    <div className="card bg-base-100 shadow-sm p-5 border border-gray-100">
      <h3 className="font-semibold text-gray-700 mb-4">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => handleCheckIn("Call")}
          className="btn btn-outline hover:btn-success flex flex-col h-20 gap-1"
        >
          <MdAddIcCall size={22} />
          <span className="text-xs">Call</span>
        </button>

        <button
          onClick={() => handleCheckIn("Text")}
          className="btn btn-outline hover:btn-info flex flex-col h-20 gap-1"
        >
          <FcSms size={22} />
          <span className="text-xs">Text</span>
        </button>

        <button
          onClick={() => handleCheckIn("Video")}
          className="btn btn-outline hover:btn-error flex flex-col h-20 gap-1"
        >
          <FaVideo size={20} />
          <span className="text-xs">Video</span>
        </button>
      </div>
    </div>
  );
};

export default CheckInButtons;
