import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyRender } from '@/features/policies/ui/policy-render';
import {
  PolicySection,
  PolicyText,
} from '@/features/policies/ui/policy-section';

export const metadata: Metadata = {
  title: 'Terms of Use | Automicus',
  openGraph: {
    title: 'Terms of Use | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Automicus',
  },
  robots: {
    index: false,
  },
};

export default async function TermsOfUsePage() {
  const t = await getTranslations('policies.termsOfUse');

  return (
    <PolicyRender title={t('title', { fallback: 'Terms of Use' })}>
      <PolicySection heading={t('0.title', { fallback: 'Important' })}>
        <PolicyText>
          {t('0.0.text.1', {
            fallback:
              'Automicus is neither a licensed broker-dealer nor an investment advisor. By using this website and any related services or products, you acknowledge that all trading decisions and risks are your sole responsibility. Trading securities, commodities, currencies, or other financial instruments involves significant risk, including the potential loss of your entire investment. You should thoroughly review all information related to your investments and seek advice from qualified professionals before proceeding.',
          })}
        </PolicyText>
        <PolicyText>
          {t('0.0.text.1', {
            fallback:
              'By accessing or utilizing any products or services provided by Automicus , you agree to comply fully with these Terms of Use. If you do not accept any part of these terms, please discontinue your use of our services immediately.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('1.title', { fallback: 'Introduction' })}>
        <PolicyText>
          {t('1.text.0', {
            fallback:
              'These Terms of Use govern your use of the software and tools offered by',
          })}{' '}
          <span className="text-primary">
            {t('1.text.1', { fallback: 'AQM Global Ltd' })}
          </span>
          , {t('1.text.2', { fallback: 'a company registered under number' })}{' '}
          <span className="text-primary">
            {t('1.text.3', { fallback: '16735132' })}
          </span>{' '}
          {t('1.text.4', { fallback: 'with its registered office at' })}{' '}
          <span className="text-primary">
            {t('1.text.5', {
              fallback:
                '2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE',
            })}
          </span>
          .{' '}
          {t('1.text.6', {
            fallback:
              'The software includes various modules designed to scan financial markets in real-time, evaluating short-term price movements through proprietary algorithms and risk management systems. The software automates trade execution on your designated trading account (hereinafter referred to as the “Account”).',
          })}
        </PolicyText>
        <PolicyText>
          {t('1.text.7', {
            fallback:
              'It is essential to clarify that the Account referenced here is entirely separate from the software itself. The software does not hold, manage, or control your trading funds. Instead, your trading deposits remain within your private brokerage account maintained by a third-party broker. This broker is responsible for managing your account and executing trades as per the software’s instructions.',
          })}
        </PolicyText>
        <PolicyText>
          {t('1.text.8', {
            fallback:
              'The software does not have any functionality to initiate withdrawals or transfer funds from your Account. Its sole purpose is to analyze market data and automate trading actions.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('2.title', { fallback: 'Conditions of Use' })}>
        <PolicyText>
          {t('2.text.0', {
            fallback:
              'Your authorization to use the software depends on your complete understanding and acceptance of these Terms of Use. Should you not fully agree or comply with any part of these terms, your use of the software is prohibited and may be considered unlawful. You must immediately stop using the software if you breach any term or condition outlined here.',
          })}
          <br />
          {t('2.text.1', {
            fallback:
              'The software must only be connected to trading accounts legally owned by you and funded with your assets. Use of the software with accounts or funds not legally your property is strictly forbidden. Access credentials (such as login IDs and passwords) for the software must be kept confidential and only used by you. You are responsible for monitoring the software’s operation whenever it is active and maintaining control over its activity.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.text.2', {
            fallback:
              'If you do not fully understand the risks involved in trading, margin use, or automated trading technology, or do not accept these risks, you should not use this software. You must ensure that your use and any distribution of the software comply with all applicable laws in your jurisdiction.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.text.3', {
            fallback:
              'The trading signals, recommendations, or analyses provided by the software are for informational purposes only and do not constitute financial advice. Any trading decisions based on the software’s output are your own, and you accept full liability for any gains or losses incurred.',
          })}
        </PolicyText>
        <PolicyText>
          <span className="text-primary">
            {t('2.text.4', { fallback: 'AQM Global Ltd' })}
          </span>{' '}
          {t('2.text.5', {
            fallback:
              'does not offer financial advice or investment services through this software, nor should the software be considered a substitute for professional guidance.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.text.6', {
            fallback:
              'The choice to operate the software on either demo or live trading accounts is yours alone, along with full responsibility for any outcomes. This software is not licensed, audited, regulated, or supervised by any financial authority, and you must ensure compliance with local regulations.',
          })}{' '}
          <br />
          {t('2.text.7', {
            fallback:
              'You alone are responsible for any losses or adverse consequences resulting from the use of this software.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.text.8', {
            fallback:
              'Use of this software is prohibited if you are or have been employed by any governmental body.',
          })}{' '}
          <br />
          {t('2.text.9', {
            fallback:
              'Users must be at least 18 years old to operate the software. Failure to comply with these terms constitutes unauthorized use and may result in legal action for intellectual property infringement.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection
        heading={t('3.title', { fallback: 'Privacy and Security' })}
      >
        <PolicyText>
          {t('3.text', {
            fallback:
              'Your login credentials are stored locally on your device to enhance convenience. It is your responsibility to protect these credentials and ensure they are not shared with unauthorized third parties. Only API keys with restricted permissions, which exclude fund transfer capabilities, are permitted for use with our software. Sharing your login details with anyone other than yourself is strictly prohibited. For trade calculations and pricing accuracy, the software securely transmits trade-related data to our remote servers.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('4.title', { fallback: 'Risk Warning' })}>
        <PolicyText>
          {t('4.text.0', {
            fallback:
              'Trading across financial markets such as Forex, Stocks, and CFDs inherently carries substantial risk, including the possibility of losing your entire invested capital, especially when using leverage. You must fully understand and accept these risks before utilizing any Automicus software. Market volatility, unexpected events, technical malfunctions, and software errors can all impact trading results. You are responsible for monitoring the software during its operation, and it is recommended to pause or stop the software when you are not actively supervising it.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.text.1', {
            fallback:
              'Trading outcomes may differ significantly between accounts, even under similar conditions, reflecting the unpredictable nature of algorithmic trading. Past performance does not guarantee future results, and no assurances of profit are made. Software updates may introduce unforeseen bugs or errors affecting performance; these changes are beyond our control, and acceptance of such risks is part of using the software. By using Automicus software, you waive any claims for compensation relating to financial losses, technical issues, or equipment damages. You are also responsible for the security and management of your funds held with third-party brokers.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.text.2', {
            fallback:
              'Leaving funds invested in trading accounts for extended periods without active management can increase exposure to losses. We advise regular withdrawal of profits to safeguard your capital. Mixing manual trades with automated trading on the same account may cause conflicts or errors, potentially resulting in losses. We strongly recommend separating manual and automated trading by using distinct accounts.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('5.title', { fallback: 'Disclaimer' })}>
        <PolicyText>
          {t('5.text', {
            fallback:
              'You acknowledge sole responsibility for any losses, damages, or consequences resulting directly or indirectly from the use of Automicus software, regardless of any third-party involvement. Neither Automicus nor its affiliates takes responsibility for the receipt, management, or security of your trading deposits or services provided by any third-party broker or provider. The performance and success rates of trades generated by the software may vary across different accounts and conditions, and we do not guarantee consistency in trading outcomes. All promotional materials, statistics, and information provided about the software are for informational purposes only, and their accuracy cannot be guaranteed.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection
        heading={t('6.title', { fallback: 'Additional Provisions' })}
      >
        <PolicyText>
          {t('6.text.0', {
            fallback:
              'The trading account linked to the software (“Account”) is distinct and separate from the software itself. Automicus and its team do not hold or control your funds; your deposits remain with your broker, a third-party service provider. Any instructions displayed in the software related to deposits are retrieved from your broker’s account and are provided without any warranty of accuracy or security. You may only use the software with the specific account authorized and may not transfer trading instructions to other accounts.',
          })}
        </PolicyText>
        <PolicyText>
          {t('6.text.1', {
            fallback:
              'You do not obtain any rights, ownership, or access to the software’s source code, binary files, or proprietary algorithms by purchasing or using the software. Certain aspects of the trading strategy and risk management logic remain confidential as proprietary trade secrets.',
          })}
        </PolicyText>
        <PolicyText>
          {t('6.text.2', {
            fallback:
              'Payments for software use do not transfer ownership of the software or intellectual property rights.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('7.title', { fallback: 'Pricing' })}>
        <PolicyText>
          {t('7.text', {
            fallback:
              'Prices for Automicus bots are fixed as displayed on our website but may be revised at any time without prior notice due to market or operational factors. We may offer special promotions, bundles, or discounts at our discretion; terms for these offers are subject to change or termination without notice. All prices and offers are non-negotiable and final. By purchasing, you agree to our pricing terms.',
          })}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('8.title', { fallback: 'Governing Law' })}>
        <PolicyText>
          {t('8.text.0', {
            fallback:
              'These Terms of Use, along with any disputes or claims arising from them or related matters (including non-contractual claims), shall be governed by and interpreted according to the laws of ',
          })}{' '}
          <span className="text-primary">
            {t('8.text.1', { fallback: 'the United Kingdom' })}
          </span>
          .{' '}
          {t('8.text.2', {
            fallback:
              'Regardless of your location or residency, the operation and provision of our services are exclusively subject to the laws of',
          })}{' '}
          <span className="text-primary">
            {t('8.text.3', { fallback: 'the United Kingdom' })}
          </span>
          .
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('9.title', { fallback: 'Final Provisions' })}>
        <PolicyText>
          {t('9.text.0', {
            fallback:
              'You acknowledge and agree that neither Automicus nor any of its creators, authors, distributors, or operators shall be liable for any damages, losses, or financial harm resulting from your use of the software. Your use of the software is entirely at your own risk, and you waive any rights to claim compensation for any direct or indirect losses or damages.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.1', {
            fallback:
              'By using the software, you confirm that you fully understand financial market trading principles and accept the inherent risks involved in trading with automated tools.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.2', {
            fallback:
              'You recognize that using the software does not guarantee profits and that financial losses, including the loss of your entire invested capital, remain possible.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.3', {
            fallback:
              'You agree not to base any significant financial or other decisions solely on information provided by the software.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.4', {
            fallback:
              'Your decision to use the software is voluntary and made of your own free will. You may stop using the software at any time without restriction.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.5', {
            fallback:
              'You acknowledge that using the software should not be considered or construed as receiving financial, investment, or asset management advice or services under any circumstances.',
          })}{' '}
          <br />
          {t('9.text.6', {
            fallback:
              'You confirm that your use of the software complies with all applicable laws and regulations in your jurisdiction.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.7', {
            fallback:
              'You represent that you are familiar with the operation of the software, including how to start, pause, or stop all trading functions at your discretion.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.8', {
            fallback:
              'You confirm that there are no legal or technical obstacles preventing you from running or terminating the software.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.text.9', {
            fallback:
              'You affirm that you have carefully read, understood, and agreed to these Terms of Use in full, and that this agreement is legally binding.',
          })}
        </PolicyText>
      </PolicySection>
    </PolicyRender>
  );
}
