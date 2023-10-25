import * as React from 'react';
import { Box, Typography } from '@mui/material/';

function ProjectMediaIn(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                alignItems: "center",
                justifyContent: "flex-start",
                border: 2,
                borderRadius: "4px",
                borderColor: "grey.400",
            }}>
            <Box
                align="left"
                sx={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}>
                <Typography
                    variant="h3">
                    {props.title}
                </Typography>
                <Typography
                    variant="h4">
                    {props.subtitle}
                </Typography>
                {props.extraMiddle}
                <Typography
                    variant="p"
                    color="common.black">
                    {props.description}
                </Typography>
            </Box>
            <Box
                sx={{
                    pt: 2,
                    align: "center",
                }}>
                {props.extraBottom}
            </Box>
        </Box>
    );
}

ProjectMediaIn.defaultProps = {
    imgSRC: "",
    title: "? Missing Data",
    subtitle: "? Missing Data",
    description: "? Missing Data",
    extraMiddle: <div></div>,
    extraBottom: <div></div>
};

export default ProjectMediaIn;