import Image from "next/image";
import Header from "../components/Header";
import Roadmap from "../components/Roadmap";

const features = [
  {
    title: "Onchain Analysis & AI Signals",
    image: "/images/onchain.webp",
    body: [
      "Leverages onchain data analysis and AI algorithms to generate accurate trading signals.",
      "Signals are based on real-time insights from various blockchain networks.",
    ],
  },
  {
    title: "Multi-Chain Compatibility",
    image: "/images/multi.webp",
    body: [
      "Provides signals and trading options for popular blockchain networks like Ethereum, Solana, BSC, and Arbitrum.",
    ],
  },
  {
    title: "Comprehensive Signal Delivery",
    image: "/images/compre.webp",
    body: [
      "Delivers detailed buy, sell, and hold recommendations with entry/exit points and risk assessments.",
    ],
  },
  {
    title: "Customizable Trading Strategies",
    image: "/images/trading.webp",
    body: [
      "Allows users to customize their trading strategies with various buy and sell options, including limit orders and stop-loss orders.",
    ],
  },
  {
    title: "Intuitive User Interface",
    image: "/images/intuit.webp",
    body: [
      "Features a user-friendly interface for easy navigation and seamless trading execution.",
    ],
  },
  {
    title: "High Accuracy and Reliability",
    image: "/images/high.webp",
    body: [
      "Ensures high accuracy in signal generation through rigorous data analysis and AI-driven algorithms.",
    ],
  },
];

