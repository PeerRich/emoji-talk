import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import {useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

function ResponsiveDialogMenu(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div>
    <span onClick={handleClickOpen}>
      {props.menuTitle}
    </span>
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby={props.title}
    >
      <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <div>
    <IconButton edge="end" color="inherit" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
      <MoreIcon/>
    </IconButton>
    <Menu
    id="fade-menu"
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
    >
      <MenuItem onClick={handleClose}>
        <a target="_blank" style={{color: "inherit", textDecoration: "none"}} href="#">
          About
        </a>
      </MenuItem>
      {/*
      <MenuItem onClick={handleClose}>
        <a target="_blank" style={{color: "inherit", textDecoration: "none"}} href="#">
          Settings
        </a>
      </MenuItem>
      */}
      <MenuItem onClick={handleClose}>
        <ResponsiveDialogMenu
        menuTitle="Open Source License"
        title="Open Source License"
        content={<code>
          THE FOLLOWING SETS FORTH ATTRIBUTION NOTICES FOR THIRD PARTY SOFTWARE THAT MAY BE CONTAINED IN THIS
          APPLICATION.<br/><br/>

          =====<br/><br/>

          <strong>Libraries licensed under BSD 2-Clause License:</strong><br/>

          <ul>
            <li>
              <strong>Daily.co Daily.js</strong><br/>
              Copyright (c) 2019, daily-co<br/>
            </li>
          </ul>

          All rights reserved.<br/><br/>

          Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are met:<br/><br/>

          * Redistributions of source code must retain the above copyright notice, this
          list of conditions and the following disclaimer.<br/><br/>

          * Redistributions in binary form must reproduce the above copyright notice,
          this list of conditions and the following disclaimer in the documentation
          and/or other materials provided with the distribution.<br/><br/>

          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
          AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
          IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
          DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
          FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
          DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
          SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
          CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
          OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
          OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br/><br/>


          <strong>Libraries licensed under MIT:</strong><br/>
          <ul>
            <li>
              <strong>React</strong><br/>
              Copyright (c) Facebook, Inc. and its affiliates.
            </li>
            <li>
              <strong>Material-UI</strong><br/>
              Copyright (c) 2014 Call-Em-All
            </li>
            <li>
              <strong>emoji-mart</strong><br/>
              Copyright (c) 2016, Missive
            </li>
            <li>
              <strong>react-web-share-api</strong><br/>
              Copyright (c) 2017-present, Marco Lanaro
            </li>
            <li>
              <strong>Twemoji</strong><br/>
              Copyright (c) 2018 Twitter, Inc and other contributors
            </li>
            <li>
              <strong>react-copy-to-clipboard</strong><br/>
              Copyright (c) 2016 Nik Butenko
            </li>
          </ul>

          MIT <br/><br/>

          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
          documentation files (the "Software"), to deal in the Software without restriction, including without
          limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
          Software, and to permit persons to whom the Software is furnished to do so, subject to the following
          conditions:<br/><br/>

          The above copyright notice and this permission notice shall be included in all copies or substantial portions
          of the Software.<br/><br/>

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
          TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
          THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
          CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
          DEALINGS IN THE SOFTWARE.<br/><br/>

          <strong>Libraries licensed under Apache License:</strong><br/>

          <ul>
            <li><strong>Firebase</strong></li>
            <li><strong>Typescript</strong></li>
          </ul>

          Apache License<br/>
          Version 2.0, January 2004<br/>
          http://www.apache.org/licenses/<br/>

          TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION<br/><br/>

          1. Definitions.<br/><br/>

          "License" shall mean the terms and conditions for use, reproduction,
          and distribution as defined by Sections 1 through 9 of this document.<br/><br/>

          "Licensor" shall mean the copyright owner or entity authorized by
          the copyright owner that is granting the License.<br/><br/>

          "Legal Entity" shall mean the union of the acting entity and all
          other entities that control, are controlled by, or are under common
          control with that entity. For the purposes of this definition,
          "control" means (i) the power, direct or indirect, to cause the
          direction or management of such entity, whether by contract or
          otherwise, or (ii) ownership of fifty percent (50%) or more of the
          outstanding shares, or (iii) beneficial ownership of such entity.<br/><br/>

          "You" (or "Your") shall mean an individual or Legal Entity
          exercising permissions granted by this License.<br/><br/>

          "Source" form shall mean the preferred form for making modifications,
          including but not limited to software source code, documentation
          source, and configuration files.<br/><br/>

          "Object" form shall mean any form resulting from mechanical
          transformation or translation of a Source form, including but
          not limited to compiled object code, generated documentation,
          and conversions to other media types.<br/><br/>

          "Work" shall mean the work of authorship, whether in Source or
          Object form, made available under the License, as indicated by a
          copyright notice that is included in or attached to the work
          (an example is provided in the Appendix below).<br/><br/>

          "Derivative Works" shall mean any work, whether in Source or Object
          form, that is based on (or derived from) the Work and for which the
          editorial revisions, annotations, elaborations, or other modifications
          represent, as a whole, an original work of authorship. For the purposes
          of this License, Derivative Works shall not include works that remain
          separable from, or merely link (or bind by name) to the interfaces of,
          the Work and Derivative Works thereof.<br/><br/>

          "Contribution" shall mean any work of authorship, including
          the original version of the Work and any modifications or additions
          to that Work or Derivative Works thereof, that is intentionally
          submitted to Licensor for inclusion in the Work by the copyright owner
          or by an individual or Legal Entity authorized to submit on behalf of
          the copyright owner. For the purposes of this definition, "submitted"
          means any form of electronic, verbal, or written communication sent
          to the Licensor or its representatives, including but not limited to
          communication on electronic mailing lists, source code control systems,
          and issue tracking systems that are managed by, or on behalf of, the
          Licensor for the purpose of discussing and improving the Work, but
          excluding communication that is conspicuously marked or otherwise
          designated in writing by the copyright owner as "Not a Contribution."<br/><br/>

          "Contributor" shall mean Licensor and any individual or Legal Entity
          on behalf of whom a Contribution has been received by Licensor and
          subsequently incorporated within the Work.<br/><br/>

          2. Grant of Copyright License. Subject to the terms and conditions of
          this License, each Contributor hereby grants to You a perpetual,
          worldwide, non-exclusive, no-charge, royalty-free, irrevocable
          copyright license to reproduce, prepare Derivative Works of,
          publicly display, publicly perform, sublicense, and distribute the
          Work and such Derivative Works in Source or Object form.<br/><br/>

          3. Grant of Patent License. Subject to the terms and conditions of
          this License, each Contributor hereby grants to You a perpetual,
          worldwide, non-exclusive, no-charge, royalty-free, irrevocable
          (except as stated in this section) patent license to make, have made,
          use, offer to sell, sell, import, and otherwise transfer the Work,
          where such license applies only to those patent claims licensable
          by such Contributor that are necessarily infringed by their
          Contribution(s) alone or by combination of their Contribution(s)
          with the Work to which such Contribution(s) was submitted. If You
          institute patent litigation against any entity (including a
          cross-claim or counterclaim in a lawsuit) alleging that the Work
          or a Contribution incorporated within the Work constitutes direct
          or contributory patent infringement, then any patent licenses
          granted to You under this License for that Work shall terminate
          as of the date such litigation is filed.<br/><br/>

          4. Redistribution. You may reproduce and distribute copies of the
          Work or Derivative Works thereof in any medium, with or without
          modifications, and in Source or Object form, provided that You
          meet the following conditions:<br/><br/>

          (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and<br/><br/>

          (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and<br/><br/>

          (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and<br/><br/>

          (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.<br/><br/>

          You may add Your own copyright statement to Your modifications and
          may provide additional or different license terms and conditions
          for use, reproduction, or distribution of Your modifications, or
          for any such Derivative Works as a whole, provided Your use,
          reproduction, and distribution of the Work otherwise complies with
          the conditions stated in this License.<br/><br/>

          5. Submission of Contributions. Unless You explicitly state otherwise,
          any Contribution intentionally submitted for inclusion in the Work
          by You to the Licensor shall be under the terms and conditions of
          this License, without any additional terms or conditions.
          Notwithstanding the above, nothing herein shall supersede or modify
          the terms of any separate license agreement you may have executed
          with Licensor regarding such Contributions.<br/><br/>

          6. Trademarks. This License does not grant permission to use the trade
          names, trademarks, service marks, or product names of the Licensor,
          except as required for reasonable and customary use in describing the
          origin of the Work and reproducing the content of the NOTICE file.<br/><br/>

          7. Disclaimer of Warranty. Unless required by applicable law or
          agreed to in writing, Licensor provides the Work (and each
          Contributor provides its Contributions) on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
          implied, including, without limitation, any warranties or conditions
          of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
          PARTICULAR PURPOSE. You are solely responsible for determining the
          appropriateness of using or redistributing the Work and assume any
          risks associated with Your exercise of permissions under this License.<br/><br/>

          8. Limitation of Liability. In no event and under no legal theory,
          whether in tort (including negligence), contract, or otherwise,
          unless required by applicable law (such as deliberate and grossly
          negligent acts) or agreed to in writing, shall any Contributor be
          liable to You for damages, including any direct, indirect, special,
          incidental, or consequential damages of any character arising as a
          result of this License or out of the use or inability to use the
          Work (including but not limited to damages for loss of goodwill,
          work stoppage, computer failure or malfunction, or any and all
          other commercial damages or losses), even if such Contributor
          has been advised of the possibility of such damages.<br/><br/>

          9. Accepting Warranty or Additional Liability. While redistributing
          the Work or Derivative Works thereof, You may choose to offer,
          and charge a fee for, acceptance of support, warranty, indemnity,
          or other liability obligations and/or rights consistent with this
          License. However, in accepting such obligations, You may act only
          on Your own behalf and on Your sole responsibility, not on behalf
          of any other Contributor, and only if You agree to indemnify,
          defend, and hold each Contributor harmless for any liability
          incurred by, or claims asserted against, such Contributor by reason
          of your accepting any such warranty or additional liability.<br/><br/>

          END OF TERMS AND CONDITIONS<br/><br/>

          APPENDIX: How to apply the Apache License to your work.<br/><br/>

          To apply the Apache License to your work, attach the following
          boilerplate notice, with the fields enclosed by brackets "[]"
          replaced with your own identifying information. (Don't include
          the brackets!) The text should be enclosed in the appropriate
          comment syntax for the file format. We also recommend that a
          file or class name and description of purpose be included on the
          same "printed page" as the copyright notice for easier
          identification within third-party archives.<br/><br/>

          Copyright [yyyy] [name of copyright owner]<br/><br/>

          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at<br/><br/>

          http://www.apache.org/licenses/LICENSE-2.0<br/><br/>

          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.<br/><br/>

        </code>}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ResponsiveDialogMenu
        menuTitle="Terms of Service"
        title="Terms of Service"
        content={<div>
          <p>Last updated:&nbsp;04/05/2020</p>
          <ul>
            <li><strong>Introduction</strong></li>
          </ul>
          <p>Welcome to&nbsp;<strong>EmojiTalkie</strong>&nbsp;(<strong>we</strong>&rdquo;, &ldquo;
            <strong>our</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;)! As you have just clicked to our Terms of
            Service, please make a pause, grab a cup of coffee and carefully read the following pages. It will take you
            approximately 20&nbsp;minutes.</p>
          <p>These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;, &ldquo;<strong>Terms of
            Service</strong>&rdquo;) govern your use of&nbsp;our web pages located at
            https://emojitalkie.com</p>
          <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose
            information that results from your use of our web pages.</p>
          <p>Your agreement with us includes these Terms&nbsp;and our Privacy Policy&nbsp;(&ldquo;
            <strong>Agreements</strong>&rdquo;). You acknowledge that you have read and understood Agreements, and agree
            to be bound of them.</p>
          <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please
            let us know by emailing at info@emojitalkie.com so we can try to find a solution. These Terms apply to all
            visitors, users and others who wish to access or use Service.</p>
          <p>Thank you for being responsible.</p>
          <ul>
            <li><strong>Content</strong></li>
          </ul>
          <p>Content found on or through this Service are the property of&nbsp;EmojiTalkie&nbsp;or used with permission.
            You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in
            whole or in part, for commercial purposes or for personal gain, without express advance written permission
            from us.</p>
          <ul>
            <li><strong>Prohibited Uses</strong></li>
          </ul>
          <p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use
            Service:</p>
          <ul>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing
                them to inappropriate content or otherwise.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including
                any &ldquo;junk mail&rdquo;, &ldquo;chain letter,&rdquo; &ldquo;spam,&rdquo; or any other similar
                solicitation.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>To impersonate or attempt to impersonate EmojiTalkie, a EmojiTalkie employee, another user, or any
                other person or entity.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening,
                fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or
                activity.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>To engage in any other conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of Service,
                or which, as determined by us, may harm or offend EmojiTalkie or users of Service or expose them to
                liability.
              </li>
            </ul>
          </ul>
          <p>Additionally, you agree not to:</p>
          <ul>
            <ul>
              <li>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with
                any other party&rsquo;s use of Service, including their ability to engage in real time activities
                through Service.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose,
                including monitoring or copying any of the material on Service.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized
                purpose without our prior written consent.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Use any device, software, or routine that interferes with the proper working of Service.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or
                technologically harmful.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the
                server on which Service is stored, or any server, computer, or database connected to Service.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Take any action that may damage or falsify EmojiTalkie rating.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Otherwise attempt to interfere with the proper working of Service.</li>
            </ul>
          </ul>
          <ul>
            <li><strong>Analytics</strong></li>
          </ul>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <p><strong>Google Analytics</strong></p>
          <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
            Google uses the data collected to track and monitor the use of our Service. This data is shared with other
            Google services. Google may use the collected data to contextualise and personalise the ads of its own
            advertising network.</p>
          <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a
          href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
          <p>We also encourage you to review the Google's policy for safeguarding your data: <a
          href="https://support.google.com/analytics/answer/6004245">https://support.google.com/analytics/answer/6004245</a>.
          </p>
          <p><strong>Firebase</strong></p>
          <p>Firebase is analytics service provided by Google Inc.</p>
          <p>You may opt-out of certain Firebase features through your mobile device settings, such as your device
            advertising settings or by following the instructions provided by Google in their Privacy Policy: <a
            href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
          <p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms
            web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>
          </p>
          <ul>
            <li><strong>No Use By Minors</strong></li>
          </ul>
          <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing
            or using any of EmojiTalkie, you warrant and represent that you are at least eighteen (18) years of age and
            with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and
            conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the
            access and usage of Service.</p>
          <ul>
            <li><strong>Accounts</strong></li>
          </ul>
          <p>When you create an account with us, you guarantee that you are above the age of 18, and that the
            information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your account on Service.</p>
          <p>You are responsible for maintaining the confidentiality of your account and password, including but not
            limited to the restriction of access to your computer and/or account. You agree to accept responsibility for
            any and all activities or actions that occur under your account and/or password, whether your password is
            with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach
            of security or unauthorized use of your account.</p>
          <p>You may not use as a username the name of another person or entity or that is not lawfully available for
            use, a name or trademark that is subject to any rights of another person or entity other than you, without
            appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>
          <p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our
            sole discretion.</p>
          <ul>
            <li><strong>Intellectual Property</strong></li>
          </ul>
          <p>Service and its original content (excluding Content provided by users), features and functionality are and
            will remain the exclusive property of&nbsp;EmojiTalkie&nbsp;and its licensors. Service is protected by
            copyright, trademark, and other laws of&nbsp;the United States and foreign countries. Our trademarks and
            trade dress may not be used in connection with any product or service without the prior written consent
            of&nbsp;EmojiTalkie.</p>
          <ul>
            <li><strong>Error Reporting and Feedback</strong></li>
          </ul>
          <p>You may provide us&nbsp;directly at info@emojitalkie.com&nbsp;with information and feedback concerning
            errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service
            (&ldquo;<strong>Feedback</strong>&rdquo;). You acknowledge and agree that: (i) you shall not retain, acquire
            or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii)
            EmojiTalkie may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential
            information or proprietary information from you or any third party; and (iv) EmojiTalkie is not under any
            obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to
            the Feedback is not possible due to applicable mandatory laws, you grant EmojiTalkie and its affiliates an
            exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use
            (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any
            manner and for any purpose.</p>
          <ul>
            <li><strong>Links To Other Web Sites</strong></li>
          </ul>
          <p>Our Service may contain links to third party web sites or services that are not owned or controlled
            by&nbsp;EmojiTalkie.</p>
          <p>EmojiTalkie&nbsp;has no control over, and assumes no responsibility for the content, privacy policies, or
            practices of any third party web sites or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.</p>
          <p>YOU ACKNOWLEDGE AND AGREE THAT&nbsp;EmojiTalkie&nbsp;SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR
            INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR
            RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR
            SERVICES.</p>
          <p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR
            SERVICES THAT YOU VISIT.</p>
          <ul>
            <li><strong>Disclaimer Of Warranty </strong></li>
          </ul>
          <p>THESE SERVICES ARE PROVIDED BY EMOJITALKIE ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
            EMOJITALKIE MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF
            THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE
            OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
          <p>NEITHER EMOJITALKIE NOR ANY PERSON ASSOCIATED WITH EMOJITALKIE MAKES ANY WARRANTY OR REPRESENTATION WITH
            RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
            WITHOUT LIMITING THE FOREGOING, NEITHER EMOJITALKIE NOR ANYONE ASSOCIATED WITH EMOJITALKIE REPRESENTS OR
            WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
            ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE
            SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY
            SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
          <p>EMOJITALKIE HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR
            OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE.</p>
          <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
          <ul>
            <li><strong>Termination</strong></li>
          </ul>
          <p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
            limited to a breach of Terms.</p>
          <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
          <p>All provisions of Terms which by their nature should survive termination shall survive termination,
            including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
            liability.</p>
          <ul>
            <li><strong>Governing Law</strong></li>
          </ul>
          <p>These Terms shall be governed and construed in accordance with the laws of&nbsp;Germany&nbsp;without regard
            to its conflict of law provisions.</p>
          <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
            regarding our Service and supersede and replace any prior agreements we might have had between us regarding
            Service.</p>
          <ul>
            <li><strong>Changes To Service</strong></li>
          </ul>
          <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service,
            in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is
            unavailable at any time or for any period. From time to time, we may restrict access to some parts of
            Service, or the entire Service, to users, including registered users.</p>
          <ul>
            <li><strong>Amendments To Terms</strong></li>
          </ul>
          <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to
            review these Terms periodically.</p>
          <p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree
            to the changes. You are expected to check this page frequently so you are aware of any changes, as they are
            binding on you.</p>
          <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>
          <ul>
            <li><strong>Waiver And Severability</strong></li>
          </ul>
          <p>No waiver by EmojiTalkie of any term or condition set forth in Terms shall be deemed a further or
            continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of
            EmojiTalkie to assert a right or provision under Terms shall not constitute a waiver of such right or
            provision.</p>
          <p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid,
            illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent
            such that the remaining provisions of Terms will continue in full force and effect.</p>
          <ul>
            <li><strong>Acknowledgement</strong></li>
          </ul>
          <p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF
            SERVICE AND AGREE TO BE BOUND BY THEM.</p>
          <ul>
            <li><strong>Contact Us</strong></li>
          </ul>
          <p>Please send your feedback, comments, requests for technical support:</p>
          <p>By email: info@emojitalkie.com.</p>
        </div>
        }/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ResponsiveDialogMenu
        menuTitle="Privacy Policy"
        title="Privacy Policy"
        content={<div>
          <p>Effective date: 04/05/2020</p>
          <ul>
            <li><strong>Introduction</strong></li>
          </ul>
          <p>Welcome to&nbsp;<strong>EmojiTalkie</strong>.</p>
          <p>EmojiTalkie&nbsp;(&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;)
            operates&nbsp;https://emojitalkie.com&nbsp;(hereinafter referred to as &ldquo;
            <strong>Service</strong>&rdquo;).</p>
          <p>Our Privacy Policy governs your visit to&nbsp;https://emojitalkie.com, and explains how we collect,
            safeguard and disclose information that results from your use of our Service. </p>
          <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of
            information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used
            in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
          <p>Our Terms and Conditions (&ldquo;<strong>Terms</strong>&rdquo;) govern all use of our Service and together
            with the Privacy Policy constitutes your agreement with us (&ldquo;<strong>agreement</strong>&rdquo;).</p>
          <ul>
            <li><strong>Definitions</strong></li>
          </ul>
          <p><strong>SERVICE&nbsp;</strong>means the&nbsp;https://emojitalkie.com website&nbsp;operated
            by&nbsp;EmojiTalkie.</p>
          <p><strong>PERSONAL DATA</strong>&nbsp;means data about a living individual who can be identified from those
            data (or from those and other information either in our possession or likely to come into our possession).
          </p>
          <p><strong>USAGE DATA</strong>&nbsp;is data collected automatically either generated by the use of Service or
            from Service infrastructure itself (for example, the duration of a page visit).</p>
          <p><strong>COOKIES</strong>&nbsp;are small files stored on your device (computer or mobile device).</p>
          <p><strong>DATA CONTROLLER</strong>&nbsp;means a natural or legal person who (either alone or jointly or in
            common with other persons) determines the purposes for which and the manner in which any personal data are,
            or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
          <p><strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong>&nbsp;means any natural or legal person who
            processes the data on behalf of the Data Controller. We may use the services of various Service Providers in
            order to process your data more effectively.</p>
          <p><strong>DATA SUBJECT&nbsp;</strong>is any living individual who is the subject of Personal Data.</p>
          <p><strong>THE USER&nbsp;</strong>is the individual using our Service. The User corresponds to the Data
            Subject, who is the subject of Personal Data.</p>
          <ul>
            <li><strong>Information Collection and Use</strong></li>
          </ul>
          <p>We collect several different types of information for various purposes to provide and improve our Service
            to you.</p>
          <ul>
            <li><strong>Types of Data Collected</strong></li>
          </ul>
          <p><strong>Personal Data</strong></p>
          <p>While using our Service, we may ask you to provide us with certain personally identifiable information that
            can be used to contact or identify you (&ldquo;<strong>Personal Data</strong>&rdquo;). Personally
            identifiable information may include, but is not limited to:</p>
          <ul>
            <ul>
              <li>Cookies and Usage Data</li>
            </ul>
          </ul>
          <p><strong>Usage Data</strong></p>
          <p>We may also collect information that your browser sends whenever you visit our Service or when you access
            Service by or through a mobile device (&ldquo;<strong>Usage Data</strong>&rdquo;).</p>
          <p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP
            address), browser type, browser version, the pages of our Service that you visit, the time and date of your
            visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
          <p>When you access Service with a mobile device, this Usage Data may include information such as the type of
            mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile
            operating system, the type of mobile Internet browser you use, unique device identifiers and other
            diagnostic data.</p>
          <p><strong>Tracking Cookies Data</strong></p>
          <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain
            information.</p>
          <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are
            sent to your browser from a website and stored on your device. Other tracking technologies are also used
            such as beacons, tags and scripts to collect and track information and to improve and analyze our
            Service.</p>
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our Service.</p>
          <p>Examples of Cookies we use:</p>
          <ul>
            <ul>
              <li><strong>Session Cookies:</strong>&nbsp;We use Session Cookies to operate our Service.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li><strong>Preference Cookies:</strong>&nbsp;We use Preference Cookies to remember your preferences and
                various settings.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li><strong>Security Cookies:</strong>&nbsp;We use Security Cookies for security purposes.</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li><strong>Advertising Cookies:</strong>&nbsp;Advertising Cookies are used to serve you with
                advertisements that may be relevant to you and your interests.
              </li>
            </ul>
          </ul>
          <ul>
            <li><strong>Use of Data</strong></li>
          </ul>
          <p>EmojiTalkie&nbsp;uses the collected data for various purposes:</p>
          <ul>
            <ul>
              <li>to provide and maintain our Service;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to notify you about changes to our Service;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to allow you to participate in interactive features of our Service when you choose to do so;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to provide customer support;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to gather analysis or valuable information so that we can improve our Service;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to monitor the usage of our Service;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to detect, prevent and address technical issues;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to fulfill any other purpose for which you provide it;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to carry out our obligations and enforce our rights arising from any contracts entered into between
                you and us, including for billing and collection;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to provide you with notices about your account and/or subscription, including expiration and renewal
                notices, email-instructions, etc.;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>to provide you with news, special offers and general information about other goods, services and
                events which we offer that are similar to those that you have already purchased or enquired about unless
                you have opted not to receive such information;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>in any other way we may describe when you provide the information;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>for any other purpose with your consent.</li>
            </ul>
          </ul>
          <ul>
            <li><strong>Retention of Data</strong></li>
          </ul>
          <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy
            Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
            obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
            disputes, and enforce our legal agreements and policies.</p>
          <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
            shorter period, except when this data is used to strengthen the security or to improve the functionality of
            our Service, or we are legally obligated to retain this data for longer time periods.</p>
          <ul>
            <li><strong>Transfer of Data</strong></li>
          </ul>
          <p>Your information, including Personal Data, may be transferred to &ndash; and maintained
            on &ndash; computers located outside of your state, province, country or other governmental jurisdiction
            where the data protection laws may differ from those of your jurisdiction.</p>
          <p>If you are located outside United States and choose to provide information to us, please note that we
            transfer the data, including Personal Data, to United States and process it there.</p>
          <p>Your consent to this Privacy Policy followed by your submission of such information represents your
            agreement to that transfer.</p>
          <p>EmojiTalkie&nbsp;will take all the steps reasonably necessary to ensure that your data is treated securely
            and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
            organisation or a country unless there are adequate controls in place including the security of your data
            and other personal information.</p>
          <ul>
            <li><strong>Disclosure of Data</strong></li>
          </ul>
          <p>We may disclose personal information that we collect, or you provide:</p>
          <ul>
            <ul>
              <li><strong>Business Transaction.</strong></li>
            </ul>
          </ul>
          <p>If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be
            transferred.</p>
          <ul>
            <ul>
              <li><strong>Other cases. We may disclose your information also:</strong></li>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>to contractors, service providers, and other third parties we use to support our business;</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>with your consent in any other cases;</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                  our customers.
                </li>
              </ul>
            </ul>
          </ul>
          <ul>
            <li><strong>Security of Data</strong></li>
          </ul>
          <p>The security of your data is important to us but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your Personal Data, we cannot guarantee its absolute security.</p>
          <ul>
            <li><strong>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</strong></li>
          </ul>
          <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data
            protection rights, covered by GDPR. &ndash; See more at https://eur-lex.europa.eu/eli/reg/2016/679/oj </p>
          <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal
            Data.</p>
          <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
            systems, please email us at privacy@emojitalkie.com. </p>
          <p>In certain circumstances, you have the following data protection rights:</p>
          <ul>
            <ul>
              <li>the right to access, update or to delete the information we have on you;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>the right of rectification. You have the right to have your information rectified if that information
                is inaccurate or incomplete;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>the right to object. You have the right to object to our processing of your Personal Data;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>the right of restriction. You have the right to request that we restrict the processing of your
                personal information;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>the right to data portability. You have the right to be provided with a copy of your Personal Data in
                a structured, machine-readable and commonly used format;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>the right to withdraw consent.&nbsp;You also have the right to withdraw your consent at any time where
                we rely on your consent to process your personal information;
              </li>
            </ul>
          </ul>
          <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we
            may not able to provide Service without some necessary data.</p>
          <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal
            Data. For more information, please contact your local data protection authority in the European Economic
            Area (EEA).</p>
          <ul>
            <li><strong>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</strong></li>
          </ul>
          <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a
            privacy policy. The law&rsquo;s reach stretches well beyond California to require a person or company in the
            United States (and conceivable the world) that operates websites collecting personally identifiable
            information from California consumers to post a conspicuous privacy policy on its website stating exactly
            the information being collected and those individuals with whom it is being shared, and to comply with this
            policy. &ndash; See more at:
            https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/ </p>
          <p>According to CalOPPA we agree to the following:</p>
          <ul>
            <ul>
              <li>users can visit our site anonymously;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>our Privacy Policy link includes the word &ldquo;Privacy&rdquo;, and can easily be found on the page
                specified above on the home page of our website;
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>users are able to change their personal information by emailing us at privacy@emojitalkie.com.</li>
            </ul>
          </ul>
          <p>Our Policy on &ldquo;Do Not Track&rdquo; Signals:</p>
          <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track
            browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform
            websites that you do not want to be tracked. </p>
          <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web
            browser.</p>
          <ul>
            <li><strong>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</strong></li>
          </ul>
          <p>If you are a California resident, you are entitled to learn what data we collect about you, ask to delete
            your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests
            and ask us:</p>
          <ul>
            <ul>
              <li><strong>What personal information we have about you</strong>. If you make this request, we will return
                to you:
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>The categories of personal information we have collected about you.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>The categories of sources from which we collect your personal information.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>The business or commercial purpose for collecting or selling your personal information.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>The categories of third parties with whom we share personal information.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>The specific pieces of personal information we have collected about you.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>A list of categories of personal information that we have sold, along with the category of any other
                  company we sold it to. If we have not sold your personal information, we will inform you of that fact.
                </li>
              </ul>
            </ul>
          </ul>
          <ul>
            <ul>
              <ul>
                <li>A list of categories of personal information that we have disclosed for a business purpose, along
                  with the category of any other company we shared it with.
                </li>
              </ul>
            </ul>
          </ul>
          <p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling
            twelve-month period. When you make this request, the information provided may be limited to the personal
            information we collected about you in the previous 12&nbsp;months.</p>
          <ul>
            <ul>
              <li><strong>To delete your personal information</strong>. If you make this request, we will delete the
                personal information we hold about you as of the date of your request from our records and direct any
                service providers to do the same. In some cases, deletion may be accomplished through de-identification
                of the information. If you choose to delete your personal information, you may not be able to use
                certain functions that require your personal information to operate.
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li><strong>To stop selling your personal information</strong>. We don't sell or rent your personal
                information to any third parties for any purpose. You are the only owner of your Personal Data and can
                request disclosure or deletion at any time.
              </li>
            </ul>
          </ul>
          <p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and
            you may not be able to participate in certain programs or membership services which require the usage of
            your personal information to function. But in no circumstances, we will discriminate against you for
            exercising your rights.</p>
          <p>To exercise your California data protection rights described above, please send your request(s) by one of
            the following means:</p>
          <p>By email: privacy@emojitalkie.com</p>
          <p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer
            Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took
            effect on 01/01/2020. </p>
          <ul>
            <li><strong>Service Providers</strong></li>
          </ul>
          <p>We may employ third party companies and individuals to facilitate our Service (&ldquo;<strong>Service
            Providers</strong>&rdquo;), provide Service on our behalf, perform Service-related services or assist us in
            analysing how our Service is used.</p>
          <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.</p>

          <ul>
            <li><strong>Audio and Video Communication</strong></li>
          </ul>
          <p><strong>Daily.co</strong></p>

          <p>
            Daily.co is a communications company that provides innovative, fast, reliable video calling products and
            services.
          </p>
          <p>
            <blockquote>"We think privacy is seriously important! We never sell or share any information you give us. We don’t
            collect or keep any data other than what’s necessary to provide video calls, phone dial-in, and Daily.co
            dashboard features. We do use cookies to keep you from having to sign in every time you use Daily.co, and to
              keep track of your camera and microphone settings."</blockquote>
          </p>
          <p>
            If you have any questions regarding these Terms of Service, please email help@daily.co
            https://www.daily.co/terms-of-service
          </p>

          <ul>
            <li><strong>Analytics</strong></li>
          </ul>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <p><strong>Google Analytics</strong></p>
          <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
            Google uses the data collected to track and monitor the use of our Service. This data is shared with other
            Google services. Google may use the collected data to contextualise and personalise the ads of its own
            advertising network.</p>
          <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page:
            https://policies.google.com/privacy?hl=en</p>
          <p>We also encourage you to review the Google's policy for safeguarding your data:
            https://support.google.com/analytics/answer/6004245.</p>
          <p><strong>Firebase</strong></p>
          <p>Firebase is analytics service provided by Google Inc.</p>
          <p>You may opt-out of certain Firebase features through your mobile device settings, such as your device
            advertising settings or by following the instructions provided by Google in their Privacy Policy:
            https://policies.google.com/privacy?hl=en</p>
          <p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms
            web page: https://policies.google.com/privacy?hl=en</p>
          <ul>
            <li><strong>CI/CD tools</strong></li>
          </ul>
          <p>We may use third-party Service Providers to automate the development process of our Service. </p>
          <p><strong>GitHub</strong></p>
          <p>GitHub is provided by GitHub, Inc.</p>
          <p>GitHub is a development platform to host and review code, manage projects, and build software.</p>
          <p>For more information on what data GitHub collects for what purpose and how the protection of the data is
            ensured, please visit GitHub Privacy Policy page: <a
            href="https://help.github.com/en/articles/github-privacy-statement">https://help.github.com/en/articles/github-privacy-statement.</a>
          </p>
          <ul>
            <li><strong>Links to Other Sites</strong></li>
          </ul>
          <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link,
            you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of
            every site you visit.</p>
          <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any
            third party sites or services.</p>
          <ul>
            <li><strong>Children's Privacy</strong></li>
          </ul>
          <p>Our Services are not intended for use by children under the age of 13 (&ldquo;
            <strong>Children</strong>&rdquo;). </p>
          <p>We do not knowingly collect personally identifiable information from Children under 13. If you become aware
            that a Child has provided us with Personal Data, please contact us. If we become aware that ce have
            collected Personal Data from Children without verification of parental consent, we take steps to remove that
            information from our servers.</p>
          <ul>
            <li><strong>Changes to This Privacy Policy</strong></li>
          </ul>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.</p>
          <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
            effective and update &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.</p>
          <ul>
            <li><strong>Contact Us</strong></li>
          </ul>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>By email: privacy@emojitalkie.com.</p>

        </div>
        }/>
      </MenuItem>
    </Menu>
  </div>
  );
}
