'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Box, List, ListItem, Typography } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Bad:React.FC<{badPoints:string[]}> = ({badPoints}) => {
  return (
    <Box sx={{ marginBottom: '3px'}} >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ThumbDownAltIcon sx={{ fontSize: '24px', marginRight: '3px' }}/>
      <Typography variant='h3' sx={{ fontSize: '16px', padding:'0'}}>
        悪い点
      </Typography>
      </Box>
      <List sx={{padding:'2px'}}>
        {
          badPoints.map((point,idx) => (
            <ListItem sx={{fontSize:'13px', listStyle:'', padding:'0',margin:'0'}} key={idx} >・ {point}</ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default Bad;