import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Card = (props) => {
  const [userInfo, setUser] = useState(null);
  const [hovered, setHover] = useState(false);

  const getResponse = async () => {
    const response = await fetch(
      `https://leetcode-stats.tashif.codes/${props.user}`
    );
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    if (props.user) {
      getResponse()
        .then((data) => {
          setUser(data);
        })
        .catch((e) => {
          setUser({
            totalEasy: "cant fetch",
            totalHard: "cant fetch",
            totalMedium: "cant fetch",
            acceptanceRate: "cant fetch",
          });
          console.error(e);
        });
    }
  }, [props.user]);

  //   console.log("userInfo:", userInfo ,userInfo.hardSolved,userInfo.totalHard);

  return (
    <div className="scale-75 lg:scale-100">
      <div className="text-white">
        {userInfo ? (
          <div className="bg-[#505050]/36 rounded-[20px] ring-0 hover:ring-[1px] hover:ring-blue-400 w-200 flex ">
            <div className="flex flex-col px-8 py-4 justify-center border-r-[1px] border-white items-center gap-4">
              <a
                href={`https://leetcode.com/u/${props.user}`}
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <img className="w-10 h-10" src={logo} alt="" />
                <h1 className="font-[Montserrat] font-bold text-xl">
                  {props.user}
                </h1>
              </a>
              <h1 className="text-xl font-bold">Total Progress</h1>
              <div
                className="w-30 h-30 flex justify-center items-center"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <CircularProgressbar
                  value={(
                    (userInfo.totalSolved / userInfo.totalQuestions) *
                    100
                  ).toFixed(2)}
                  styles={buildStyles({
                    rotation: 0.5,
                    pathColor: "#44A0CE",
                    trailColor: "#154C68",
                    textColor: "fff",
                    textSize: "16px",
                  })}
                />
                <div className="flex absolute font-bold justify-center items-center">
                  {hovered ? (
                    <div className="flex flex-col justify-center items-center">
                      <h1>{userInfo.acceptanceRate}%</h1>
                      <p className="text-center text-xs">
                        Acceptance
                        <br />
                        Rate
                      </p>
                    </div>
                  ) : (
                    <p>
                      {(
                        (userInfo.totalSolved / userInfo.totalQuestions) *
                        100
                      ).toFixed(2)}
                      %
                    </p>
                  )}
                </div>
              </div>
              <p className="font-semibold">
                {userInfo.totalSolved}/{userInfo.totalQuestions}{" "}
              </p>
              <p className="font-medium">
                Global Ranking: #{Number(userInfo.ranking).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col py-4">
              <div className="border-b-[1px] my-4 gap-2 border-white flex flex-col justify-center items-center">
                <h1 className="font-bold">Total Solved Difficulty Wise:</h1>
                <div className="flex h-fit gap-12">
                  <div className="flex flex-col py-2 gap-4 justify-center items-center">
                    <h1 className="font-bold text-green-500">Easy:</h1>
                    <div className="w-24 h-24 flex justify-center relative items-center">
                      <CircularProgressbar
                        value={(
                          (Number(userInfo.easySolved) /
                            Number(userInfo.totalEasy)) *
                          100
                        ).toFixed(2)}
                        styles={buildStyles({
                          rotation: 0.5,
                          pathColor: "#00DA41",
                          trailColor: "#154C68",
                          textColor: "#00DA41",
                          textSize: "16px",
                        })}
                      />
                      <div className="flex absolute font-bold text-[#00DA41] justify-center items-center">
                        {`${(
                          (Number(userInfo.easySolved) /
                            Number(userInfo.totalEasy)) *
                          100
                        ).toFixed(2)} %`}
                      </div>
                    </div>
                    <p className="bg-white/45 py-1 my-3 px-2 rounded font-bold">
                      {userInfo.easySolved}/{userInfo.totalEasy}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="font-bold text-yellow-500">Medium:</h1>
                    <div className="w-24 h-24 relative flex justify-center items-center">
                      <CircularProgressbar
                        value={(
                          (Number(userInfo.mediumSolved) /
                            Number(userInfo.totalMedium)) *
                          100
                        ).toFixed(2)}
                        styles={buildStyles({
                          rotation: 0.5,
                          pathColor: "#DADA00",
                          trailColor: "#154C68",
                          textColor: "#DADA00",
                          textSize: "16px",
                        })}
                      />
                      <div className="absolute flex text-[#DADA00] font-bold justify-center items-center">
                        {`${(
                          (Number(userInfo.mediumSolved) /
                            Number(userInfo.totalMedium)) *
                          100
                        ).toFixed(2)} %`}
                      </div>
                    </div>
                    <p className="bg-white/45 py-1 my-3 px-2 rounded font-bold">
                      {userInfo.mediumSolved}/{userInfo.totalMedium}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="font-bold text-red-500">Hard:</h1>
                    <div className="w-24 h-24 relative  flex justify-center items-center">
                      <CircularProgressbar
                        value={(
                          (Number(userInfo.hardSolved) /
                            Number(userInfo.totalHard)) *
                          100
                        ).toFixed(2)}
                        styles={buildStyles({
                          rotation: 0.5,
                          pathColor: "#DA0000",
                          trailColor: "#154C68",
                          textColor: "#DA0000",
                          textSize: "16px",
                        })}
                      />
                      <div className="absolute text-[#DA0000] font-bold flex justify-center items-center">
                        {`${(
                          (Number(userInfo.hardSolved) /
                            Number(userInfo.totalHard)) *
                          100
                        ).toFixed(2)} %`}
                      </div>
                    </div>
                    <p className="bg-white/45 py-1 my-3 px-2 rounded font-bold">
                      {userInfo.hardSolved}/{userInfo.totalHard}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-bold py-3 px-2 gap-2">
                <h1>From total solved:</h1>
                <div className="flex mx-4 gap-8 px-2">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      Easy ={" "}
                      {(
                        (userInfo.easySolved / userInfo.totalSolved) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-xs bg-white/45 py-1 px-2 rounded">
                      {userInfo.easySolved}/{userInfo.totalSolved}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      Medium ={" "}
                      {(
                        (userInfo.mediumSolved / userInfo.totalSolved) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-xs bg-white/45 py-1 px-2 rounded">
                      {userInfo.mediumSolved}/{userInfo.totalSolved}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      Hard ={" "}
                      {(
                        (userInfo.hardSolved / userInfo.totalSolved) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-xs bg-white/45 py-1 px-2 rounded">
                      {userInfo.hardSolved}/{userInfo.totalSolved}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-200 gap-4 flex justify-center animate-pulse items-center flex-col h-98 bg-white/23">
            Loading...
            <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};
