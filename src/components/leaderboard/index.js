import React from "react";

const UserScore = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          color: "white",
        }}
      >
        user
      </span>
      <span
        style={{
          color: "cyan",
        }}
      >
        score
      </span>
    </div>
  );
};

const Board = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "10px",
        top: "10px",
        padding: "6px",
        width: "20%",
        minHeight: "170px",
        border: "2px solid #4cceac",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #4cceac",
          width: "100%",
          color: "white",
        }}
      >
        Leader Board
      </div>
      <div
        style={{
          marginTop: "6px",
        }}
      >
        <UserScore />
        <UserScore />
      </div>
    </div>
  );
};

export default Board;
