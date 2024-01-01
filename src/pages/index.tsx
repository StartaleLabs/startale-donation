import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";


export default function Home() {
  return (
    <main>
     <div>
      <div className='bg-black relative overflow-hidden'>
        <div className='absolute z-0 w-full h-screen flex items-center'>
          <video
            webkit-playsinline
            playsInline
            muted
            autoPlay
            loop
            data-not-lazy
          >
            <source src='https://startalelabs.github.io/startale-donation/images/astar.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='mix-blend-screen'>
          <Image
            className='absolute z-[-1] w-full h-full'
            src='https://startalelabs.github.io/startale-donation//images/zkevm-bg.webp'
            alt=''
            width='1728'
            height='1429'
            data-not-lazy
          />
          <Image
            className='absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover'
            src='https://startalelabs.github.io/startale-donation//images/space-cloud.webp'
            alt=''
            width='1728'
            height='1281'
            data-not-lazy
          />
          <Image
            className='fixed z-[2] portrait:h-screen landscape:w-screen object-cover'
            src='https://startalelabs.github.io/startale-donation//images/space-stars.svg'
            alt=''
            width='1728'
            height='1728'
            data-not-lazy
          />
        <header className="pt-8 w-full flex justify-center">
                <Image
                    src="https://startalelabs.github.io/startale-donation//images/logo.png"
                    width={188}
                    height={60}
                    alt=""
                    className={"w-[94px] md:w-[188px]"}
                />
        </header>
          <div className='text-center h-screen flex items-center justify-center z-10 relative'>
            <div className='max-w-full max-w-[72rem] px-4 sm:px-6 pt-12'>
              <h1 className='break-words text-2xl sm:text-6xl lg:text-6xl sm:mt-20 font-extrabold leading-none drop-shadow tracking-tight'>
                Noto Peninsula (Japan) Earthquake donation fund.
                <p className='break-words mt-8 text-2xl sm:text-6xl lg:text-5xl font-extrabold leading-none drop-shadow tracking-tight'>
                  (令和6年能登半島地震災害支援募金)
                </p>
              </h1>
              <p className='break-words text-2xl sm:text-4xl mt-6 sm:mt-10'>
                Astar is with all people who are affected by the disaster.
              </p>
              <p className='break-words font-extrabold text-2xl sm:text-4xl mt-10 sm:mt-10 sm:mb-14 mb-14'>
                Astar Native Address
                Y6bqhr65aCCydqbrD7gCNZKKSxK7k9pU4mNBhfMEy8MyCnj
              </p>
              <p className='break-words text-2xl sm:text-2xl mb-8 sm:mb-14'>
                皆さまからのご寄付はAstar FoundationおよびStartale
                Labsを通じてgas手数料や税金等（消費税含む）を除き全て本災害の緊急救援活動、被災地復旧支援として被災者や被災地のために活用させていただきます。
                今後の詳しい使いみちと寄付報告は、この募金ページのほか、Xなどを通じてお知らせします。
              </p>
              <div className="mt-12 flex justify-center">
            <Link
              href="https://astar.subscan.io/account/Y6bqhr65aCCydqbrD7gCNZKKSxK7k9pU4mNBhfMEy8MyCnj"
              target="_blank"
              className="flex items-center leading-none gap-1 p-5 border border-white rounded-[18px] bg-[rgba(255,255,255,0.30)] text-[24px]"
            >
              Block Explorer
              <Image
                src="https://startalelabs.github.io/startale-donation//images/icon_external.png"
                width={24}
                height={24}
                alt=""
                className="flx-shrink-0"
              />
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
