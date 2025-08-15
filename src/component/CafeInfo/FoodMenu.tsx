'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

interface FoodMenuProps {
  foodMenu:string[]
}
const FoodMenu:React.FC<FoodMenuProps> = ({
  foodMenu,
}) => {

  return (
    <div className="py-1.5">
      <h3 className="text-lg pb-1"><FontAwesomeIcon icon={faUtensils}/> おすすめメニュー</h3>
      <ul>
        {
          foodMenu.map((food, idx) => (
            <li key={idx} className="list-disc list-inside">{food}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FoodMenu;