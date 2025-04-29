import Head from "next/head";
import { useEffect } from "react";
import { AdjustmentsIcon, GlobeAltIcon, ClockIcon, BriefcaseIcon, UsersIcon, TranslateIcon, LightBulbIcon } from '@heroicons/react/outline';
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skill() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Sohel Rana | Skills - Professional, Technical, and Soft Skills</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Explore Sohel Rana's professional, technical, and soft skills. Learn about his expertise in web development, mobile app development, software development, and more." />
                <meta name="keywords" content="Sohel Rana, Skills, Web Development, Mobile App Development, Software Development, Technical Skills, Soft Skills, Professional Skills" />
                <meta name="author" content="Sohel Rana" />
                <link rel="canonical" href="https://www.mrsohelrana.com/skills" />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mrsohelrana.com/skills" />
                <meta property="og:title" content="Sohel Rana | Skills - Professional, Technical, and Soft Skills" />
                <meta property="og:description" content="Explore Sohel Rana's professional, technical, and soft skills. Learn about his expertise in web development, mobile app development, software development, and more." />
                <meta property="og:image" content="https://www.mrsohelrana.com/Image/default/tusuka_logo.png" />

                {/* Twitter Meta Tags */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.mrsohelrana.com/skills" />
                <meta property="twitter:title" content="Sohel Rana | Skills - Professional, Technical, and Soft Skills" />
                <meta property="twitter:description" content="Explore Sohel Rana's professional, technical, and soft skills. Learn about his expertise in web development, mobile app development, software development, and more." />
                <meta property="twitter:image" content="https://www.mrsohelrana.com/Image/default/tusuka_logo.png" />
                <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Sohel Rana | Skills",
                        "description": "Explore Sohel Rana's professional, technical, and soft skills. Learn about his expertise in web development, mobile app development, software development, and more.",
                        "url": "https://www.mrsohelrana.com/skills",
                        "image": "https://www.mrsohelrana.com/Image/index/mybg.webp",
                        "author": {
                            "@type": "Person",
                            "name": "Sohel Rana",
                            "jobTitle": "Store Executive",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Tususka Group"
                            }
                        }
                    })}
                </script>
            </Head>

            <main className="p-5 skill_mainsection overflow-hidden">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex space-x-2">
                        <li><Link href="/" className="text-cyan-500 hover:underline">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/skill" className="text-cyan-500 hover:underline" aria-current="page">Skills</Link></li>
                    </ol>
                </nav>

                {/* Professional Skill Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex">
                        <BriefcaseIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                        Professional Skill
                    </h1>
                    <div className="flex flex-wrap">
                        {/* Card 1 */}
                        <div data-aos="flip-left" className="block h-[620px] m-2 cursor-pointer w-[31%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2023-Continue
                            </div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image
                                    alt="Tusuka Logo"
                                    src="/Image/default/tusuka_logo.png"
                                    width={500}
                                    height={300}
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }}
                                />
                            </div>
                            <h2 className="text-cyan-500 font-bold">Store Executive</h2>
                            <div className="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Received Accessories:</strong> Verify and record accessories upon receipt, ensuring accuracy according to the challan.</li>
                                    <li><strong>Inventory Management:</strong> Create and maintain inventory reports and bin cards.</li>
                                    <li><strong>Accessories Distribution:</strong> Distribute accessories to sample, sewing, finishing, and packing sections.</li>
                                    <li><strong>Material Shortlist:</strong> Maintain a shortlist of in-house materials for timely availability.</li>
                                    <li><strong>Reporting:</strong> Generate various types of reports and share them with merchandisers and management.</li>
                                    <li><strong>Financial Documentation:</strong> Create bills of exchange.</li>
                                    <li><strong>Additional Tasks:</strong> Perform other duties as assigned by management.</li>
                                </ul>
                            </div>
                            <Link
                                href=""
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View Store Executive Result"
                            >
                                View Result
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div data-aos="flip-right" className="block h-[620px] m-2 cursor-pointer w-[31%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2022-2023
                            </div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image
                                    alt="Tusuka Logo"
                                    src="/Image/default/tusuka_logo.png"
                                    width={500}
                                    height={300}
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }}
                                />
                            </div>
                            <h2 className="text-cyan-500 font-bold">Data Entry Executive</h2>
                            <div className="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Data Entry:</strong> Enter data into ERP software, updating store accessories, fabric, and general store items while maintaining a manual Excel sheet.</li>
                                    <li><strong>Reporting:</strong> Create daily received and issued reports, monthly and yearly closing/stock reports.</li>
                                    <li><strong>Export Information:</strong> Prepare daily export information and share it with management and other concerned parties.</li>
                                    <li><strong>Financial Documentation:</strong> Create bills of exchange.</li>
                                    <li><strong>Inventory Management:</strong> Prepare inventory reports and manage other store-related tasks.</li>
                                    <li><strong>Additional Duties:</strong> Perform other tasks as assigned by management.</li>
                                </ul>
                            </div>
                            <Link
                                href=""
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View Data Entry Executive Result"
                            >
                                View Result
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div data-aos="flip-down" className="block h-[620px] m-2 cursor-pointer w-[31%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2019-2022
                            </div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image
                                    alt="TVS Logo"
                                    src="/Image/default/tvs_logo.png"
                                    width={500}
                                    height={300}
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }}
                                />
                            </div>
                            <h2 className="text-cyan-500 font-bold">Computer Operator</h2>
                            <div className="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Office Records:</strong> Maintain all types of office records using Excel sheets.</li>
                                    <li><strong>Salary Management:</strong> Create monthly salary sheets.</li>
                                    <li><strong>Expense Tracking:</strong> Maintain daily expenses and submit records to the admin and accounts departments.</li>
                                    <li><strong>General Store Management:</strong> Oversee general store items, including stationery and office supplies.</li>
                                    <li><strong>Worker Management:</strong> Track daily worker attendance and inform relevant personnel about lunch requirements.</li>
                                    <li><strong>Additional Tasks:</strong> Perform other official tasks as assigned by management.</li>
                                </ul>
                            </div>
                            <Link
                                href=""
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View Computer Operator Result"
                            >
                                View Result
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Hard Skill Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex mt-11">
                        <AdjustmentsIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                        Hard Skill
                    </h1>
                    <div data-aos="zoom-in-right" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                            <GlobeAltIcon className="h-12" aria-hidden="true" />
                        </div>
                        <h2 className="text-cyan-500 font-bold">Web Design & Development</h2>
                        <br />
                        <div className="flex flex-wrap">
                            {['HTML (100%)', 'CSS (95%)', 'Bootstrap (90%)', 'Tailwind CSS (90%)', 'JS (70%)', 'React (NextJs) (95%)', 'Flutter (80%)', 'Python (60%)', 'PHP (85%)', 'MySqli (90%)'].map((skill, index) => (
                                <div key={index} className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                                    {skill}<br />
                                    <progress value={skill.match(/\d+/)[0]} max="100"></progress>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mobile App Development Section */}
                <section>
                    <div data-aos="zoom-in-left" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                            <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                            </svg>
                        </div>
                        <h2 className="text-cyan-500 font-bold">Mobile Application Development</h2>
                        <br />
                        <div className="flex flex-wrap">
                            {['Reactnative (60%)', 'Flutter (80%)', 'PHP Api (70%)', 'MySqli (90%)'].map((skill, index) => (
                                <div key={index} className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                                    {skill}<br />
                                    <progress value={skill.match(/\d+/)[0]} max="100"></progress>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Software Development Section */}
                <section>
                    <div data-aos="zoom-in-right" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="window" width="70" height="70">
                                <g id="Layer_2">
                                    <g id="Layer_1-2">
                                        <rect width="28.87" height="28.87" fill="transparent" rx="6.48" ry="6.48" />
                                        <path d="M13.23 14.17V8.91l-5.39.76v4.5h5.39zM7.84 14.73v4.5l5.39.75v-5.25H7.84zM13.87 14.77v5.3l7.16.99v-6.29h-7.16zM21.03 14.11v-6.3l-7.16 1.01v5.29h7.16z" fill="#04aef4" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-cyan-500 font-bold">Software Development</h2>
                        <br />
                        <div className="flex flex-wrap">
                            {['Python (60%)', 'TKinter (80%)', 'PHP Api (70%)', 'MySqli (90%)'].map((skill, index) => (
                                <div key={index} className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                                    {skill}<br />
                                    <progress value={skill.match(/\d+/)[0]} max="100"></progress>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Skill Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex mt-11">
                        <LightBulbIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                        Technical Skill
                    </h1>
                    <div data-aos="zoom-out-up" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="flex flex-wrap">
                            {['All Operating System', 'All MS Office Application', 'PC Hardware', 'Adobe Photoshop', 'Visual Studio', 'Video Editing', 'Electric Wiring'].map((skill, index) => (
                                <div key={index} className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                                    <div className="h-[78%] flex justify-center skillhardimage">
                                        <Image
                                            alt={skill}
                                            src={`/Image/skill/${skill.toLowerCase()}.png`}
                                            width={500}
                                            height={300}
                                            onContextMenu={(e) => e.preventDefault()}
                                            style={{ userSelect: "none", pointerEvents: "none" }}
                                        />
                                    </div>
                                    <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden text-center">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Soft Skill Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex mt-11">
                        <UsersIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                        Soft Skill
                    </h1>
                    <div data-aos="zoom-out-right" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        {['Communication', 'Teamwork', 'Problem-Solving', 'Leadership', 'Emotional Intelligence', 'Time Management', 'Interpersonal Skills', 'Work Ethic'].map((skill, index) => (
                            <div key={index}>
                                <h2 className="text-[20px]">#{skill}</h2>
                                <ul className="list list-disc m-2 ml-10">
                                    <li><strong>Effective Communication:</strong> Ability to clearly and concisely convey information, both verbally and in writing, to different audiences.</li>
                                    <li><strong>Active Listening:</strong> Paying full attention to the speaker, understanding their message, and responding thoughtfully.</li>
                                    <li><strong>Presentation Skills:</strong> Delivering information or ideas confidently and engagingly in front of an audience.</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Language Skill Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex mt-11">
                        <TranslateIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                        Language Skill
                    </h1>
                    <div data-aos="fade-out" className="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        {['Bangla (Native Language)', 'English', 'Hindi'].map((language, index) => (
                            <div key={index}>
                                <h2 className="text-[20px]">#{language}</h2>
                                <ul className="list list-disc m-2 ml-10">
                                    <li><strong>Reading:</strong> Fluent in reading {language.split(' ')[0]} literature, newspapers, and online content.</li>
                                    <li><strong>Listening:</strong> Highly proficient in understanding spoken {language.split(' ')[0]} in various contexts.</li>
                                    <li><strong>Speaking:</strong> Fluent in speaking {language.split(' ')[0]}, capable of engaging in detailed conversations.</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}