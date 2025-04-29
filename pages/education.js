import Head from "next/head";
import { useEffect } from "react";
import { AcademicCapIcon, ClockIcon } from '@heroicons/react/outline';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sohel Rana",
        "jobTitle": "Store Executive",
        "worksFor": {
            "@type": "Organization",
            "name": "Tususka Group",
            "url": "https://tususka.com"
        },
        "description": "Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee.",
        "birthPlace": "Mohammadupur, Magura, Khulna",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Government Rajendra College",
            "location": "Faridpur"
        },
        "url": "https://mrsohelrana.com/education",
        "sameAs": [
            "https://linkedin.com/in/sohelrana14",
            "https://facebook.com/srk.sohel2"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Store Executive",
            "skills": ["Inventory Management", "Team Leadership", "Data Analysis"]
        }
    };

    return (
        <>
            <Head>
                <meta name="robots" content="index, follow" />
                {/* Primary Meta Tags */}
                <title>Sohel Rana | Education, Govt. Rajendra College, UCEP Bangladesh, Aminur Rahman College, Tongi</title>
                <meta name="description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee." />
                <meta name="keywords" content="Sohel Rana, Education, Academic Qualification, BBA, HSC, SSC, JSC, PSC, Gymnasium, Computer Training, Kobi Mohasin Ideal School, Rajendra College Faridpur, Aminur Rahman College Magura" />
                <meta name="author" content="Sohel Rana" />
                <link rel="canonical" href="https://mrsohelrana.com/education" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mrsohelrana.com/education" />
                <meta property="og:title" content="Sohel Rana | Education, Govt. Rajendra College, UCEP Bangladesh, Aminur Rahman College, Tongi" />
                <meta property="og:description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee." />
                <meta property="og:image" content="https://www.mrsohelrana.com/Image/index/mybg.webp" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://mrsohelrana.com/education" />
                <meta property="twitter:title" content="Sohel Rana | Education, Govt. Rajendra College, UCEP Bangladesh, Aminur Rahman College, Tongi" />
                <meta property="twitter:description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee." />
                <meta property="twitter:image" content="https://www.mrsohelrana.com/Image/index/mybg.webp" />
                <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="p-5 education_main">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex space-x-2">
                        <li><Link href="/" className="text-cyan-500 hover:underline">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/education" className="text-cyan-500 hover:underline" aria-current="page">Education</Link></li>
                    </ol>
                </nav>

                {/* Academic Qualification Section */}
                <section>
                    <h1 className="text-[17px] font-bold flex">
                        <AcademicCapIcon className="h-7 w-7 mr-3" aria-hidden="true" />
                        Academic Qualification
                    </h1>
                    <div className="flex flex-wrap">
                        {/* BBA Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2019-Continue
                            </div>
                            <h2 className="text-cyan-500 font-bold">Bachelor of Business Administration (BBA)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I am doing my BBA in Finance and Banking from Govt. Rajendra College, Faridpur, and I am now in the 4th year.</p>
                            <Link
                                target="blank"
                                onClick={(e) => { e.preventDefault(); alert('Result Not Published Yet !!!') }}
                                href="#"
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View BBA Result"
                            >
                                View Result
                            </Link>
                        </article>

                        {/* HSC Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2017-2019
                            </div>
                            <h2 className="text-cyan-500 font-bold">Higher Secondary School Certificate (HSC)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I completed my college in Business Studies at Aminur Rahman Degree College, Mohammadpur, Magura, with a result of 4.25 out of 5.00.</p>
                            <Link
                                target="_blank"
                                href="/document/academic/sohel_hsc_result_2024.pdf"
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View HSC Result"
                            >
                                View Result
                            </Link>
                        </article>

                        {/* SSC Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Exam-2017
                            </div>
                            <h2 className="text-cyan-500 font-bold">Secondary School Certificate (SSC)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I completed my high school in Business Studies at Dattapara Nabadiganta High School, Tongi, Gazipur, with a result of 4.05 out of 5.00.</p>
                            <Link
                                target="_blank"
                                href="/document/academic/sohel_ssc_result_2017.pdf"
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View SSC Result"
                            >
                                View Result
                            </Link>
                        </article>

                        {/* JSC Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Exam-2014
                            </div>
                            <h2 className="text-cyan-500 font-bold">Junior School Certificate (JSC)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I completed my Junior School at Dattapara Nabadiganta High School, Tongi, Gazipur, with a result of 3.39 out of 5.00.</p>
                            <Link
                                target="_blank"
                                href="/document/academic/sohel_jsc_result_2014.pdf"
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View JSC Result"
                            >
                                View Result
                            </Link>
                        </article>

                        {/* PSC Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Exam-2011
                            </div>
                            <h2 className="text-cyan-500 font-bold">Primary School Certificate (PSC)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I completed my Primary School at UCEP Bangladesh, Tongi, Gazipur.</p>
                        </article>
                    </div>
                </section>

                {/* Additional Qualifications Section */}
                <section className="mt-8">
                    <h1 className="text-[17px] font-bold flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 mr-2" aria-hidden="true">
                            <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        Additional Qualifications
                    </h1>
                    <div className="flex flex-wrap">
                        {/* Computer Training Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2017 (Two Month)
                            </div>
                            <h2 className="text-cyan-500 font-bold">Basic Computer Training</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">During this training at Smart IT Solution in College Gate, Tongi, Gazipur, I learned about computer hardware, Microsoft Office, and basic computer skills.</p>
                            <Link
                                target="_blank"
                                href="/document/academic/computer_certificate.pdf"
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View Computer Training Certificate"
                            >
                                View Certificate
                            </Link>
                        </article>

                        {/* Gymnasium Card */}
                        <article data-aos="fade-right" className="block h-[220px] educationcard m-2 cursor-pointer w-[31%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]">
                                <ClockIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                2024-Continue
                            </div>
                            <h2 className="text-cyan-500 font-bold">Gymnasium (GYM)</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">I exercise regularly, understand various gym activities, and know how to use all gym equipment. I train at SAD Gym Center in Tongi, Gazipur.</p>
                            <Link
                                href=""
                                className="text-gray-700 dark:text-gray-400 underline-offset-2 underline"
                                aria-label="View Gym Result"
                            >
                                View Result
                            </Link>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}