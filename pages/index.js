import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { DownloadIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sohel Rana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        {/* White content....................... */}
        <div className='w-[50%] m-11 overflow-hidden index_left_content'>
          <div className='text-2xl indexhitext'>Hi There,</div>
          <div className='text-5xl mt-5 indexname'>Sohel Rana</div>
          {/* Typewriter animation.................. */}
          <div className='text-2xl mt-4 indextypewriter'>
            I&apos;m a
            <TypeAnimation className='text-cyan-500'
              sequence={[
                " Store Executive",
                500,
                " Web Developer",
                900,
                " Mobile App Developer",
                400,
                " Computer Software Developer",
                500,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <div className='mt-5 indexinterduce'>Welcome to my profile! I hope you find the information you&apos;re looking for here. Feel free to explore my portfolio, and don&apos;t hesitate to reach out if you have any questions.</div>
          <div className=''>
            <button className='border-2 border-cyan-500 p-2 mt-5 border-dotted indexbutton'>
              <DownloadIcon className='h-5 w-5 float-left mr-2' /> Download CV
            </button>
          </div>
          {/* Social media links................. */}
          <div className='mt-4 flex indexsociallink'>
            <Link href="https://wa.me/+8801703349302" target='blank' className='h-[45px] rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="WhatsApp Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/whatsapp.png" width="100" height="100" />
            </Link>
            <Link href="" className='h-[45px] rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="LinkedIn Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/linkedin.png" width="100" height="100" />
            </Link>
            <Link href="" className='h-[45px] rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Facebook Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/facebook.png" width="100" height="100" />
            </Link>
            <Link href="" target='blank' className='h-[45px] rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Email Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/mail.png" width="100" height="100" />
            </Link>
            <Link href="" className='h-[45px] rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Phone Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/phone.png" width="100" height="100" />
            </Link>
          </div>
        </div>

        {/* My index photo............. */}
        <div className='absolute bottom-0 right-0 indexrightphoto'>
          <div>
            <Image alt="Sohel Rana Background" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/mybg.png" width="380" height="400" />
          </div>
        </div>
      </main>
    </>
  )
}
