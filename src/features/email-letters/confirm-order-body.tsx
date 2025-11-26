import { htmlTemplate } from './html-template';

export const confirmOrderBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div style="width: 696px; margin: 0 auto;">
        <header class="header">
          <img src="https://images2.imgbox.com/1f/3e/Ra3dPWcw_o.png" alt="full-logo" width="180" height="36" />
        </header>
        <div class="wrapper">
          <div class="main" style="margin-bottom: 10px; display: flex; align-items: center;">
            <img src="https://images2.imgbox.com/aa/9b/eAq6hIAr_o.png" alt="full-logo" width="32" height="32" style="margin-right: 10px; margin-top: auto; margin-bottom: auto;" />
            <p style="font-size: 24px; color: #FFF; font-weight: 700; text-transform: uppercase;">Your Automicus Order <br /> Confirmation</p>
          </div>
          <div class="main">
            <p style="font-size: 24px; color: #FFF;">Dear, ${username}</p>
            <p class="text">Thank you for your order and for choosing Automicus as your trusted provider of automated trading solutions. We appreciate your confidence in our technology and are excited to support you on your trading journey.</p>
            <p class="text">Your order has been successfully received.</p>
            <p class="text">One of our managers will contact you shortly with detailed payment instructions and all necessary guidance for activating your Automicus bot(s).</p>
            <p class="text">If you have any questions in the meantime, feel free to reply to this email or reach out through our support page.</p>
            <p class="text">Thank you once again for choosing Automicus.<br />We look forward to assisting you.</p>
            <p style="color: #fff; font-weight: 700;">Best regards, <br /> <span style="color: #CBFF00">The Automicus Team</span></p>
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
