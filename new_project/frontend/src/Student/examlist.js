import React from "react";
import { Link, Route } from "react-router-dom";

export default function Examlistmaker(props) {
  let exam_id_list = [];
  let student_id = props.student_id
  for (let j = 0; j < props.id_list.length; j++) {
    exam_id_list.push(
      <Link
        to={`/examoptions/${student_id}/${props.id_list[j]}`}
        params={{ exam_id: props.id_list[j],student_id: student_id }}
        // className="vitalslink"
        key={props.id_list[j]}
      >
    <span>{props.id_list[j]}</span>
    </Link>
    );
  }

  
  return exam_id_list;
}