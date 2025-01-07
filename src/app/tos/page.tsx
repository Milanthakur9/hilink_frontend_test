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
    <div>
      <Box
        sx={{
          width: { md: "85%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0",
        }}
      >
        <Typography variant="h2">Terms of Service</Typography>
        <Divider
          sx={{
            background: `linear-gradient(to right,${orange},${dark1})`,
            height: "1.50px",
            margin: "1% 0",
          }}
        ></Divider>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            {`Welcome to HILINK! HILINK GROUP INC., a Georgia corporation (together with its affiliates, agents,
representatives, consultants, employees, officers, and directors –“HILINK”, “we”, “us” and/or “our”) that
provides the ticketing platform located at`}{" "}
            <a
              href="#"
              style={{
                textDecoration: `underline solid ${orange}`,
                color: orange,
                cursor: "pointer",
              }}
            >
              https://hilink.vip
            </a>{" "}
            {` (collectively with other HILINK platforms or
websites, the “Site”) and the mobile application (“App”) that allows users to offer, sell, or buy event tickets
or third-party services and enables curators to manage marketing, ticketing, attendance, and payment
collection (collectively, such services and related HILINK products or services, including any new features
and applications, together with the Site and App, the “Services”). Portions of the Services are publicly
available to all visitors to the Site (the “Visitors”), whereas other portions of the Services are available only
to registered users with an Account on the Services (collectively, the “Members”). These Terms of Service
(“Agreement”) applies to both Visitors and Members (collectively, the “Users”). Please read this
Agreement carefully before you start to use the Services.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            {`BY CLICKING THE “AGREE” BUTTON WHEN CREATING AN ACCOUNT OR LOGGING IN, YOU`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <ol type="1" start={1}>
            <li style={{ paddingLeft: "15px" }}>
              <Typography variant="subtitle1">
                {`ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT AND THE PRIVACY POLICY;`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px" }}>
              <Typography variant="subtitle1">
                {`REPRESENT THAT YOU HAVE THE AUTHORITY AND ARE FULLY ABLE AND COMPETENT
                TO ENTER THIS AGREEMENT ON BEHALF OF YOURSELF OR AN ENTITY;`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px" }}>
              <Typography variant="subtitle1">
                {`REPRESENT THAT YOU ARE OF LEGAL AGE TO ENTER INTO A BINDING AGREEMENT; AND`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px" }}>
              <Typography variant="subtitle1">
                {`ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS AND THE PRIVACY POLICY.`}
              </Typography>
            </li>
          </ol>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            {`IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICES.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">{`1. HILINK Account Creation`}</Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <ol type="i" start={1}>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`Creating a HILINK Account. In order to use the Services as a Member, you are required to create a
HILINK account (“Account”, as further defined below). You must be at least eighteen (18) years of age, or
the age of majority in your applicable state, to register an Account; otherwise, you may only use the
Services with permission from, and under the supervision of, your parent or guardian. You represent that
the information in your Account, and any other information you otherwise provide to us, is accurate,
current and complete information, and agree to update it and keep it accurate, current and complete. We
reserve the right to suspend or terminate your Account or your access to the Services if any information
provided to us proves to be untrue, inaccurate, not current, or incomplete. It shall be a violation of this
Agreement to (a) submit inauthentic information for Account registration or maintenance, (b) create or
control more than one Account without our express written authorization (including, but not limited to,
using a name that is not yours, using a temporary or secondary email address, or providing any other
falsified information), or (c) allow any other person to use your Account to participate in or otherwise use
the Services. If you are a User seeking to use the Services to manage marketing, ticketing, attendance, or
payment collection of your events or services (collectively, “Curators”), additional terms may apply to you.`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`Account Activities. When you create an Account, you will be asked to create a password. You are solely
responsible for maintaining the confidentiality of your Account and password and for restricting access to
your computer/mobile device, and you agree to accept responsibility for all activities, charges (if
applicable), and damages that occur under your Account. If you discover any unauthorized use of your
Account, or other known Account-related security breach, you must report it to us immediately. You agree
that you are responsible for anything that happens through your Account until you close your Account or
prove that your Account security was compromised due to no fault of your own. We cannot and will not be
liable for any loss or damage arising from your failure to comply with this section.
`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`Curator Obligations. Members who organize and promote events and offer, sell, or otherwise distribute
tickets to events (“Events”) through the Services are referenced herein as Curators. Curator represents
and warrants that it (a) is authorized to promote the Event through the Services, that it will obtain all
applicable licenses, permits, and authorizations for such Event (“Authorizations”) prior to offering, selling,
or distributing such Event tickets through the Services, and that it shall provide evidence of such
Authorizations promptly upon HILINK’s reasonable request from time to time; (b) will comply with all
applicable laws, rules, or regulations related to Curator’s promotion or hosting of such Event, including
but not limited to enforcement of any applicable venue rules or identity verification of Event attendees;
promoting or hosting such Event; and (c) that each of Curator’s Event listings is accurate, current,
complete, and not misleading or otherwise deceptive. No Event tickets sold through the Services will be
delivered separately or require an additional purchase, for example, via a third-party website or other
channel. Curator understands and agrees that it is solely responsible for its Events and the Event tickets
that it makes available or distributes through the Services, including posting or making available any
applicable terms and conditions regarding such Events or Event tickets and that it is solely responsible for
any fees or costs incurred in connection with, and for paying any applicable income, sales, or other taxes
that Curator may be subject to, as a result of using the Services.
`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`Consumer Obligations. Members who purchase Event tickets from Curators from HILINK through the
Services are referenced herein as “Consumers.” Consumer understands and agrees that (a) HILINK does
not sell, and is not responsible for, the Events promoted on the Services or the Event tickets made
available for purchase on the Services and is merely a content host for such Events; (c) Events made
available through the Services may be subject to the applicable terms and conditions as stated by the
Curator, and Consumer is responsible for complying with such Event terms and conditions. Consumer is
responsible for payment of all fees and charges (such as taxes, if applicable and HILINK processing fees
for the transaction) for purchases made on the Services through Consumer’s Account, and for providing
and maintaining current and accurate payment details in Consumer’s Account.
`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`User Acknowledgment of Marketplace Platform; Refund Policy. HILINK is not responsible for any loss or
damage arising out of any decisions ultimately made or implemented based on a User’s use of the
Services, including but not limited to losses or damages relating to attendance at any Events. HILINK has
no control over and does not guarantee the pricing, existence, quality, safety, or legality of any Events or
Event tickets, including any related User Content, promoted on the Services. All purchases made on the
Services are subject to the refund policies of the applicable Curator and/or Event. Consumers may be
able to request refunds under certain circumstances if permitted by the applicable Curator and/or Event,
however, HILINK processing fees are non-refundable and will not be included in any refunds processed
on the Services, regardless of the reason for the refund. Consumers may request a refund by contacting
the Curator of an applicable Event or contacting us at support@hilink.vip to be put in contact with such
Curator.`}
              </Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">
                {`User Interactions. Subject to the terms of the HILINK Privacy Policy, your direct interactions (if any) with
other Users, including the purchase of, sale of, payment for, and delivery of goods or services, and any
other terms, conditions, warranties, or representations associated with such dealings, are solely between
you and that individual User. Like with any web-based interaction, we suggest that you use caution and
good judgment. Except as otherwise specifically stated herein, HILINK is not involved in any actual
transactions made through the Services. HILINK is not the agent or representative of any User for any
purpose whatsoever and is not responsible for any loss or damage incurred as the result of any such
dealings or with respect to any other User’s use or disclosure of your personally identifiable information.
For details about our information collection practices, please see our Privacy Policy. IF THERE IS A
DISPUTE BETWEEN YOU AND ANY THIRD PARTY (INCLUDING, WITHOUT LIMITATION, ANY
MEMBER OR VISITOR OF THE SERVICE), HILINK IS UNDER NO OBLIGATION TO BECOME
INVOLVED, AND YOU HEREBY RELEASE HILINK FROM ANY CLAIMS, DEMANDS, OR DAMAGES
OF ANY KIND AND OF ANY NATURE ARISING OUT OF OR RELATING TO ANY SUCH DISPUTE.`}
              </Typography>
            </li>
          </ol>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">{`2. Use of the Services; Reservation of Rights`}</Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>License Grant.</strong>{" "}
            {`Subject to the terms of this Agreement, HILINK grants you a personal, limited,
non-exclusive, and nontransferable license to access and use the Services strictly in accordance with this
Agreement and all applicable laws, rules, and regulations. You are responsible for all of your activity in
connection with the Services.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Reservation of Rights.</strong>{" "}
            {`HILINK reserves the right to modify, suspend or discontinue all or any aspect of
the Services to anyone for any reason at our sole discretion, with or without any notice. HILINK reserves
the right to modify, suspend, or discontinue the Services (including, but not limited to, the availability of
any feature, database, or content), whether temporarily or permanently at any time for any reason. You
agree that HILINK shall not be liable to you or to any third party for any modification, suspension, or
discontinuation of the Services. We may also impose limits on certain features and services or restrict
your access to parts or all of the Services without notice or liability. HILINK may, in its sole discretion: (a)
cancel unconfirmed Accounts, duplicate Accounts, or Accounts that have been inactive for a substantial
period of time; (b) delay, refuse to display, or remove content or listings; (c) remove any special status
associated with an Account, and (d) take technical and/or legal steps to limit or prevent any User’s use of
the Services, including imposing limits on certain features of the Services or restricting access to parts or
all of the Services, in each case without notice or liability.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Prohibited Conduct.</strong>{" "}
            {` You understand and agree that you will not use the Services to engage in the
prohibited conduct below:
`}
          </Typography>
        </Box>

        {/* ul list  */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not use the Services for any illegal or fraudulent purpose, or in violation of any local,
state, national, or international law, including, without limitation, laws governing intellectual
property and other proprietary rights, data protection, and privacy;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not use the Services for purposes of competitive analysis, the development of a
competing product or service, or any other purpose that is to our commercial disadvantage;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not submit information or documentation to the Services that pertains or belongs to any
other party;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not post, store, send, transmit, or disseminate any information or material which
infringes any patents, trademarks, trade secrets, copyrights, or any other proprietary or
intellectual property rights;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not use the Services in any way that (i) posts, lists, or uploads content that is false,
inaccurate, misleading, deceptive; (ii) contains any threat of violence to others; (iii) is in
furtherance of illegal activities; (iv) is harassing, hateful, libelous, defamatory, abusive, or
constitutes spam; or (v) is pornographic, predatory, sexually graphic, racist, offensive, harmful to
a minor, or would otherwise violate the rights of any third party or give rise to civil or criminal
liability`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not attempt to use any method to gain unauthorized access to any features of the
Services`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not directly or indirectly decipher, decompile, remove, disassemble, reverse engineer, or
otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the
Services, security-related features of the Services, features that prevent or restrict use or copying
of any content accessible through the Services, or features that enforce limitations on use of the
Services, except to the extent applicable laws specifically prohibit such restriction`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not directly or indirectly modify, translate, or otherwise create derivative works of any
part of the Services, nor republish, sell, rent, or sublicense, reproduce, duplicate, or copy material
from the Services`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not, without prior written approval from HILINK, create frames around our Web pages or
use other techniques that alter in any way the visual presentation or appearance of our Site or
Services`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not directly or indirectly license, copy, sell, rent, lease, distribute, or otherwise transfer
any of the rights that you receive hereunder or commercially exploit the Services, in whole or in
part`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not harvest or collect information about other Users without their consent;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not directly or indirectly take any action that constitutes unsolicited or unauthorized
advertising or promotional material or any junk mail, spam, or chain letters; contains software
viruses or any other computer codes, files, or programs that are designed or intended to disrupt,
damage, limit, or interfere with the proper function of any software, hardware, or
telecommunications equipment or to damage or obtain unauthorized access to any system, data,
password, or other information of HILINK or any third party; or that impersonates any person or
entity, including any employee or representative of HILINK;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not directly or indirectly take any action that imposes or may impose (as determined by
HILINK in its sole discretion) an unreasonable or disproportionately large load on HILINK’s or its
third-party providers’ infrastructure; interfere or attempt to interfere with the proper working of the
Services or any activities conducted on the Service; run any form of auto-responder or “spam” on
the Services; or use automated means (including but not limited to scripts, third-party tools, bots,
or web scrapers) to interact with the Services in any way; and
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`You shall not create a false identity on the Services, misrepresent your identity, impersonate any
person or entity (including any employee or representative of HILINK), create, use, or attempt to
use an Account for anyone other than you, or sell or otherwise transfer your Account.`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {` If for any reason we determine that you have failed to follow these rules, we reserve the right to prohibit
any and all current or future use of the Services by you. If we have reason to suspect, or learn that
anyone is violating this Agreement, we may investigate and/or take legal action as necessary including
bringing a lawsuit for damages caused by the violation. We reserve the right to investigate and take
appropriate legal action, including without limitation, cooperating with and assisting law enforcement or
government agencies in any resulting investigations of illegal conduct.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>Prohibited Conduct.</strong>{" "} */}
            {` 1. Availability of the Services`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Availability</strong>{" "}
            {` You acknowledge that there may be interruptions in service or events that are beyond our
control. While we use reasonable efforts to keep the Services accessible, the Services may be
unavailable from time to time for any reason including, without limitation, system downtime for routine
maintenance. You further understand that there may be interruptions in service or events on third-party
sites that may affect your use of the Services and that are beyond our control to prevent or correct.
Accordingly, we cannot accept any responsibility for any connectivity issues that you may experience
when using the Site or Services or for any loss of material, data, transactions or other information caused
by system outages, whether planned or unplanned. You hereby agree that we cannot be held liable to you
or any third party should we exercise our right to modify, suspend or discontinue the Services.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>Prohibited Conduct.</strong>{" "} */}
            {` 2. User Content Guidelines`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>User Content.</strong>{" "}
            {`  Users of the Services may have the ability to contribute, add, create, submit, distribute,
facilitate the distribution of, collect, post, or otherwise make accessible certain content through
submission of text, photographs, user videos, electronic files, and software code or license keys, or other
information in order to use, or continue using, the Services (“User Content”). You understand and agree
that you are responsible for whatever material you submit, and you, not HILINK, have full responsibility for
your User Content and Feedback (as defined below), including its legality, reliability, accuracy,
appropriateness, originality, and copyright.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>User Content License.</strong>{" "}
            {` HILINK does not claim ownership of any User Content. By posting User Content
to the Service, you grant us and our service providers and business partners a nonexclusive, royalty-free,
perpetual, irrevocable, sub-licensable, and transferable (in whole or in part) worldwide license to use,
modify, publicly display, reproduce, and distribute such User Content on and through the Service,
including in connection with the development, production, distribution and/or exploitation (including
marketing and promotion) of HILINK generally, unless otherwise prohibited by law. You agree that this
license includes the right for us to make your User Content available to other users of the Service, subject
to this Agreement and the HILINK Privacy Policy.

`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              User Feedback on the Services.
            </strong>{" "}
            {` We, including third-party partners, may ask you for Feedback (as
defined below) on your experience with the Services. We shall become the owner of any reviews,
comments, suggestions or other feedback regarding the Services posted to the Services, HILINK social
media pages, or other third-party sites (collectively, “Feedback”). Without limitation, we will have exclusive
ownership of all present and future existing rights to the Feedback of every kind and nature everywhere
and will be entitled to use the Feedback for any commercial or other purpose whatsoever, including to
advertise and promote HILINK, without compensation to you or any other person sending the Feedback.
You specifically waive any “moral rights” in and to the Feedback. You agree that any Feedback you
submit to us will not contain any information or ideas that you consider to be confidential or proprietary.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>User Content Warranties.</strong>{" "}
            {`  To the extent that you decide to post any User Content or Feedback on the
Services or on HILINK social media pages, you represent and warrant to us that (a) you own the User
Content, or you otherwise have the legal right to use it and you have received all necessary permissions,
clearances from, or are authorized by, the owner of any part of the content to submit it to the Services; (b)
your User Content or Feedback will not contain third-party copyrighted material, or material that is subject
to other third-party proprietary rights, unless you have permission from the rightful owner of the material
or you are otherwise legally entitled to post the material and to grant us all of the license rights granted
herein; and (c) you have no agreement with or obligations to any third party with respect to the rights
herein granted which conflict or interfere with or adversely affect any of the provisions of these Terms or
the use or enjoyment by us of any of the rights herein granted.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              Enforcement; Validation of Content.
            </strong>{" "}
            {`  HILINK is under no obligation to post or use any User Content you
may provide. We may refuse to accept or transmit User Content. Additionally, we shall have the right to
delete, edit, modify, reformat, excerpt, or translate any of your User Content for the purpose of providing
Services to you. You understand and agree that HILINK is not and cannot be responsible for any User
Content, including any information or materials therein, posted by Users on the Services, and that you
must bear all risks associated with the exposure to and/or use of any such User Content. We reserve the
right to review any User Content, and to investigate and/or take appropriate action against you in our sole
discretion if you violate any provision of this Agreement or otherwise create liability for us or any other
person. Such action may include removing your User Content, terminating your Account in accordance
with this Agreement, and/or reporting you to law enforcement authorities.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>
              Enforcement; Validation of Content.
            </strong>{" "} */}
            {`  HILINK Intellectual Property`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>HILINK Content.</strong>{" "}
            {` Through the Services, we may make accessible various content, including, but not
limited to, videos, photographs, images, artwork, graphics, audio clips, comments, data, text, software,
scripts, campaigns, other material and information, and associated trademarks and copyrightable works
(collectively, “HILINK Content”).
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              HILINK Intellectual Property Rights.
            </strong>{" "}
            {`  The Services and HILINK Content are protected in many ways,
including copyrights, trademarks, service marks, and other rights and laws. You agree to respect all legal
notices, information, and restrictions contained in any content accessed through the Services, including in
any HILINK Content. You also agree not to change, translate, or otherwise create derivative works based
off HILINK Content. All other User Content viewed through the Services is the property of its respective
owner. You have a limited, revocable, non-exclusive, non-transferable license to use the Services and
HILINK Content solely for legally permitted activities related to our Services as outlined in this Agreement.
.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {`  Copyright Policy and Notices of Intellectual Property Violations`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Copyright Policy.</strong>{" "}
            {` HILINK complies with the Digital Millennium Copyright Act (DMCA). We will remove
infringing materials in accordance with the DMCA if properly notified that Content infringes copyright. If
you believe that your work has been copied in a way that constitutes copyright infringement, please notify
the HILINK Copyright Agent by email at support@hilink.vip or by mail to the address in the Contact
section. Please do not send notices or inquiries about anything other than alleged copyright infringement
or other intellectual property claims to our Agent for Notice. Your email must contain the following
information:
`}
          </Typography>
        </Box>

        {/* ul list  */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`an electronic or physical signature of the person authorized to act on behalf of the owner of the
copyright interest;
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`information reasonably sufficient to permit us to contact you, such as an address, telephone
number, and, if available, an e-mail address;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`a description of the copyrighted work that you claim has been infringed;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`a description of where the material that you claim is infringing is located on the Services,
sufficient for us to locate the material; your address, telephone number, and email address;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`a statement by you that you have a good faith belief that the disputed use is not authorized by the
copyright owner, its agent, or the law; and
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`a statement by you that the information in your notice is accurate and, under penalty of perjury,
that you are the copyright owner or authorized to act on the copyright owner’s behalf.
`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {/* <strong style={{ color: orange }}>Copyright Policy.</strong>{" "} */}
            {` If you fail to comply with these notice requirements, your notification may not be valid. Under the
Copyright Act, any person who knowingly materially misrepresents that material is infringing or was
removed or disabled by mistake or misidentification may be subject to liability.
In accordance with the Digital Millennium Copyright Act, we have adopted a policy of, in appropriate
circumstances, terminating User Accounts that are repeat infringers of the intellectual property rights of
others. We may also terminate User Accounts even based on a single infringement.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Counter-Notice.</strong>{" "}
            {`  If you believe that your User Content that was removed (or to which access was
disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright
owner’s agent, or pursuant to the law, to post and use the material in your User Content, you may send a
written counter-notice containing the following information to the Copyright Agent:`}
          </Typography>
        </Box>

        {/* order list */}
        <Box sx={{ margin: "1% 0" }}>
          <ol type="1" start={1}>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Your physical or electronic signature;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{` Identification of the User Content that has been removed or to which access has been disabled
and the location at which the Content appeared before it was removed or disabled;
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`A statement that you have a good faith belief that the User Content was removed or disabled as a
result of mistake or a misidentification of the User Content; and
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{` Your name, address, telephone number, and email address, a statement that you consent to the
jurisdiction of the federal court in New York City, New York, and a statement that you will accept
service of process from the person who provided notification of the alleged infringement`}</Typography>
            </li>
          </ol>
        </Box>
        {/* order list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {/* <strong style={{ color: orange }}>Counter-Notice.</strong>{" "} */}
            {` If a counter-notice is received by the Copyright Agent, we may send a copy of the counter-notice to the
original complaining party informing that person that it may replace the removed User Content or cease
disabling it in 10 business days. Unless the copyright owner files an action seeking a court order against
the User Content provider, member or user, the removed User Content may be replaced, or access to it
restored, in 10 to 14 business days or more after receipt of the counter-notice, at our sole discretion.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {` Sponsorships and Third-Party Sites`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Advertisements. </strong>{" "}
            {` The Services may contain third party advertisements, corporate sponsorships and/or
branded content (for example, from our marketing or launch partners as may be designated on the App or
Site). The sponsors that provide these advertisements or sponsorships are solely responsible for ensuring
that the materials submitted for inclusion on the Services are accurate and that they comply with all
applicable laws. We are not responsible for the acts or omissions of any sponsor or advertiser.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Third-Party Sites. </strong>{" "}
            {` The Services may permit you to link to other websites or resources on the internet.
Links on the Services to third party websites, if any, are provided only as a convenience to you. If you use
these links, you will leave the Services. The inclusion or integration of third-party services or links does
not imply control of, endorsement by, or affiliation with HILINK. Your dealings with third parties are solely
between you and such third parties. You agree that we will not be responsible or liable for any content,
goods or services provided on or through these outside websites or for your use or inability to use such
websites. You will use these links at your own risk.

`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              Hyperlinking to Our Content.{" "}
            </strong>{" "}
            {` The following organizations may link to our Site without our prior written approval: `}
          </Typography>
        </Box>

        {/* ul list */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Government agencies`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Search engines`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`News organizations`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{` Online directory distributors when they list us in the directory may link to our Site in the same
manner as they hyperlink to the websites of other listed businesses; and`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping
malls, and charity fundraising groups which may not hyperlink to our Site`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="subtitle1">
            {`The above organizations may link to our home page, or to HILINK publications or other Site information
so long as the link:
`}
          </Typography>
        </Box>

        {/* ul list */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(a) is not in any way misleading,`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
products or services, and
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(c) fits within the context of the linking party’s site.
`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              Hyperlinking by Third Parties Requiring HILINK Approval.
            </strong>{" "}
            {`  The following organizations must obtain
prior written approval from HILINK before linking to our Site:`}
          </Typography>
        </Box>

        {/* ul list */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Commonly-known consumer and/or business information sources such as Chambers of
Commerce, American Automobile Association, AARP and Consumers Union;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Dot.com community sites;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Associations or other groups representing charities, including charity giving sites`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Online directory distributors;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Internet portals;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Accounting, law and consulting firms whose primary clients are businesses; and`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`Educational institutions and trade associations.`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {` If you are among the organizations listed in this Section 7.4 and are interested in linking to our Site, you
must notify us prior to doing so by sending an email to support@hilink.vip. Please include your name,
your organization name, contact information (such as a phone number and/or e-mail address) as well as
the URL of your site, a list of any URLs from which you intend to link to our Site, and a list of the URL(s)
on our site to which you would like to link. Allow 2-3 weeks for a response. We may approve such link
requests in our sole discretion. Once approved by HILINK, the above organizations may link to our home
page, or to HILINK publications or other Site information so long as the link:
`}
          </Typography>
        </Box>

        {/* ul list */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(a) is not in any way misleading,`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
products or services, and
`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(c) fits within the context of the linking party’s site.
`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              Permitted Hyperlink Activities.
            </strong>{" "}
            {`  Approved organizations may hyperlink to our Site as follows:
`}
          </Typography>
        </Box>

        {/* ul list */}
        <Box sx={{ margin: "1% 0" }}>
          <ul>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(a) by use of our corporate name;`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(b) by use of the URL Web address being linked to; or`}</Typography>
            </li>
            <li style={{ paddingLeft: "15px", marginTop: "15px" }}>
              <Typography variant="subtitle1">{`(c) by use of any other description of our Site or material being linked to that makes sense within
the context and format of content on the linking party’s site. Notwithstanding the foregoing, no use
of HILINK’s logo or other artwork is permitted for linking absent an executed trademark license
agreement with HILINK. HILINK reserves the right at any time and in its sole discretion to request
`}</Typography>
            </li>
          </ul>
        </Box>
        {/* ul list  */}

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>
              Permitted Hyperlink Activities.
            </strong>{" "} */}
            {`  Term and Termination
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Term.</strong>{" "}
            {`The term of Agreement commences when you access the Services by any means and will continue
in effect until terminated by you when you cancel your Account, or by us as set forth below. You may
terminate this Agreement by canceling your Account through your account settings or by sending us an
email at support@hilink.vip.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Termination by HILINK.</strong>{" "}
            {` We may suspend or cancel your Account without notice to you if you violate this
Agreement, or for any reason at all. If your Account is canceled, we reserve the right to remove your
account information along with any of your account settings from our servers with NO liability or notice to
you. Once your account information and account settings are removed, you will not be able to recover this
data and you will lose access to your Account and all of your User Content.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>Effect of Termination.</strong>{" "}
            {`  Upon termination, your license to use our Services terminates and you must
cease all use of the Services. All provisions of this Agreement that by their nature should survive
termination shall survive termination, including, without limitation, ownership provisions, warranty
disclaimers, indemnity, limitations of liability, and arbitration. You acknowledge and understand that our
rights regarding any User Content you submitted to the Services before your Account was terminated
shall survive termination. For the avoidance of doubt, we may retain User Content in our backups,
archives and disaster recovery systems until such User Content is deleted in the ordinary course of
business. Termination will not limit any of HILINK’s rights or remedies at law or in equity.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              DISCLAIMER OF WARRANTIES -
            </strong>{" "}
            {`  THE SERVICES AND ALL INFORMATION CONTAINED HEREIN
ARE PROVIDED ON AN “AS IS” BASIS WITHOUT ANY WARRANTIES OF ANY KIND.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Disclaimer of Content.</strong>{" "}
            {` HILINK acts as a content host where Users contribute User Content. Accordingly,
HILINK does not control and is not responsible for the User Content posted or submitted through the
Services and HILINK does not guarantee the accuracy, integrity, quality or appropriateness of any User
Content transmitted to or through the Services. All User Content posted on the Services is the sole
responsibility of the person from whom such User Content originated. HILINK may, but has no obligation
to screen, preview, monitor, or approve any User Content posted or submitted to the Services. Under no
circumstances will HILINK be liable in any way for any User Content`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Disclaimer of Actions of Users.
            </strong>{" "}
            {` HILINK does not endorse and is not responsible or liable for any
Events, products or services, including but not limited to Event tickets, available or unavailable from, or
promoted through, the Services. Your dealings with any other User, and any other terms, conditions,
representations or warranties associated with such dealings, are between you and such User exclusively
and do not involve HILINK. You should make whatever investigation or other resources that you deem
necessary or appropriate before purchasing from other Members. HILINK is not responsible for the
accessibility or unavailability of any User. YOU WAIVE THE RIGHT TO BRING OR ASSERT ANY CLAIM
AGAINST HILINK RELATING TO ANY INTERACTIONS OR DEALINGS WITH ANY OTHER USER AND
RELEASE HILINK FROM ANY AND ALL LIABILITY FOR OR RELATING TO ANY INTERACTIONS OR
DEALINGS WITH OTHER USERS.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Disclaimer of Warranties.
            </strong>{" "}
            {`  THE SERVICES ARE PROVIDED TO USERS “AS IS” AND WITH ALL
FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT
PERMITTED UNDER APPLICABLE LAW, HILINK, ON ITS OWN BEHALF AND ON BEHALF OF ITS
AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS, EXPRESSLY DISCLAIMS ALL
WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO
THE SERVICES, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE, TITLE, SATISFACTORY QUALITY, SECURITY, ACCURACY, AVAILABILITY,
AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING,
COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT LIMITATION TO THE
FOREGOING, HILINK PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO
REPRESENTATION OF ANY KIND THAT THE SERVICES WILL MEET YOUR REQUIREMENTS,
ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE,
APPLICATIONS, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY
PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE, OR THAT ANY ERRORS OR
DEFECTS CAN OR WILL BE CORRECTED. ANY MATERIAL, CONTENT, OR INFORMATION
DOWNLOADED OR OTHERWISE OBTAINED AND/OR USED THROUGH THE SERVICES IS DONE AT
YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
DAMAGE TO YOUR COMPUTER SYSTEM, DEVICE, OR LOSS OF DATA THAT RESULTS FROM THE
DOWNLOAD OF ANY SUCH MATERIAL, CONTENT OR INFORMATION. NO INFORMATION,
WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM HILINK SHALL CREATE ANY
WARRANTY NOT EXPRESSLY STATED IN THIS AGREEMENT. YOU AGREE THAT USE OF THE
SERVICES IS AT YOUR OWN RISK AND THAT HILINK ASSUMES NO RESPONSIBILITY OR
LIABILITY FOR THE TRUTHFULNESS, ACCURACY, TIMELINESS OR COMPLETION OF THE
CONTENT OR FAILURE BY THE SERVICES. SOME JURISDICTIONS DO NOT ALLOW THE
EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON THE
APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE
EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.

`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>
              {" "}
              Disclaimer of Warranties.
            </strong>{" "} */}
            {`  LIMITATION OF LIABILITY`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Limitation of Liability.</strong>{" "}
            {`TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU HEREBY
RELEASE HILINK OR ITS AFFILIATES OR SUBSIDIARIES, OR ANY OF THEIR RESPECTIVE
OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, CONSULTANTS,
SUCCESSORS, AND ASSIGNS, FROM ALL LIABILITY ASSOCIATED WITH YOUR USE OF THE
SERVICES. IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE
SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE
DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW
OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND
THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER
SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.”
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {/* <strong style={{ color: orange }}> Limitation of Liability.</strong>{" "} */}
            {`EXCEPT AS OTHERWISE SPECIFICALLY PROVIDED IN NO EVENT SHALL HILINK, NOR ITS
AFFILIATES OR SUBSIDIARIES, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS,
EMPLOYEES, AGENTS, REPRESENTATIVES, CONSULTANTS, SUCCESSORS, AND ASSIGNS, BE
LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR
EQUITABLE THEORY WITH RESPECT TO THE SERVICES (I) FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER,
ARISING OUT OF OR IN ANY WAY RELATED TO YOUR USE OF THE SERVICES (INCLUDING BUT
NOT LIMITED TO PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, LOSS OF DATA, LOSS
OF GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE, SYSTEM FAILURE, FAILURE TO
STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED OR TRANSMITTED BY THE
SERVICES, THE COST OF SUBSTITUTE GOODS OR SERVICES, OR ATTORNEYS FEES AND
COSTS), (II) FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE
SOURCE OF ORIGINATION), OR (III) ANY DIRECT DAMAGES IN EXCESS OF THE GREATER OF (IN
THE AGGREGATE) ONE HUNDRED U.S. DOLLARS ($100.00) OR THE AMOUNT OF FEES PAID BY
OR TO YOU, AS APPLICABLE, THROUGH THE SERVICES DURING THE TWELVE (12) MONTH
PERIOD PRIOR TO THE DATE THE CLAIM AROSE. SOME STATES OR COUNTRIES DO NOT
ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO
THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU. IN THESE
JURISDICTIONS, HILINK LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY
LAW.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Indemnification. </strong>{" "}
            {`You agree to indemnify, defend, and hold harmless HiLink (including our affiliates and
subsidiaries, as well as our and their respective officers, directors, employees, agents, representatives,
consultants, successors, and assigns) from and against any and all losses, damages, liabilities,
deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or
expenses of whatever kind, including reasonable attorneys’ fees, arising from or relating to your use or
misuse of the Service or your breach of this Agreement, including but not limited to your breach of any
law or the rights of a third party or, with respect to Curators, any failure to acquire or maintain the proper
Authorizations as applicable.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            <strong style={{ color: orange }}>
              {" "}
              Dispute Resolution and Arbitration Provision:{" "}
            </strong>{" "}
            {` PLEASE READ THIS SECTION CAREFULLY – IT
MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A
LAWSUIT IN COURT`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Initial Dispute Resolution.{" "}
            </strong>{" "}
            {` For any problem or dispute that you may have with us, you understand and
agree that you will first give us an opportunity to resolve your problem or dispute. In order to initiate this
dispute resolution process, you agree that you shall first send us a written description of your problem or
dispute within thirty (30) days of the occurrence of the event giving rise to the problem or dispute by
sending an email to: support@hilink.vip or by mail to the address listed below. You then agree to
negotiate with us in good faith about your problem or dispute for sixty (60) days. This should lead to
resolution, but if for some reason your problem or dispute is not resolved satisfactorily within sixty (60)
days after our receipt of your written description of it, you agree to the arbitration provisions below.
`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Binding Arbitration. </strong>{" "}
            {` If the parties do not reach an agreed-upon solution under the Initial Dispute
Resolution provision, then either party may initiate binding arbitration as the sole means to resolve claims,
subject to the terms set forth below. Specifically, all claims arising out of or relating to this Agreement
(including formation, performance, and breach), the parties’ relationship with each other and/or your use
of the Services shall be finally settled by binding arbitration administered by the American Arbitration
Association in accordance with the provisions of its Commercial Arbitration Rules and the supplementary
procedures for consumer-related disputes of the American Arbitration Association (the “AAA”), excluding
any rules or procedures governing or permitting class actions. The Commercial Arbitration Rules
governing the arbitration may be accessed at`}{" "}
            <a
              href="#"
              style={{
                textDecoration: `underline solid ${orange}`,
                color: orange,
                cursor: "pointer",
              }}
            >
              www.adr.org
            </a>{" "}
            {`or by calling the AAA at +1.800.778.7879. The
arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to resolve all
disputes arising out of or relating to the interpretation, applicability, enforceability, or formation of this
Agreement, including, but not limited to any claim that all or any part of this Agreement are void or
voidable, or whether a claim is subject to arbitration. The arbitrator shall be empowered to grant whatever
relief would be available in a court under law or in equity. The arbitration rules also permit you to recover
attorney’s fees in certain cases. The arbitrator’s award shall be written and binding on the parties and
may be entered as a judgment in any court of competent jurisdiction. The parties understand that, absent
this mandatory provision, they would have the right to sue in court and have a jury trial. They further
understand that, in some instances, the costs of arbitration could exceed the costs of litigation and the
right to discovery may be more limited in arbitration than in court.`}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Location. </strong>{" "}
            {` The arbitration will take place in Atlanta, Georgia`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Class Action Waiver. </strong>{" "}
            {` The parties further agree that any arbitration shall be conducted in their individual
capacities only and not as a class action or other representative action, and the parties expressly waive
their right to file a class action or seek relief on a class basis. YOU AND HILINK AGREE THAT EACH
MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND
NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
PROCEEDING. If any court or arbitrator determines that the class action waiver set forth in this paragraph
is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the
arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be
deemed to have not agreed to arbitrate disputes.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Exceptions – Litigation of Intellectual Property and Small Claims
              Court Claims.
            </strong>{" "}
            {`   Notwithstanding the
parties’ decision to resolve all disputes through arbitration, either party may bring an action in state or
federal court to protect its intellectual property rights (“intellectual property rights” means patents,
copyrights, moral rights, trademarks, and trade secrets, but not privacy or publicity rights). Either party
may also seek relief in a small claims court for disputes or claims within the scope of that court’s
jurisdiction.

`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> 30-Day Right to Opt-Out.</strong>{" "}
            {`  You have the right to opt-out and not be bound by the arbitration and class
action waiver provisions set forth above by sending written notice of your decision to opt-out to us at
support@hilink.vip. The notice must be sent within thirty (30) days of your first use of the Services,
otherwise, you shall be bound to arbitrate disputes in accordance with the terms of those paragraphs. If
you opt-out of these arbitration provisions, we also will not be bound by them.`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Changes to this Section.{" "}
            </strong>{" "}
            {`We will provide thirty (30) days’ notice of any changes to this section. Changes
will become effective on the 30th day, and will apply prospectively only to any claims arising after the 30th
day. The Agreement and the relationship between you and HiLink shall be governed by the laws of the
State of Georgia without regard to conflict of law provisions.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}>
              {" "}
              Changes to this Section.{" "}
            </strong>{" "} */}
            {`Miscellaneous`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Assignment. </strong>{" "}
            {` This Agreement is personal to User, and you may not assign, transfer, sub-license,
sub-contract, charge or otherwise encumber any of your rights or obligations under this Agreement
without the prior written consent of HiLink. HiLink may assign, transfer, or delegate any of its rights and
obligations hereunder without your consent. Any attempted assignment in violation of this Section 13.1
shall be null and void.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Entire Agreement. </strong>{" "}
            {` This Agreement, and all terms and policies posted through our Services, including our
Privacy Policy and any applicable Supplemental Terms, constitutes the entire agreement between you
and HiLink with respect to the Services, and supersedes all prior or contemporaneous understandings
and agreements of the parties, whether written or oral, with respect to the Services.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Geographic Restrictions.{" "}
            </strong>{" "}
            {`The Services are based in the state of New York in the United States and
provided for access and use only by persons located in the United States. You acknowledge that you may
not be able to access the Services outside of the United States and that access thereto may not be legal
by certain persons or in certain countries. If you access the Services from outside the United States, you
are responsible for compliance with local laws.`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Governing Law and Jurisdiction.{" "}
            </strong>{" "}
            {` This Agreement is governed by and construed in accordance with the
internal laws of the State of New York without giving effect to any choice or conflict of law provision or
rule. Any legal suit, action, or proceeding arising out of or related to this Agreement or the Application
shall be instituted exclusively in the federal courts of the United States or the courts of the State of New
York in each case located in New York City, New York. You waive any and all objections to the exercise of
jurisdiction over you by such courts and to venue in such courts.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Modification.</strong>{" "}
            {`  We reserve the right, at our sole discretion, to amend, modify or replace this Agreement,
including the Privacy Policy or any Supplemental Terms, at any time. The most current version of this
Agreement (with the revision date stated) will be made available through the Site. In the event that we
make material changes to the Agreement, we will notify you by displaying a prominent notice on the Site
or by sending an email to the email address affiliated with your Account. Updated versions of the
Agreement will never apply retroactively and the updated Agreement will give the exact date they go into
effect. It is your responsibility to check the Site periodically for changes to the Agreement. Use of the
Services by you following any modification to the Agreement constitutes your acceptance of the
Agreement as modified. Without limiting our ability to refuse, modify, or terminate all or part of our
Services, we may also terminate this Agreement at any time for any reason, at our sole discretion, by
giving notice of such termination.

`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}>
              {" "}
              Relationship of the Parties.
            </strong>{" "}
            {`  Becoming a User of our Services does not create an agency, employment,
joint venture, franchise, or partnership relationship between you and HiLink.`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Severability.</strong>{" "}
            {` If any provision of this Agreement is illegal or unenforceable under applicable law, the
remainder of the provision will be amended to achieve as closely as possible the effect of the original term
and all other provisions of this Agreement will continue in full force and effect.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Supplemental Terms. </strong>{" "}
            {`Your use of the Services may be subject to additional terms and conditions, such
as a set of terms that apply to a specific promotion or line of services, which may be modified from time to
time (“Supplemental Terms”). Supplemental Terms are in addition to, and shall be deemed a part of, this
Agreement. In the event of a conflict between the Supplemental Terms and this Agreement, the
Supplemental Terms shall prevail solely to the extent of such conflict.`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Waiver.</strong>{" "}
            {` No failure to exercise, and no delay in exercising, on the part of either party, any right or any
power hereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any right or
power hereunder preclude further exercise of that or any other right hereunder. In the event of a conflict
between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall
govern.
`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> Contact.</strong>{" "}
            {` If you have any questions about this Agreement, or feedback, comments, requests for technical
support, and other communications related to the Services, please contact us at support@hilink.vip or at
the address set forth below.`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "2% 0" }}>
          <Typography variant="h4">
            {/* <strong style={{ color: orange }}> Contact.</strong>{" "} */}
            {`SMS Terms`}{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            <strong style={{ color: orange }}> SMS Notification.</strong>{" "}
            {` If opted in upon sign up, we will alert you via text about receipts and other HiLink
important event-related messages at the phone number provided. Message and data rates may apply.
Message frequency varies. Text HELP for help. Text STOP to unsubscribe.`}{" "}
          </Typography>
        </Box>
        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {` HiLink is an event ticketing platform. You will receive alerts, receipts, and other important event-related
messages via SMS. You can cancel the SMS service at any time. Just text "STOP" to the short code.
After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you
have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join
again, just sign up as you did the first time and we will start sending SMS messages to you again.`}{" "}
          </Typography>
        </Box>
        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {`If you are experiencing issues with the messaging program you can reply with the keyword HELP for
more assistance, or you can get help directly at support@hilink.vip.`}{" "}
          </Typography>
        </Box>
        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {`Carriers are not liable for delayed or undelivered messages.`}{" "}
          </Typography>
        </Box>
        <Box sx={{ margin: "1% 0" }}>
          <Typography variant="subtitle1">
            {`As always, message and data rates may apply for any messages sent to you from us and to us from you.
Message frequency varies. If you have any questions about your text plan or data plan, it is best to
contact your wireless provider.`}{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
