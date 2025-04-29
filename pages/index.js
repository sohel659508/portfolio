import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { DownloadIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Sohel Rana | Store Executive, Web Developer, Mobile App Developer</title>
        <meta name="robots" content="index, follow" />
        <meta name="title" content="Sohel Rana | Store Executive, Web & Mobile App Developer" />
        <meta property="og:image" content="https://www.mrsohelrana.com//Image/index/sohel-photo-for-social-media-share.png" />
        <meta name="description" content="Welcome to Sohel Rana's portfolio. Explore my work as a Store Executive, Web Developer, Mobile App Developer, and Computer Software Developer. Download my CV and connect with me!" />
        <meta name="keywords" content="Sohel Rana, Web Developer, Mobile App Developer, Store Executive, Software Developer, Portfolio, CV, React, Next.js, Flutter, PHP, Python" />
        <meta name="author" content="Sohel Rana" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sohelrana.com/" />
        <meta property="og:title" content="Sohel Rana | Store Executive, Web & Mobile App Developer" />
        <meta property="og:description" content="Welcome to Sohel Rana's portfolio. Explore my work as a Store Executive, Web Developer, Mobile App Developer, and Computer Software Developer. Download my CV and connect with me!" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sohelrana.com/" />
        <meta property="twitter:title" content="Sohel Rana | Store Executive, Web & Mobile App Developer" />
        <meta property="twitter:description" content="Welcome to Sohel Rana's portfolio. Explore my work as a Store Executive, Web Developer, Mobile App Developer, and Computer Software Developer. Download my CV and connect with me!" />
        <meta property="twitter:image" content="https://www.mrsohelrana.com//Image/index/mybg.webp" />
        <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.sohelrana.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sohel Rana",
            "jobTitle": "Store Executive, Web & Mobile App Developer",
            "url": "https://www.sohelrana.com/",
            "sameAs": [
              "https://www.linkedin.com/in/sohelrana14/",
              "https://www.facebook.com/srk.sohel2/",
              "https://wa.me/+8801703349302"
            ],
            "description": "Sohel Rana is a skilled Store Executive, Web Developer, Mobile App Developer, and Computer Software Developer. Explore my portfolio and connect with me for collaborations.",
            "image": "https://www.sohelrana.com/Image/index/mybg.png"
          })}
        </script>
      </Head>

      <main className=''>
        {/* White content....................... */}
        <div className='w-[50%] m-11 overflow-hidden index_left_content'>
          <h1 className='text-2xl indexhitext'>Hi There,</h1>
          <h2 className='text-5xl mt-5 indexname'>Sohel Rana</h2>
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
          <p className='mt-5 indexinterduce'>Welcome to my profile! I hope you find the information you&apos;re looking for here. Feel free to explore my portfolio, and don&apos;t hesitate to reach out if you have any questions.</p>
          <div className=''>
            <button className='border-2 border-cyan-500 p-2 mt-5 border-dotted indexbutton'>
              <DownloadIcon className='h-5 w-5 float-left mr-2' /> Download CV
            </button>
          </div>
          {/* Social media links................. */}
          <div className='mt-4 flex indexsociallink'>
            <Link href="https://wa.me/+8801703349302" target='blank' aria-label="WhatsApp" className='h-[45px] hover:scale-110 rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="WhatsApp Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/whatsapp.png" width="100" height="100" />
            </Link>
            <Link href="https://www.linkedin.com/in/sohelrana14/" target='blank' aria-label="LinkedIn" className='h-[45px] hover:scale-110 rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="LinkedIn Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/linkedin.png" width="100" height="100" />
            </Link>
            <Link href="https://www.facebook.com/srk.sohel2/" target='blank' aria-label="Facebook" className='h-[45px] hover:scale-110 rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Facebook Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/facebook.png" width="100" height="100" />
            </Link>
            <Link href="mailto:sohelrana14108@gmail.com" target='blank' aria-label="Email" className='h-[45px] hover:scale-110 rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Email Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/mail.png" width="100" height="100" />
            </Link>
            <Link href="tel:+8801703349302" aria-label="Phone" className='h-[45px] hover:scale-110 rounded-full w-[45px] overflow-hidden m-2 p-1'>
              <Image alt="Phone Icon" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/phone.png" width="100" height="100" />
            </Link>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="marquee-container" style={{ width: '60%', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', height: '100px', marginTop: '-25px' }}>
          <div className="marquee-content" style={{ display: 'inline-block', animation: 'scroll 20s linear infinite' }}>
            {/* Original Content */}
            {['React', 'Nextjs', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'PHP', 'MySqli', 'Python', 'Flutter'].map((skill, index) => (
              <div key={index} className='h-[90px] min-w-[65px] inline-block mx-5'>
                <div className='h-[73%] overflow-hidden relative'>
                  <Image src={`/Image/index/${skill.toLowerCase()}.webp`} fill className='' alt={`${skill} Icon`} />
                </div>
                <div className='h-27% text-center'>{skill}</div>
              </div>
            ))}
            {/* Duplicated Content */}
            {['React', 'Nextjs', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'PHP', 'MySqli', 'Python', 'Flutter'].map((skill, index) => (
              <div key={index + 11} className='h-[90px] min-w-[65px] inline-block mx-5'>
                <div className='h-[73%] overflow-hidden relative'>
                  <Image src={`/Image/index/${skill.toLowerCase()}.webp`} fill className='' alt={`${skill} Icon`} />
                </div>
                <div className='h-27% text-center'>{skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* My index photo............. */}
        <div className='absolute bottom-0 right-0 indexrightphoto'>
          <div>
            <Image alt="Sohel Rana" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/index/mybg.webp" width="340" height="400" priority />
          </div>
        </div>
      </main>
    </>
  );
}