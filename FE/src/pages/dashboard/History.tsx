import { getOneStudyHistory } from "../../hooks/studyHooks";
import moment from "moment";
import { NavLink } from "react-router-dom";

export const History = () => {
  const { data } = getOneStudyHistory(JSON.parse(localStorage.getItem("ID")!));

  console.log(data);

  return (
    <div>
      {data &&
        data?.studyHistory?.map((el: any) => (
          <NavLink
            to={`/dashboard/study/${el?._id}`}
            className="flex w-full border-y py-3 justify-between"
          >
            <div>Started: {moment(el?.createdAt).format("LLLL")}</div>
            <div>Hour/Hours: {el?.studyDuration}</div>
            <div>Ended: {el?.studyElapsed.toString()}</div>
          </NavLink>
        ))}
    </div>
  );
};
