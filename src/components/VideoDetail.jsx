import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import Videos from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';



const VideoDetail = () => {
  return (
    <div>
      <Box minHeight="95vh" >
        <Stack direction={{ xs: "column", md: "row" }} >
            <Box flex={1} >
                <Box sx={{ width: "100%", position: "sticky", top: "86px" }} >
                    <ReactPlayer />
                </Box>
            </Box>
        </Stack>
      </Box>
    </div>
  )
}

export default VideoDetail;
