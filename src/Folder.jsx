import * as React from 'react';
import { Box, Typography, Button, Backdrop } from '@mui/material/';
import WestpacContent from './Westpac';

export default function FolderButton() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button
                color="primary"
                disableRipple
                sx={{
                    ":hover": {
                        "& .MuiTypography-root": {
                            fontWeight: "700",
                        },
                    },
                    "&:active": {
                        backgroundColor: "common.white"
                    },
                }}
                onClick={handleOpen} >
                <Box
                    sx={{ maxWidth: "140px" }} >
                    <img
                        id="Folder"
                        src="Assets/FolderClosed.svg"></img>
                    <Typography
                        variant="h5"
                        color="common.black"
                        align="center" >
                        Example
                    </Typography>
                </Box>
            </Button>
            <Backdrop
                sx={{ color: "primary", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}>
                <WestpacContent />
            </Backdrop>
        </div>
    );
}