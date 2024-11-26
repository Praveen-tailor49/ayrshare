import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const AccountScore = () => {
  const score = 87; // You can dynamically change this value

  return (
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor="#1f2a40"
      p="30px"
    >
      <Typography variant="h5" fontWeight="600" color="white">
        Account Score
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <CircularProgress
          variant="determinate"
          value={score}
          size={125}
          thickness={3.5}
          sx={{
            color: '#4caf50',
            position: 'relative',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            fontWeight: '600',
            color: 'white',
          }}
        >
          {/* {score} */}
        </Box>
      </Box>
    </Box>
  );
};

export default AccountScore;
