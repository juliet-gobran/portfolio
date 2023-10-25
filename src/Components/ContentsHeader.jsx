import * as React from 'react';
import { Box, Typography } from '@mui/material/';

function ContentsHeader(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "justify",
                textJustify: "inter-word",
                borderRadius: "4px",
                backgroundColor: "common.black",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 2,
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                }}>
                <Typography
                    variant="h1"
                    color="common.white"
                    align="right">
                    {props.title}
                </Typography>
                <Typography
                    variant="h5"
                    color="common.white"
                    align="right"
                    lineHeight={"28px"}>
                    <u>{props.position}</u><br />{props.dates}
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: "grey.400",
                    width: "16px",
                    height: "100px",
                    borderRadius: "4px",
                }} />
            <Box>
                <Typography
                    variant="p"
                    color="common.white">
                    {props.overview}
                </Typography>
            </Box>
        </Box>
    );
}



ContentsHeader.defaultProps = {
    title: "? Missing Data",
    position: "? Missing Data",
    dates: "? Missing Data",
    overview: "? Missing Data",
};

export default ContentsHeader;