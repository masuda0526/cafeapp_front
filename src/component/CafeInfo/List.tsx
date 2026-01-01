'use client'

import React, { useEffect, useState } from "react";
import Item from "./Item";
// import { testData } from "@/testdata/cafeDate";
import axios from "axios";
// import { CafeProps } from "@/interface/CafeProps";
import { Grid } from "@mui/material";
import useDataStore from "@/store/data";
import { targetCafeFilter } from "../SearchForm/SearchLogic";
import SearchParamStore from "@/store/SearchParamStore";
import { API_URL } from "@/constants/site";

const List:React.FC = () => {
  const cafes = useDataStore(state => state.cafes);
  const replaceCafes = useDataStore(state => state.replaceCafes);
  const searchParam = SearchParamStore(state => state.currentSearchParam);
  const showCafes = targetCafeFilter(cafes, searchParam);

  useEffect(()=>{
    axios.get(API_URL + '/cafes')
      .then(res => {
        // console.log(res.data);
        replaceCafes(res.data.data.cafes);
      })
    // replaceCafes(testData);
  }, [])
  return (
    <Grid container spacing={1} px={1}>
        {
          showCafes.map((cafe, idx) => (
            <Item key={cafe.id} {...cafe}/>
          ))
        }
    </Grid>
  )
}

export default List;