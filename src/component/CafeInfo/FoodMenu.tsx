'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Box, List, ListItem, Typography } from "@mui/material";

interface FoodMenuProps {
  foodMenu: string[]
}
const FoodMenu: React.FC<FoodMenuProps> = ({
  foodMenu,
}) => {

  return (
    <Box sx={{ marginBottom: '3px', paddingTop:'3px'}} >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <RestaurantIcon sx={{ fontSize: '24px', marginRight: '3px' }} />
        <Typography variant='h3' sx={{ fontSize: '16px', padding:'0'}}>
          おすすめメニュー
        </Typography>
      </Box>
      <List sx={{padding:'2px'}}>
        {
          foodMenu.map((food, idx) => (
            <ListItem sx={{fontSize:'13px', listStyle:'', padding:'0',margin:'0'}} key={idx}>・ {food}</ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default FoodMenu;