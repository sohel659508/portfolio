import { useState } from 'react';  // Import useState
import '../styles/globals.css';
import '../styles/responsive.css';
import Link from 'next/link';
import { HomeIcon, AcademicCapIcon, CogIcon, IdentificationIcon, NewspaperIcon } from '@heroicons/react/outline';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // Define state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);  // Toggle state
  };

  return (
    <>
      {/* heading section.................... */}
      <Head>
      <meta property="og:title" content="Sohel Portfolio Website" />
        <meta property="og:description" content="Explore my portfolio website for mor about me." />
        <meta property="og:image" content="https://www.mrsohelrana.com//Image/index/sohel-photo-for-social-media-share.png" />
        <meta property="og:url" content="https://https://www.mrsohelrana.com" />
        <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="sk55eWkisBhGeqpiHir6N1ay5_AfDNQ-HtYgqmHGJk4" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8968230404518514"
     crossorigin="anonymous"></script>
      </Head>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/" passHref>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white absolute flex">
              <div className="text-cyan-500">S</div>ohel <div className="text-cyan-500">R</div>ana <div className='text-[12px] text-gray-500 ml-3'>Varsion- 2.0</div>
            </span>

          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            onClick={toggleMobileMenu}  // Use the function here
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMobileMenuOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 z-50 fixed sm:w-full md:static w-full">
              <li>
                <Link href="/" className="py-2 px-3 text-grey-900 rounded-sm md:bg-transparent md:text-grey-900 md:p-0 dark:text-white flex md:hover:text-cyan-500" passHref>
                  <HomeIcon className='h-5 w-5 mr-2' /> Home
                </Link>
              </li>
              <li>
                <Link href="/education" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex" passHref>
                  <AcademicCapIcon className='h-6, w-6 mr-2' />
                  Education
                </Link>
              </li>
              <li>
                <Link href="/skill" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex" passHref>
                  <CogIcon className='h-6, w-6 mr-2' />
                  Skill
                </Link>
              </li>
              <li>
                <Link href="/about" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex" passHref>
                  <IdentificationIcon className='h-6 w-6 mr-2' />
                  About
                </Link>
              </li>
              <li>
                <Link href="/memory" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex" passHref>
                  <NewspaperIcon className='h-6 w-6 mr-2' />
                  Memory

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
