import React from "react";
import { topFive } from "../../hooks/studyHooks";

export const Rank = () => {
  const { data } = topFive();

  console.log("d", data);

  return (
    <div>
      <div>
        <div className="w-full text-[24px] flex justify-center items-center py-5">
          Top 5 Scholars
        </div>
        <div className="flex gap-5 flex-wrap">
          {data?.map((el: any, i: number) => (
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Points: {el?.studyPoints}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {i === 0 ? (
                  <>
                    Here goes the top scholar/scholars of the moment:
                    <span className="text-white font-bold">
                      {" "}
                      <div>
                        {el?.users.map((el: any) => (
                          <div>{el?.userName}</div>
                        ))}
                      </div>
                    </span>
                  </>
                ) : i === 1 ? (
                  <>
                    Here goes the second top scholar/scholars of the moment:
                    <span className="text-white font-bold">
                      {" "}
                      {el?.users.map((el: any) => el?.userName)}
                    </span>
                  </>
                ) : i === 2 ? (
                  <>
                    Here goes the third top scholar/scholars of the moment:
                    <span className="text-white font-bold">
                      {" "}
                      {el?.users.map((el: any) => el?.userName)}
                    </span>
                  </>
                ) : i === 3 ? (
                  <>
                    Here goes the forth top scholar/scholars of the moment:
                    <span className="text-white font-bold">
                      {" "}
                      {el?.users.map((el: any) => el?.userName)}
                    </span>
                  </>
                ) : i === 4 ? (
                  <>
                    Here goes the fifth top scholar/scholars of the moment:
                    <span className="text-white font-bold">
                      {" "}
                      {el?.users.map((el: any) => el?.userName)}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
