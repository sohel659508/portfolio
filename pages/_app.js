import '../styles/globals.css'
import Link from 'next/link';
import { HomeIcon, AcademicCapIcon, CogIcon, IdentificationIcon, NewspaperIcon } from '@heroicons/react/outline';

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* heading section.................... */}
    <div className="w-full flex p-3 pr-8 justify-between content-center sticky top-0 bg-white dark:bg-black">
                <div className="text-3xl"><span className="text-cyan-500 text-3x1">S</span>ohel <span className="text-cyan-500 text-3x1">R</span>ana</div>
                <div className="flex">
                    <Link href="/" className="hover:text-cyan-500 m-2 ml-4 flex"><HomeIcon className="h-6 w-5 mr-1" /> Home</Link>
                    <Link href="/education" className="hover:text-cyan-500 m-2 ml-4 flex"><AcademicCapIcon className="h-6 w-5 mr-1" /> Education</Link>
                    <Link href="/skill" className="hover:text-cyan-500 m-2 ml-4 flex"><CogIcon className="h-6 w-5 mr-1" /> Skill</Link>
                    <Link href="/about" className="hover:text-cyan-500 m-2 ml-4 flex"><IdentificationIcon className="h-6 w-5 mr-1" /> About Me</Link>
                    <Link href="/memory" className="hover:text-cyan-500 m-2 ml-4 flex"><NewspaperIcon className="h-6 w-5 mr-1" /> Memory</Link>
                </div>
            </div>

    <Component {...pageProps} />
    </>
  );
}

export default MyApp
