import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start py-6 md:py-10 px-6 md:px-8 ${inter.className}`}
      style={{
        background:
          "linear-gradient(121deg, #E6007A -5.77%, #703AC2 13.57%, #0070EB 34.18%, #0297FB 58.08%, #0AE2FF 74.93%)",
      }}
    >
      <header className={"w-full flex"}>
        <Image
          src="/images/logo.png"
          width={188}
          height={60}
          alt=""
          className={"w-[94px] md:w-[188px]"}
        />
      </header>
      <div className="flex-1 grid place-items-center">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-center break-words leading-[1.5]">
            Noto Peninsula (Japan) Earthquake donation fund. /
            令和6年能登半島地震災害支援募金
          </h1>
          <p className="mt-[60px] text-center text-[20px] md:text-[24px]">
            Astar is with all people who are affected by the disaster. <br />
            Astar Native Address: XXXXXXX / <br className="md:hidden"/> Ethereum Address: YYYYYYYYYY
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="https://astar.subscan.io"
              target="_blank"
              className="flex items-center leading-none gap-1 p-5 border border-white rounded-[18px] bg-[rgba(255,255,255,0.30)] text-[24px]"
            >
              Block Explorer
              <Image
                src="/images/icon_external.png"
                width={24}
                height={24}
                alt=""
                className="flx-shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
