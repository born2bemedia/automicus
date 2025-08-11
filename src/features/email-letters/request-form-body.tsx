import { htmlTemplate } from './html-template';

export const requestFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div style="width: 696px; margin: 0 auto;">
        <header class="header">
          <img src="https://images2.imgbox.com/1f/3e/Ra3dPWcw_o.png" alt="full-logo" width="180" height="36" />
        </header>
        <div class="wrapper">
          <div class="main" style="margin-bottom: 10px;">
            <p style="font-size: 24px; color: #FFF; font-weight: 700; text-transform: uppercase;">Your Assistance Request Received</p>
          </div>
          <div class="main">
            <p style="font-size: 24px; color: #FFF;">Hi ${username}</p>
            <p class="text">Thank you for reaching out to us!</p>
            <p class="text">We've successfully received your message and our team is already reviewing your request. You can expect a response from us shortly.</p>
            <p class="text">If your inquiry is urgent, feel free to follow up via our Contact Page or reply directly to this email.</p>
            <p class="text">Thank you for choosing Automicus — we're here to help you trade smarter.</p>
            <p class="text">Warm regards, <br /> The Automicus Team</p>
          </div>
        </div>
        <div class="footer">
          <img style="margin-left: auto;" src="https://images2.imgbox.com/bb/d0/AdLhPTiQ_o.png" alt="full-logo" width="180" height="36" />
        </div>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        background: #181818;
      }
      
      .main {
        padding: 40px;
        border-radius: 12px;
        background: #010101;
      }
      
      .header {
        overflow: hidden;
        background: #010101;
        padding: 40px;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        margin-top: 24px;
        color: rgba(255, 255, 255, 0.60);
        font-size: 14px;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
      
      .footer {
        background: #CBFF00;
        padding: 40px;
      }
    `,
  });
};
