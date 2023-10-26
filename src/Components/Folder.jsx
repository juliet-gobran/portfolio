import * as React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material/';
import folderASS from '/assets/FolderClosed.svg';

function FolderButton({ name, Contents }) {

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
                        src={folderASS} />
                    <Typography
                        variant="h5"
                        color="common.black"
                        align="center" >
                        {name}
                    </Typography>
                </Box>
            </Button>
            <Modal
                sx={{
                    color: "primary",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    overflow: "scroll",
                    p: 2,
                }}
                open={open}
                onClick={handleClose}>
                {Contents}
            </Modal>
        </div>
    );
}

FolderButton.defaultProps = {
    name: "? Missing Data",
    contents: <Typography>NOT WORKING</Typography>
};

export default FolderButton;