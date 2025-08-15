'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Good:React.FC<{goodPoints:string[]}> = ({goodPoints}) => {
  return (
    <div className="py-1.5">
      <h3 className="text-lg">
        <FontAwesomeIcon icon={faThumbsUp} className="pr-1"/>
         良い点
      </h3>
      <ul>
        {
          goodPoints.map((point, idx) => (
            <li key={idx} className="list-disc list-inside">{point}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Good;