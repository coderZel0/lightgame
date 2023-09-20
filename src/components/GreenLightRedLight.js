import React, { useEffect, useState } from "react";
import Board from "./leaderboard";

const GreenLightRedLight = ({ user }) => {
  const y = 40;
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(0);
  const [time, setTime] = useState(y);
  const [start, setStart] = useState(false);
  const [gameOver, setOver] = useState(false);
  const [color, setColor] = useState();
  const [mode, setMode] = useState("easy");
  const [win, setWin] = useState(false);

  const btnStyles = {
    background: "none",
    border: "2px solid #4cceac",
    padding: "6px 8px",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    margin: "6px",
  };

  //get initial game variable according to game mode
  const setGameInitialValues = (mode) => {
    if (mode === "easy") {
      setTarget(10);
    } else if (mode === "med") {
      setTarget(15);
    } else {
      setTarget(25);
    }
  };

  //increment score or set gameover if red color
  const handleClick = () => {
    if (!start) return;
    if (color === "green") setScore((score) => score + 1);
    else {
      setOver(true);
      setStart(false);
    }
    if (score >= target && time > 0) {
      setWin(true);
      setOver(true);
      setStart(false);
    }
  };

  //Game Start Func
  const startGame = () => {
    return setInterval(() => {
      setTime((time) => time - 1);
      const color = [
        "red",
        "green",
        "green",
        "red",
        "green",
        "red",
        "red",
        "green",
        "green",
        "red",
        "red",
      ][Math.floor(Math.random() * 6)];
      setColor(color);
    }, 1000);
  };
  //end

  //reset game
  const reset = () => {
    setTime(y);
    setScore(0);
    setStart(false);
    setOver(false);
  };

  useEffect(() => {
    if (time <= 0) {
      setStart(false);
      setOver(true);
    }
  }, [time]);

  useEffect(() => {
    if (!start) return;
    if (time <= 0) return;
    const interval = startGame();

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    setGameInitialValues(mode);
  }, [mode]);

  useEffect(() => {
    setMode(user.mode);
  }, [user]);

  return (
    <>
      <Board />
      <div
        style={{
          width: "30%",
          height: "200px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {!start && !gameOver && (
          <button
            style={{
              ...btnStyles,
            }}
            onClick={() => setStart(true)}
          >
            Start Game
          </button>
        )}
        {gameOver && !win && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "25px", color: "red", fontWeight: "bold" }}>
              Game Over!
            </div>
            <button
              style={{
                ...btnStyles,
              }}
              onClick={() => {
                reset();
                setStart(true);
              }}
            >
              Restart
            </button>
          </div>
        )}
        {win && gameOver && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "25px", color: "#4cceac", fontWeight: "bold" }}
            >
              You Win!
            </div>
            <button
              style={{
                ...btnStyles,
              }}
              onClick={() => {
                reset();
                setStart(true);
              }}
            >
              Restart
            </button>
          </div>
        )}
        {start && !gameOver && (
          <div
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              background: color,
            }}
            onClick={handleClick}
          ></div>
        )}
      </div>

      <div
        style={{
          margin: "10px 0px",
          marginTop: "100px",
          padding: "10px",
          display: "flex",
          width: "30%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "10px",
          }}
        >
          <span
            style={{
              color: "#FFF",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Score:
          </span>
          <span
            style={{ color: "#4cceac", marginLeft: "6px", fontSize: "19px" }}
          >
            <strong>{score}</strong>
          </span>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <span
            style={{
              color: "yellow",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Target:
          </span>
          <span style={{ color: "cyan", marginLeft: "6px", fontSize: "19px" }}>
            <strong>{target}</strong>
          </span>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "20px", color: "#FFF" }}>
            Time:
          </span>
          <span
            style={{ color: "#4cceac", marginLeft: "6px", fontSize: "19px" }}
          >
            <strong>{time}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default GreenLightRedLight;
