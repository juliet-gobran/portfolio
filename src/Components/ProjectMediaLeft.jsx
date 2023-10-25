import * as React from 'react';
import { Box, Typography } from '@mui/material/';

function ProjectMediaLeft(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                p: 2,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                border: 2,
                borderRadius: "4px",
                borderColor: "grey.400",
                gap: 2,
            }}>
            <Box
                component={props.type}
                sx={{
                    maxWidth: "30%",
                    borderRadius: "4px",
                }}
                src={props.imgSRC}
                alt="GIF showing a demo" />
            {/* NEED TO ADJUST THIS BOX W/ BREAKING POINT AS GIF GETS VERY SMALL! */}
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
                <Box
                    sx={{
                        backgroundColor: "grey.400",
                        height: "4px",
                        width: 1,
                        borderRadius: "4px",
                    }} />
                <Typography
                    variant="p"
                    color="common.black">
                    {props.description}
                </Typography>
                {props.extra}
            </Box>
        </Box>
    );
}

ProjectMediaLeft.defaultProps = {
    type: "",
    imgSRC: "",
    title: "? Missing Data",
    subtitle: "? Missing Data",
    description: "? Missing Data",
    extra: <div></div>
};

export default ProjectMediaLeft;