const faqs = [
  {
    q: "What is AlphaXBot?",
    a: "AlphaXBot is an AI-powered trading assistant that uses onchain analysis to deliver buy, sell, and hold signals across major chains.",
  },
  {
    q: "Which chains are supported?",
    a: "Signals and trading options cover popular networks including Ethereum, Solana, BSC, and Arbitrum.",
  },
  {
    q: "Do I need trading experience?",
    a: "No. The interface is built for both newcomers and experienced traders, with clear entry/exit guidance and risk context.",
  },
  {
    q: "Can I customize strategies?",
    a: "Yes. You can tailor buy/sell rules, including limit orders and stop-loss preferences, to match your risk style.",
  },
  {
    q: "How do I get support?",
    a: "Reach the team at support@alphaxbot.com or use the community channels linked in the footer.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Markets involve risk. AlphaXBot provides analytical signals; always do your own research before trading.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative">
          <div className="overflow-hidden h-[600px] lg:h-[650px] relative flex items-center justify-center">
            <Image
              src="/images/herobg.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute top-0 w-full h-full grid lg:grid-cols-2 gap-[20px] p-[20px] items-center 2xl:container">
              <div className="mt-[20px] lg:mt-0 pl-0 lg:pl-[40px] animate-fade-up">
                <h1 className="text-[30px] lg:text-[50px] font-[600] leading-[40px] lg:leading-[70px] font-syne">
                  Trade like an ALPHA with AI-powered
                  <span className="text-accent"> onchain</span> analysis!
                </h1>
                <a
                  href="#join"
                  className="inline-flex rounded-[4px] p-[10px_40px] mt-[20px] lg:mt-[30px] bg-accent text-white font-syne items-center space-x-[20px]"
                >
                  <span>Become an Alpha Trader</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
              <div className="flex items-start lg:items-center justify-center w-full h-full animate-fade-up-delay">
                <Image
                  src="/images/time.webp"
                  alt="AlphaXBot product preview"
                  width={485}
                  height={571}
                  priority
                  sizes="(max-width: 1024px) 60vw, 485px"
                  className="h-[60%] lg:h-full w-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full bottom-[-13%] lg:bottom-[-9%] flex items-center justify-center absolute">
            <div className="w-[90%] lg:w-[70%] flex items-center space-x-[5px] lg:space-x-[15px] justify-center bg-[#D9D9D933] h-[50px] lg:h-[80px] rounded-[20px] p-[10px] backdrop-blur-sm">
              <span className="text-[18px] lg:text-[25px]" aria-hidden>
                ✓
              </span>
              <span className="text-[14px] lg:text-[20px] font-syne">
                Tested and trusted by Alphas of the Trading Game...
              </span>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-full bg-navy">
          <div className="p-[40px_20px] lg:p-[50px_40px] h-fit lg:h-[700px] grid lg:grid-cols-2 gap-[40px] 2xl:gap-[100px] 2xl:container items-center">
            <div className="my-[40px] lg:mt-0 relative flex items-center justify-center w-full min-h-[280px]">
              <div className="h-[200px] lg:h-[300px] buy-glow w-[200px] lg:w-[300px] bg-mint rounded-full animate-glow" />
              <div className="absolute">
                <Image
                  src="/images/buy.webp"
                  alt="Buy and sell signals"
                  width={657}
                  height={525}
                  sizes="(max-width: 1024px) 80vw, 520px"
                  className="w-full h-auto max-w-[520px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <p className="font-[600] font-syne text-[20px] lg:text-[40px] text-mint">
                AlphaXBot isn&apos;t your <br className="hidden lg:block" />{" "}
                ordinary trading bot.
              </p>
              <p className="font-syne text-[20px] mt-[20px] w-full lg:w-[70%]">
                Powered by cutting-edge onchain analysis and Artificial
                Intelligence, it delivers precise signals tailored to your
                preferred chains and trading strategies.
              </p>
              <p className="font-syne text-[20px] mt-[20px] w-full lg:w-[70%]">
                Whether you&apos;re a seasoned trader or just dipping your toes
                into the crypto market, AlphaXBot equips you with the insights
                you need to succeed.
              </p>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-soft flex flex-col items-center justify-center px-[20px] overflow-hidden py-[50px] lg:py-[100px] relative"
        >
          <div className="box1 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute top-0 lg:top-[-10%] left-0 lg:left-[-15%]" />
          <div className="box2 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute bottom-0 lg:bottom-[-10%] left-0 lg:left-[-15%]" />
          <div className="box1 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute bottom-0 lg:bottom-[-15%] right-0 lg:right-[-10%]" />
          <div className="box2 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute top-0 lg:top-[-15%] right-0 lg:right-[-10%]" />
          <h2 className="text-navy mb-[40px] font-[600] font-syne text-[28px] lg:text-[36px] text-center z-20">
            AlphaX Bot Features
          </h2>
          <div className="grid lg:grid-cols-3 gap-[20px] w-full lg:w-[80%] z-20 2xl:container">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black"
              >
                <div className="h-[136px] w-full bg-black relative overflow-hidden rounded-[4px]">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-syne text-navy text-[20px] font-[600] mt-[5px]">
                  {feature.title}
                </h3>
                {feature.body.map((line) => (
                  <p
                    key={line}
                    className="font-[400] font-syne text-[16px] mt-[5px] text-navy leading-[20px]"
                  >
                    {line}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <Roadmap />

        <section className="bg-soft flex flex-col items-center justify-center px-[20px] py-[60px]">
          <h2 className="text-navy mb-[40px] font-[600] font-syne text-[24px] lg:text-[36px] text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid lg:grid-cols-3 gap-[20px] w-full lg:w-[80%] 2xl:container">
            {faqs.map((faq, index) => (
              <article
                key={faq.q}
                className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black"
              >
                <p className="font-syne font-[600] text-[36px] text-[#D9D9D9]">
                  {index + 1}
                </p>
                <h3 className="font-syne text-navy text-[24px] font-[600]">
                  {faq.q}
                </h3>
                <p className="font-[400] font-syne text-[18px] text-navy leading-[24px]">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="join"
          className="bg-accent h-[800px] flex items-center justify-center px-[20px] lg:p-0"
        >
          <div className="h-[85%] lg:h-[70%] w-full lg:w-[75%] flex flex-col lg:flex-row items-center justify-between border join rounded-[20px] lg:rounded-[43px] p-[30px_40px] lg:p-[20px_40px] 2xl:container">
            <div className="flex-1">
              <p className="font-syne text-[35px] lg:text-[64px] leading-[40px] lg:leading-[70px]">
                Be a king in the trading game. Play like one.
              </p>
              <div className="w-full grid lg:grid-cols-2 gap-[20px] mt-[30px]">
                <a
                  href="mailto:support@alphaxbot.com"
                  className="rounded-[4px] p-[10px_20px] bg-accent text-white font-syne text-center"
                >
                  Join our Community
                </a>
                <a
                  href="mailto:support@alphaxbot.com"
                  className="rounded-[4px] p-[10px_20px] border border-white font-syne text-center"
                >
                  Get Customer Support
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end mt-[40px] lg:mt-0">
              <Image
                src="/images/rock.webp"
                alt=""
                width={496}
                height={520}
                sizes="(max-width: 1024px) 80vw, 400px"
                className="w-full lg:w-[80%] h-auto 2xl:h-[400px] object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy w-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 p-[40px_20px] lg:p-[70px_50px] 2xl:container w-full">
          <div>
            <Image
              src="/images/logo.svg"
              alt="AlphaXBot"
              width={227}
              height={49}
              className="h-[50px] w-auto"
            />
            <p className="font-syne text-[16px] lg:text-[18px] mt-[10px] lg:mt-[20px] w-fit text-start text-white border-b border-[#EAEAEA] pb-[20px]">
              AlphaX Bot delivers precise signals tailored to{" "}
              <br className="hidden lg:block" /> your preferred chains and
              trading strategies.
            </p>
            <p className="mt-[20px] font-syne">© 2026. All rights reserved.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start space-y-[20px] lg:space-y-0 lg:space-x-[50px] justify-start mt-[20px] lg:mt-0">
            <a
              className="text-[24px] font-syne"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="text-[24px] font-syne"
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a className="text-[24px] font-syne" href="#roadmap">
              Whitepaper
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
