'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Bad:React.FC<{badPoints:string[]}> = ({badPoints}) => {
  return (
    <div className="py-1.5">
      <h3 className="text-lg">
        <FontAwesomeIcon icon={faThumbsDown} className="pr-1"/>
        悪い点
      </h3>
      <ul>
        {
          badPoints.map((point,idx) => (
            <li key={idx} className="list-disc list-inside">{point}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Bad;