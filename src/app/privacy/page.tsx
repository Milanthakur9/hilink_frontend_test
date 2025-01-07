"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

function Page() {
  const theme = useTheme();
  var orange = theme.palette.customColors.orange;
  var dark1 = theme.palette.customColors.primaryDark1;
  var dark2 = theme.palette.customColors.primaryDark2;
  var white = theme.palette.customColors.primaryWhite;
  return (
    <>
      <Box
        sx={{
          width: { md: "85%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0",
        }}
      >
        <Typography variant="h2">Privacy Policy</Typography>
        <Divider
          sx={{
            background: `linear-gradient(to right,${orange},${dark1})`,
            height: "1.50px",
            margin: "1% 0",
          }}
        ></Divider>

        <Typography variant="h4">Effective Date: March 1st 2024</Typography>

        <Typography variant="subtitle1" sx={{ margin: "1% 0" }}>
          {` HiLink VIP** (“we,” “our,” or “us”) values your privacy and is committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our event ticketing platform (“the Platform”), including our
            website and mobile application. Please read this policy carefully to understand our practices
            regarding your personal data and how we will treat it.`}
        </Typography>

        {/* Information We Collect     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">1. Information We Collect</Typography>
          <Typography variant="subtitle1">
            We may collect and process the following types of information:
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            1.1 Information You Provide to Us:
          </Typography>
          <Typography variant="subtitle1">
            {`- Account Information: When you create an account, we collect personal information such as
            your name, email address, phone number, date of birth, and profile photo.
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Payment Information: To facilitate ticket purchases or payouts, we collect payment details,
                including credit/debit card information and bank account details, through our secure payment
                processors.
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Event Details: When you create or manage an event, we collect details about the event,
                including location, date, pricing, and ticket tiers.
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Communication Data: Any messages, inquiries, or feedback you send to us via the Platform or
                customer support channels.
            `}
          </Typography>
        </Box>
        {/* Information We Collect */}

        {/*  Information We Collect Automatically:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            1.2 Information We Collect Automatically:
          </Typography>

          <Typography variant="subtitle1">
            {`- Usage Data: Information about your interactions with the Platform, such as pages visited,
                events viewed, searches performed, and tickets purchased.
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Device Information: Information about the device you use to access the Platform, including IP
                address, browser type, operating system, device type, and unique device identifiers
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Location Data: If enabled, we collect geolocation data to provide personalized event
recommendations
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Cookies and Tracking Technologies: We use cookies, beacons, and similar technologies to
analyze usage and enhance your experience. For more details, see our Cookie Policy below.
            `}
          </Typography>
        </Box>
        {/* Information We Collect Automatically: */}

        {/*   Information from Third Parties:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            1.3 Information from Third Parties:
          </Typography>

          <Typography variant="subtitle1">
            {`- Social Media: If you link your social media account to the Platform, we may collect information
                such as your username, profile picture, and connections.
            `}
          </Typography>
          <Typography variant="subtitle1">
            {`- Payment Processors: Information related to successful or failed transactions.
            `}
          </Typography>
        </Box>
        {/*  Information from Third Parties: */}

        {/* How We Use Your Information     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">2. How We Use Your Information</Typography>
          <Typography variant="subtitle1">
            We use the information we collect for the following purposes:
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            2.1 To Provide and Improve the Platform:
          </Typography>
          <Typography variant="subtitle1">
            {`- Facilitate account creation and management.`}
          </Typography>
          <Typography variant="subtitle1">
            {` - Process transactions, including ticket purchases and payouts.`}
          </Typography>
          <Typography variant="subtitle1">
            {`- Personalize content, event recommendations, and user experiences.`}
          </Typography>
          <Typography variant="subtitle1">
            {`- Monitor and analyze usage trends to improve functionality.`}
          </Typography>
        </Box>
        {/* How We Use Your Information */}

        {/* 2.2 To Communicate with You:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            2.2 To Communicate with You:
          </Typography>
          <Typography variant="subtitle1">
            {`- Send transaction confirmations, receipts, and updates.`}
          </Typography>
          <Typography variant="subtitle1">
            {` - Notify you about upcoming events, promotions, or changes to our services.`}
          </Typography>
          <Typography variant="subtitle1">
            {`- Respond to your inquiries and provide customer support.`}
          </Typography>
        </Box>
        {/*2.2 To Communicate with You: */}

        {/* 2.3 For Security and Fraud Prevention:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            2.3 For Security and Fraud Prevention:
          </Typography>
          <Typography variant="subtitle1">
            {`- Detect, investigate, and prevent fraudulent activities or security breaches.`}
          </Typography>
          <Typography variant="subtitle1">
            {` - Enforce our terms of service and other policies.`}
          </Typography>
        </Box>
        {/*2.3 For Security and Fraud Prevention: */}

        {/* 2.4 For Legal Compliance: */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">2.4 For Legal Compliance:</Typography>
          <Typography variant="subtitle1">
            {`- Comply with applicable laws, regulations, and legal processes.`}
          </Typography>
          <Typography variant="subtitle1">
            {` - Respond to lawful requests by public authorities.`}
          </Typography>
        </Box>
        {/*2.4 For Legal Compliance:*/}

        {/* 3. How We Share Your Information     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">3. How We Share Your Information</Typography>
          <Typography variant="subtitle1">
            We may share your information with:
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            3.1 Service Providers:
          </Typography>
          <Typography variant="subtitle1">
            {`Third-party vendors who assist in payment processing, data analytics, marketing, and customer
            support.`}
          </Typography>
        </Box>
        {/* 3. How We Share Your Information */}

        {/* 3.2 Event Organizers:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            3.2 Event Organizers:
          </Typography>
          <Typography variant="subtitle1">
            {`If you purchase tickets for an event, your information (such as name and email) may be shared
            with the event organizer.`}
          </Typography>
        </Box>
        {/* 3.2 Event Organizers: */}

        {/* 3.3 Legal Obligations:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            3.3 Legal Obligations:
          </Typography>
          <Typography variant="subtitle1">
            {`We may disclose your information to comply with legal requirements, court orders, or
                government requests`}
          </Typography>
        </Box>
        {/* 3.3 Legal Obligations: */}

        {/* 3.4 Business Transfers:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            3.4 Business Transfers:
          </Typography>
          <Typography variant="subtitle1">
            {`In the event of a merger, acquisition, or sale of assets, your information may be transferred as
            part of the business transaction.`}
          </Typography>
        </Box>
        {/* 3.4 Business Transfers: */}

        {/* 4. Your Privacy Choices     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">4. Your Privacy Choices</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            4.1 Access and Correction:
          </Typography>
          <Typography variant="subtitle1">
            {`You can access and update your account information through your profile settings.`}
          </Typography>
        </Box>
        {/* 4. Your Privacy Choices */}

        {/* 4.2 Opt-Out of Marketing Communications:*/}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            4.2 Opt-Out of Marketing Communications:
          </Typography>
          <Typography variant="subtitle1">
            {`You can opt-out of receiving promotional emails by following the unsubscribe link in the email or
updating your preferences in your account settings.
`}
          </Typography>
        </Box>
        {/* 4.2 Opt-Out of Marketing Communications:*/}

        {/* 4.3 Location Services:*/}

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            4.3 Location Services:
          </Typography>
          <Typography variant="subtitle1">
            {`You can disable location tracking through your device settings.`}
          </Typography>
        </Box>
        {/* 4.3 Location Services:*/}

        {/*4.4 Cookies:*/}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            4.4 Cookies:
          </Typography>
          <Typography variant="subtitle1">
            {`Manage your cookie preferences using the cookie settings available on our website or in your
            browser settings.`}
          </Typography>
        </Box>
        {/*4.4 Cookies:*/}

        {/* 5. Security of Your Information     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">5. Security of Your Information</Typography>
          <Typography variant="subtitle1">
            {`We use industry-standard security measures to protect your personal information. These include
encryption, secure servers, and regular security audits. However, no method of transmission or
storage is completely secure, and we cannot guarantee absolute security.
`}
          </Typography>
        </Box>
        {/* 5. Security of Your Information */}

        {/* 6. Data Retention     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">6. Data Retention</Typography>
          <Typography variant="subtitle1">
            {`We retain your information for as long as necessary to provide the Platform and fulfill the
purposes outlined in this Privacy Policy, unless a longer retention period is required by law`}
          </Typography>
        </Box>
        {/* 6. Data Retention */}

        {/* 7. Third-Party Links     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">7. Third-Party Links</Typography>
          <Typography variant="subtitle1">
            {`The Platform may contain links to third-party websites or services. We are not responsible for
the privacy practices of these external platforms and encourage you to review their policies.`}
          </Typography>
        </Box>
        {/* 7. Third-Party Links */}

        {/* 8. International Users     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">8. International Users</Typography>
          <Typography variant="subtitle1">
            {`If you are accessing the Platform from outside the United States, please be aware that your
information may be transferred to, stored, and processed in the United States or other countries
where we operate. By using the Platform, you consent to such data transfers.`}
          </Typography>
        </Box>
        {/* 8. International Users */}

        {/* 9. Children’s Privacy     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">9. Children’s Privacy</Typography>
          <Typography variant="subtitle1">
            {`The Platform is not intended for individuals under the age of 13. We do not knowingly collect
personal information from children under 13. If we become aware that we have inadvertently
collected such data, we will take steps to delete it.`}
          </Typography>
        </Box>
        {/* 9. Children’s Privacy */}

        {/* 10. Changes to This Privacy Policy     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            10. Changes to This Privacy Policy
          </Typography>
          <Typography variant="subtitle1">
            {`We may update this Privacy Policy from time to time to reflect changes in our practices or legal
requirements. We will notify you of significant updates by posting a notice on the Platform or
sending an email notification.`}
          </Typography>
        </Box>
        {/* 10. Changes to This Privacy Policy */}

        {/* 11. Contact Us     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">11. Contact Us</Typography>
          <Typography variant="subtitle1">
            {`If you have any questions or concerns about this Privacy Policy or our data practices, please
            contact us at:`}
          </Typography>
          <Typography variant="subtitle1">
            {`If you have any questions or concerns about this Privacy Policy or our data practices, please
            contact us at:`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">{`HiLink VIP`}</Typography>
          <Typography variant="subtitle1">
            {`Email:support@hilink.vip`}
          </Typography>
        </Box>
        {/* 11. Contact Us */}

        {/* Cookie Policy     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">Cookie Policy</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "1%" }}>
            What Are Cookies?
          </Typography>
          <Typography variant="subtitle1">
            {`Cookies are small files stored on your device that help us improve your experience by
remembering preferences and analyzing usage patterns.`}
          </Typography>
        </Box>
        {/* Cookie Policy */}

        {/* Types of Cookies We Use:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">Types of Cookies We Use:</Typography>
          <Typography variant="subtitle1">
            {`- **Essential Cookies:** Required for basic functionality.`}
          </Typography>
          <Typography variant="subtitle1">
            {`- **Analytics Cookies:** Help us understand user behavior.`}
          </Typography>
          <Typography variant="subtitle1">
            {`- **Marketing Cookies:** Enable targeted advertising.`}
          </Typography>
        </Box>
        {/* Types of Cookies We Use: */}

        {/* Managing Cookies:     */}
        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">Managing Cookies:</Typography>
          <Typography variant="subtitle1">
            {`You can manage or disable cookies through your browser settings or our cookie management tool.`}
          </Typography>
        </Box>
        <Typography variant="subtitle1">
          {`Thank you for trusting HiLink VIP. Your privacy is our priority.`}
        </Typography>
        {/* Managing Cookies: */}
      </Box>
    </>
  );
}

export default Page;
