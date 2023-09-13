import * as React from 'react';
import { Box, Typography } from '@mui/material/';

function ContentsHeader(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                p: 2,
                borderRadius: "4px",
                backgroundColor: "common.black",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 4,
                paddingRight: 4,
            }}>
            <Typography
                variant="h1"
                color="common.white"
                align="left"
                sx={{ paddingRight: 2 }} >
                {props.title}
            </Typography>
            <Typography variant="h5" color="common.white" align="left" lineHeight={"28px"}>
                <u>{props.position}</u><br />{props.dates}
            </Typography>
        </Box>
    );
}



ContentsHeader.defaultProps = {
    title: "? Missing Data",
    position: "? Missing Data",
    dates: "? Missing Data",
};

export default ContentsHeader;