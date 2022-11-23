import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import httpClient from '../../http';
export default function DashboardHome() {

    useEffect(() => {
        httpClient.get('?_limit=10').then((response) => {
           console.log(response.data);
        });
     }, []);

    return (
        <Box>
            <Typography>
                Main Dashboard Screen
            </Typography>

        </Box>
    )
}