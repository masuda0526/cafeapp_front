'use client'

import React, { useEffect, useState } from "react";
import Item from "./Item";
import { testData } from "@/testdata/cafeDate";
import axios from "axios";
import { CafeProps } from "@/interface/CafeProps";
import { Grid } from "@mui/material";
import useDataStore from "@/store/data";

const List:React.FC = () => {
  const cafes = useDataStore(state => state.cafes);
  const replaceCafes = useDataStore(state => state.replaceCafes);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/cafes')
      .then(res => {
        console.log(res);
        replaceCafes(res.data);
      })
    // replaceCafes(testData);
  }, [])
  return (
    <Grid container spacing={1} px={1}>
        {
          cafes.map((cafe, idx) => (
            <Item key={idx} {...cafe}/>
          ))
        }
    </Grid>
  )
}

export default List;