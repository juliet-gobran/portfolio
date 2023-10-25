import * as React from 'react';
import { Box, Typography, Container } from '@mui/material/';
import ContentsHeader from '../Components/ContentsHeader';
import ProjectMediaLeft from '../Components/ProjectMediaLeft';
import ProjectMediaIn from '../Components/ProjectMediaIn';
import ProjectMediaRight from '../Components/ProjectMediaRight';

export default function WestpacContent() {
    return (
        <Container maxWidth="lg" align="center" overflow="hidden">
            <Box
                sx={{
                    maxWidth: "70%",
                    backgroundColor: "common.white",
                    borderRadius: "4px",
                    align: "center",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}>
                <ContentsHeader
                    title="Westpac"
                    position="Engineer"
                    dates="Nov 2020 - July 2023"
                    overview={<div>
                        <strong>iOS Native UI Engineer</strong>, working to maintain & continuously improve the mobile banking experience. Focusing on UI component creation, uplift & maintenance for mobile (iOS and Android) & working with an extensive Design System in Figma.
                    </div>}
                />
                <ProjectMediaLeft
                    type="img"
                    imgSRC="/Assets/ChopperDemoShort.gif"
                    title="Chopper"
                    subtitle="Living & breathing Component Library"
                    description={<div>
                        Trying to <strong>bridge the gap between designers & developers</strong>, my manager and I started to build Chopper. The intent of this internal app was to make handovers easier, providing a source of truth of what is already in build.
                        Being apart of the Mobile UI Component team at Westpac, our job was to build any new components needed for upcoming features. The process included a weekly catch-up with designers, where new components were discussed, and we would estimate the build time & potentially push back if there was a simpler method.
                        There was always confusion around what actually existed in code as there was inconsistency between the Figma Component Library & what was actually built in iOS & Android.
                        <strong> Chopper was a project aimed to improve the developer & designer experience by showcasing a source of truth.</strong>
                    </div>}
                />
                <ProjectMediaRight
                    type="img"
                    imgSRC="/Assets/WorkSmartDASH.gif"
                    title="WorkSMART"
                    subtitle="Internal App for a better 'Employee Experience'"
                    description={<div>
                        Due to reappointment of resources & projects, I took on the role of <strong>Scrum Master / Change Manager</strong> for the internal app WorkSMART. Managing 2 developers, 1 designer & countless stakeholder, during my 2 months in the role I completed 3 successful app releases.
                        <br /> <br />
                        This role required me to become familiar with the ServiceNow, a system that automates & optimises enterprise processes.
                    </div>}
                    extra={
                        <a href="https://www.servicenow.com/au/" target="_blank">
                            <Box
                                align="center"
                                component="img"
                                sx={{
                                    maxWidth: "40%",
                                    borderRadius: "4px",
                                }}
                                src="/Assets/ServiceNow-logo.png"
                                alt="logo" />
                        </a>
                    }
                />
                <ProjectMediaIn
                    title="Modular Banking"
                    subtitle="Pitching a P.O.C using animation"
                    description={<div>
                        Harnessing my creative skills within my role as Engineer gave me the ability to <strong>prototype quickly & present to a high quality</strong>.
                        In order to get funding for a project, prototyping & selling is necessary. My high quality animations were presented to the Westpac Board, gaining funding for my business unit (Consumer Digital Technology) for the Modular Banking project.
                    </div>}
                    extraMiddle={<Box
                        sx={{
                            backgroundColor: "grey.400",
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
                <ProjectMediaIn
                    title="Icon Font"
                    subtitle="Reducing 5mb to 33kb"
                    description={<div>
                        With the expansion of the Westpac icon library for new features such as transaction categorisation, the solution seemed simple to me.
                        With a little research & a lot of convincing, <strong>we were able to simplify & optimise both iOS & Android code-bases by introducing the Icon Font.</strong>
                        <br />
                    </div>}
                    extraMiddle={<Box
                        sx={{
                            backgroundColor: "grey.400",
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
                            <Box
                                component="img"
                                sx={{
                                    maxWidth: "100%",
                                    borderRadius: "4px",
                                }}
                                src="/Assets/WBG-IconFont.png"
                                alt="PNG showing icon font" />
                            <Typography
                                variant="p"
                                color="common.black">
                                <br />
                                <strong>So, what is an Icon Font?</strong>
                                <br />
                                An Icon Font is a .ttf file (Truetype Font) which creates icons into glyphs that can than function like any other font.
                                The beauty of this is that a font is easily resizable & re-colourable.
                                <br />
                                <br />
                                The introduction of the Icon Font reduced our icon assets from approximately 5mb to 33kb. This reduced it to less than 1/100th of the original size.
                            </Typography>
                        </Box>
                    }
                />
            </Box>
        </Container >
    );
}
