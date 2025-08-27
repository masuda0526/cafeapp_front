'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box, List, ListItem, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Good: React.FC<{ goodPoints: string[] }> = ({ goodPoints }) => {
  return (
    <Box sx={{ marginBottom: '3px'}} >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ThumbUpAltIcon sx={{ fontSize: '24px', marginRight: '3px' }}/>
        <Typography variant='h3' sx={{ fontSize: '16px', padding:'0'}}>
          良い点
        </Typography>
      </Box>
      <List sx={{padding:'2px'}}>
        {
          goodPoints.map((point, idx) => (
            <ListItem sx={{fontSize:'13px', listStyle:'', padding:'0',margin:'0'}} key={idx}>・ {point}</ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default Good;