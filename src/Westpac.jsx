import * as React from 'react';
import { Box, Container } from '@mui/material/';

export default function WestpacContent() {
    return (
        <Container maxWidth="lg">
            <Box
                component="img"
                sx={{ maxWidth: "1080px" }}
                src="/Assets/ChopperDemo.gif"
                alt="GIF Showing an app demo" />
        </Container>
    );
}