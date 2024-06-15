import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Cell = ({ id, cell, onClick, isWinningCell }) => {
  return (
    <div
      id={id}
      className={`square flex justify-center items-center w-24 h-24 cursor-pointer hover:rounded-[50%] easy-in-out hover:bg-yellow-400 ${isWinningCell ? 'bg-green-500 hover:bg-green-500 rounded-[50%]' : ''}`}
      onClick={onClick}
    >
      {cell === 'circle' && <FaRegCircle className="text-blue-600 text-4xl" />}
      {cell === 'cross' && <FaTimes className="text-red-600 text-4xl" />}
    </div>
  );
};

export default Cell;
