import * as React from 'react';
import { Box, Typography, Container } from '@mui/material/';
import ContentsHeader from '../Components/ContentsHeader';
import ProjectMediaLeft from '../Components/ProjectMediaLeft';
import ProjectMediaIn from '../Components/ProjectMediaIn';

export default function WestpacContent() {
    return (
        <Container maxWidth="lg" align="center" overflow="hidden">
            <Box
                sx={{
                    maxWidth: "70%",
                    backgroundColor: "common.white",
                    borderRadius: "4px",
                    align: "center",
                    p: 4
                }}>
                <ContentsHeader
                    title="Westpac"
                    position="Engineer"
                    dates="Nov 2020 - July 2023" />
                <ProjectMediaLeft
                    type="img"
                    imgSRC="/Assets/ChopperDemoShort.gif"
                    title="Chopper"
                    subtitle="Living & breathing Component Library"
                    description={<div>Trying to <strong>bridge the gap between designers & developers</strong>, my manager and I started to build Chopper. The intent of this internal app was to make handovers easier, providing a source of truth of what is already in build.
                        Being apart of the Mobile UI Component team at Westpac, our job was to build any new components needed for upcoming features. The process included a weekly catch-up with designers, where new components were discussed, and we would estimate the build time & potentially push back if there was a simpler method.
                        There was always confusion around what actually existed in code as there was inconsistency between the Figma Component Library & what was actually built in iOS & Android.
                        <strong> Chopper was a project aimed to improve the developer & designer experience by showcasing a source of truth.</strong></div>}
                />
                <ProjectMediaIn
                    title="Modular Banking"
                    subtitle="Pitching a POC using animation"
                    description={<div>Harnessing my creative skills within my role as Engineer gave me the ability to <strong>prototype quickly & present to a high quality</strong>.
                        In order to get funding for a project, prototyping & selling is necessary. My high quality animations were presented to the Westpac Board, gaining funding for my business unit (Consumer Digital Technology) for the Modular Banking project.</div>}
                    extraMiddle={<Box
                        sx={{
                            backgroundColor: "common.black",
                            height: "4px",
                            width: 1,
                            borderRadius: "4px",
                        }} />}
                    extraBottom={
                        <Box
                            sx={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}>
                            <video controls autoPlay muted width="100%">
                                <source src="/Assets/ModularBankingAtWestpac.mp4" type="video/mp4" />
                            </video>
                            <Typography
                                variant="p"
                                color="common.black">
                                Once the pitch was successful with the board, the first module was <strong>Message Centre.</strong> This video helped share to the wider team the impact of Modular Banking.
                            </Typography>
                            <video controls autoPlay muted width="100%">
                                <source src="/Assets/MessageCentre-Westpac.mp4" type="video/mp4" />
                            </video>
                        </Box>
                    }
                />
            </Box>
        </Container>
    );
}
