import React from 'react'
import { Box,Button,Typography,useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';


function FAQ() {
    const theme = useTheme();
    // const white = theme.palette.customColors.primaryWhite;
    // const dark1 = theme.palette.customColors.primaryDark1;
    // const dark2 = theme.palette.customColors.primaryDark2;
    // const orange = theme.palette.customColors.orange;
    
  return (
    <div>
        <Accordion
            // defaultExpanded
            sx={{
                color: theme.palette.customColors.primaryWhite, // Text color
                background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.4
                )}`, // Semi-transparent background
                boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
                )}`,
                backdropFilter: "blur(10px)", // Glass effect (blurred background)
                border: `1px solid ${theme.palette.customColors.primaryWhite}`, // Border for the glass effect
                borderRadius: "8px", // Optional: rounded corners for a smoother glass look
            }}
            >
            <AccordionSummary
                expandIcon={
                <ExpandMoreIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                />
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">What should I  look for in my event management platform?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                Not all event platforms are created equal. It's important to partner with an end-to-end platform that supports your entire event lifecycle. Here’s what to look for:

                    Custom Branding: Prioritize a partner with robust customizability. The visual elements of your event pages will have a massive impact on conversions!
                    Financial Flexibility: Opt for a platform that supports your cash flow with daily payouts and automated dispute management.
                    Marketing Support: The most powerful platforms drive traffic to experiences through a combination of features and additional off-platform services.
                    Attendee Support: Building a community is a lot of work! It's important to work with a platform that helps you manage your customer relationships.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            // defaultExpanded
            sx={{
                color: theme.palette.customColors.primaryWhite, // Text color
                background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.4
                )}`, // Semi-transparent background
                boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
                )}`,
                backdropFilter: "blur(10px)", // Glass effect (blurred background)
                border: `1px solid ${theme.palette.customColors.primaryWhite}`, // Border for the glass effect
                borderRadius: "8px", // Optional: rounded corners for a smoother glass look
            }}
            >
            <AccordionSummary
                expandIcon={
                <ExpandMoreIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                />
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Is it easy to switch?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                Our dedicated Organizer Success team works around the clock to empower new organizers with onboarding support, marketing insights, business reviews, and so much more. Book a demo with the team here.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            // defaultExpanded
            sx={{
                color: theme.palette.customColors.primaryWhite, // Text color
                background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.4
                )}`, // Semi-transparent background
                boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
                )}`,
                backdropFilter: "blur(10px)", // Glass effect (blurred background)
                border: `1px solid ${theme.palette.customColors.primaryWhite}`, // Border for the glass effect
                borderRadius: "8px", // Optional: rounded corners for a smoother glass look
            }}
            >
            <AccordionSummary
                expandIcon={
                <ExpandMoreIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                />
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Ticket Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eligendi recusandae expedita inventore tempore, vitae quisquam excepturi deserunt eum, id commodi? Quas dicta autem a vero praesentium quae deserunt corrupti.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            // defaultExpanded
            sx={{
                color: theme.palette.customColors.primaryWhite, // Text color
                background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.4
                )}`, // Semi-transparent background
                boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
                )}`,
                backdropFilter: "blur(10px)", // Glass effect (blurred background)
                border: `1px solid ${theme.palette.customColors.primaryWhite}`, // Border for the glass effect
                borderRadius: "8px", // Optional: rounded corners for a smoother glass look
            }}
            >
            <AccordionSummary
                expandIcon={
                <ExpandMoreIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                />
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Ticket Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eligendi recusandae expedita inventore tempore, vitae quisquam excepturi deserunt eum, id commodi? Quas dicta autem a vero praesentium quae deserunt corrupti.
                </Typography>
            </AccordionDetails>
        </Accordion>

      
    </div>
  )
}

export default FAQ