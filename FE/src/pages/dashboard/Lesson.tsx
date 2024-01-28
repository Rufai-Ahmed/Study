import React, { useState } from "react";
import { addLesson } from "../../api/studyAPI";
import { useParams } from "react-router-dom";

export const Lesson = () => {
  const [val, setVal] = useState("");

  const { id } = useParams();

  return (
    <div>
      <div className="w-full flex-col flex justify-center">
        Add Lesson Learnt
        <textarea
          className="h-[40vh] w-full border mb-5"
          name=""
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            addLesson({ lessonLearnt: val }, id!);
          }}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
