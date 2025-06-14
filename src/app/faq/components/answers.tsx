'use client';

import { Accordion, Text } from '@/shared/ui/components/atoms';
import { List, ListItemLayout } from '@/shared/ui/components/molecules';

export const Answers = () => {
  return (
    <section className="px-[160] py-20 max-md:p-6">
      <Accordion
        values={[
          {
            question: 'Designed for Precision in the Gold Market',
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  Choosing the right bot depends on your trading goals, risk
                  tolerance, and strategy preferences. We offer a range of bots
                  designed for different trading styles, such as low-risk,
                  high-frequency, and market trend-following strategies.
                  It&apos;s important to assess your objectives carefully:
                </Text>
                <List
                  values={[
                    'Risk Tolerance: If you prefer safer, steady growth, look for bots designed with built-in risk management tools (e.g., stop loss, take profit, trailing stop). These bots help protect your investment while aiming for consistent returns.',
                    'Trading Style: Some bots are optimized for scalping or high-frequency trading, while others are better for long-term trend following. Make sure the bot matches the timeframes and style you prefer.',
                    'Market Focus: Choose bots based on your asset focus (e.g., forex, crypto, gold). Some bots specialize in particular markets, while others are multi-asset capable.',
                    'Compatibility: Ensure your selected bot works with your trading platform and broker.',
                  ]}
                />
                <Text weight="medium" color="light">
                  We provide general guidance, but the choice is yours based on
                  your trading strategy and preferences.
                </Text>
              </ListItemLayout>
            ),
          },
          {
            question: "What's the process for purchasing and activating a bot?",
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  Purchasing and activating a bot with Automicus is
                  straightforward. Here&apos;s a step-by-step guide:
                </Text>
                <List
                  type="decimal"
                  values={[
                    'Choose Your Bot: Browse through our bots catalog and select the one that fits your trading needs.',
                    'Purchase: After selecting your bot, click the "Buy" button to complete your purchase. You\'ll be redirected to a secure payment gateway to finalize the transaction.',
                    "Download the Files: Upon successful payment, you will receive a download link for the bot's installation files (typically an .mq4 or .mq5 file).",
                    'Installation: Follow the installation instructions to add the bot to your MetaTrader 4 (MT4) or MetaTrader 5 (MT5) platform. You can easily find these instructions in your account after purchasing or in the download package.',
                    'Activation: Once installed, the bot can be activated by dragging it onto your desired chart within the platform, and adjusting your risk settings, lot size, and other parameters.',
                  ]}
                />
                <Text weight="medium" color="light">
                  While we offer general guidance on setup, the activation and
                  configuration process is ultimately your responsibility. If
                  you encounter any issues, our Help Center can assist.
                </Text>
              </ListItemLayout>
            ),
          },
          {
            question: 'Are your bots compatible with MetaTrader 4/5?',
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  Yes, all our bots are fully compatible with MetaTrader 4 (MT4)
                  and MetaTrader 5 (MT5) platforms. These are the most widely
                  used platforms for automated trading, and our bots are
                  designed to integrate seamlessly with them.
                </Text>
                <List
                  values={[
                    'MetaTrader 4 (MT4): If you’re using MT4, download and install the .mq4 file provided after purchase. The bot will function on MT4’s interface with no issues.',
                    'MetaTrader 5 (MT5): For MT5 users, download the .mq5 version of the bot and follow the same installation procedure.',
                  ]}
                />
                <Text weight="medium" color="light">
                  We recommend ensuring that your MetaTrader platform is updated
                  to the latest version for optimal performance. If you
                  encounter installation issues, check our Help Center for
                  troubleshooting guides.
                </Text>
              </ListItemLayout>
            ),
          },
          {
            question: 'How do I know if your bots will work with my broker?',
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  Our bots are designed to work with most brokers that support
                  MetaTrader 4 or MetaTrader 5. However, there are certain
                  broker-specific conditions to consider:
                </Text>
                <List
                  values={[
                    'Broker Compatibility: Make sure your broker provides access to the MetaTrader 4/5 platform and allows the use of Expert Advisors (EAs). Some brokers may impose restrictions on automated trading.',
                    'Account Type: Some brokers may only support manual trading or specific types of accounts (e.g., ECN, STP, or Standard accounts). Check with your broker to ensure your account is compatible with automated bots.',
                    'Spreads and Latency: For optimal performance, using a broker with low spreads and minimal latency is essential. This ensures that your bot can execute trades without delays or higher-than-expected costs.',
                  ]}
                />
                <Text weight="medium" color="light">
                  While we can offer general guidance regarding compatibility,
                  the client must verify that their broker and account type
                  effectively support the bots.
                </Text>
              </ListItemLayout>
            ),
          },
          {
            question: 'What if I encounter issues after purchasing a bot?',
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  If you encounter any issues after purchasing a bot, we offer
                  customer support through our Help Center. Here&apos;s how we
                  can assist:
                </Text>
                <List
                  values={[
                    'Installation Issues: If you have trouble setting up the bot on your platform, we provide step-by-step instructions and troubleshooting guides to help you through the process.',
                    "Performance Issues: If the bot isn't performing as expected, ensure you have followed all configuration steps, such as setting the correct risk parameters and lot sizes. Check the FAQ or contact our team for guidance if performance is still an issue.",
                    'Refunds: Since we do not offer financial advice or manage trading decisions, we do not provide refunds. However, we offer full product support to ensure your bot works as intended.',
                  ]}
                />
                <Text weight="medium" color="light">
                  Please be aware that any issues related to your broker,
                  account settings, or other external factors must be addressed
                  with the relevant parties.
                </Text>
              </ListItemLayout>
            ),
          },
          {
            question: 'Do you offer any warranties or refunds?',
            answer: (
              <ListItemLayout>
                <Text weight="medium" color="light">
                  At Automicus, we do not provide warranties or refunds. Once a
                  bot is purchased, it is considered final, as bots are digital
                  products that cannot be returned. However, we stand by the
                  quality of our products and provide extensive support to help
                  you use the bots effectively.
                </Text>
                <List
                  values={[
                    'Support: Our Help Center is available for troubleshooting, and our team is here to assist with installation or performance questions.',
                    "No Financial Advice: Since all trading decisions and bot configurations are the user's responsibility, we cannot guarantee profits or offer financial advice.",
                  ]}
                />
                <Text weight="medium" color="light">
                  We encourage all users to thoroughly assess each bot and its
                  compatibility with their strategy before purchase.
                </Text>
              </ListItemLayout>
            ),
          },
        ]}
      />
    </section>
  );
};
