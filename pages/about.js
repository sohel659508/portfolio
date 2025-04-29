import Head from "next/head";
import { AdjustmentsIcon, GlobeAltIcon, ClockIcon, BriefcaseIcon, UsersIcon, TranslateIcon, LightBulbIcon } from '@heroicons/react/outline';
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    // for count father age ............
    const birthDate = new Date("1972-02-18"), t = new Date();
    let years = t.getFullYear() - birthDate.getFullYear(),
        months = t.getMonth() - birthDate.getMonth(),
        days = t.getDate() - birthDate.getDate();
    if (days < 0) months--, days += new Date(t.getFullYear(), t.getMonth(), 0).getDate();
    if (months < 0) years--, months += 12;

    // for count mothers age ............
    const birthDate2 = new Date("1984-07-06"), t2 = new Date();
    let years2 = t2.getFullYear() - birthDate2.getFullYear(),
        months2 = t2.getMonth() - birthDate2.getMonth(),
        days2 = t2.getDate() - birthDate2.getDate();
    if (days2 < 0) months2--, days2 += new Date(t2.getFullYear(), t2.getMonth(), 0).getDate();
    if (months2 < 0) years2--, months2 += 12;

    // for count sister age ............
    const birthDate3 = new Date("2008-08-16"), t3 = new Date();
    let years3 = t3.getFullYear() - birthDate3.getFullYear(),
        months3 = t3.getMonth() - birthDate3.getMonth(),
        days3 = t3.getDate() - birthDate3.getDate();
    if (days3 < 0) months3--, days3 += new Date(t3.getFullYear(), t3.getMonth(), 0).getDate();
    if (months3 < 0) years3--, months3 += 12;

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sohel Rana",
        "jobTitle": "Store Executive, Data Entry Operator",
        "worksFor": {
            "@type": "Organization",
            "name": "Tususka Group",
            "location": "Rajnagar, 27, Tongi, Gazipur",
            "url": "https://tususka.com"
        },
        "description": "Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee.",
        "birthPlace": "Mohammadupur, Magura, Khulna",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Government Rajendra College",
            "location": "Faridpur"
        },
        "url": "https://mrsohelrana.com/about",
        "sameAs": [
            "https://linkedin.com/in/sohelrana14",
            "https://facebook.com/srk.sohel2"
        ],
        "image": "https://www.mrsohelrana.com/Image/index/mybg.webp",
        "height": "5 feet 6 inches",
        "weight": "60 kg",
        "gender": "Male",
        "birthDate": "1999-11-21",
        "nationality": "Bangladeshi",
        "knowsLanguage": ["Bengali", "English", "Hindi"],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Store Executive",
            "skills": ["Inventory Management", "Team Leadership", "Data Analysis", "Web Development", "Data Entry Operator"]
        },
        "family": [
            {
                "@type": "Person",
                "name": "Md. Sukur Ali",
                "relationship": "Father",
                "birthDate": "1972-02-18",
                "jobTitle": "Building Contractor",
                "height": "5 feet 8 inches",
                "weight": "75 kg",
                "description": "My father is a kind and hardworking person who has dedicated his life to our family."
            },
            {
                "@type": "Person",
                "name": "Mst. Morium Begum",
                "relationship": "Mother",
                "birthDate": "1984-07-06",
                "jobTitle": "Homemaker",
                "height": "5 feet",
                "weight": "53 kg",
                "description": "My mother is a cheerful and caring person who manages our household with love and dedication."
            },
            {
                "@type": "Person",
                "name": "Mst. Sumaya Akter",
                "relationship": "Sister",
                "birthDate": "2008-08-16",
                "jobTitle": "Student",
                "height": "5 feet 2 inches",
                "weight": "40 kg",
                "description": "My sister is a curious and talented student with a passion for learning and cooking."
            }
        ],
        "favorites": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "FoodEstablishment",
                        "name": "Biryani",
                        "description": "Favorite food: Biryani, Chicken Roast, Bhuna Dal"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Movie",
                        "name": "Avenger Endgame",
                        "description": "Favorite movie: Avenger Endgame"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "MusicRecording",
                        "name": "Main Agar - Tubelight",
                        "description": "Favorite song: Main Agar - Tubelight"
                    }
                }
            ]
        }
    };
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <meta name="robots" content="index, follow" />
                <title>Sohel Rana | About, Family, Biography, Father, Mother, Sister, Height, Weight, Favorite, Hobby, Language</title>
                <meta name="description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group." />
                <meta name="keywords" content="Sohel Rana, Store Executive, Tususka Group, Web Development, Software Development, E-commerce, Student Management Software, tusuka stitches ltd, tusuka group" />
                <meta name="author" content="Sohel Rana" />
                <link rel="canonical" href="https://mrsohelrana.com/about" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mrsohelrana.com/about" />
                <meta property="og:title" content="Sohel Rana | About, Family, Biography, Father, Mother, Sister, Height, Weight, Favorite, Hobby, Language" />
                <meta property="og:description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group." />
                <meta property="og:image" content="https://www.mrsohelrana.com/Image/index/mybg.webp" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://mrsohelrana.com/about" />
                <meta property="twitter:title" content="Sohel Rana | About, Family, Biography, Father, Mother, Sister, Height, Weight, Favorite, Hobby, Language" />
                <meta property="twitter:description" content="Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group." />
                <meta property="twitter:image" content="https://www.mrsohelrana.com/Image/index/mybg.webp" />
                <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="p-5 aboutmainsection overflow-hidden">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex space-x-2">
                        <li><Link href="/" className="text-cyan-500 hover:underline">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/about" className="text-cyan-500 hover:underline" aria-current="page">About</Link></li>
                    </ol>
                </nav>
                {/* Academic Qualification Section */}
                <section>
                    <div className="flex flex-wrap">
                        {/* Short Introduction Card */}
                        <article data-aos="fade-in" className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h2 className="text-cyan-500 font-bold mb-2">Short Introduction</h2>
                            <p>
                                Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee.
                                I am now seeking to join a company where I can apply my talents, enhance my skills, and gain valuable experience. My ultimate goal is to establish my own tech company, focusing on areas such as e-commerce, student management software, and web and software development. I am also taking proactive steps towards achieving this future goal.
                            </p>
                        </article>

                        {/* Body Measurement Card */}
                        <article data-aos="fade-in" className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h2 className="text-cyan-500 font-bold mb-2">Body Measurement</h2>
                            <div className="flex flex-wrap">
                                {/* Age */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Age icon" className="mt-[-5px]" src="/Image/about/age.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Age</div>
                                        <div className="text-sm">22 years, 2 months, 1 day</div>
                                    </div>
                                </div>

                                {/* Skin Color Tone */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Skin color tone icon" className="mt-[-5px]" src="/Image/about/colortone.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Skin Color Tone</div>
                                        <div className="text-sm">Light Brown</div>
                                    </div>
                                </div>

                                {/* Hair Color */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-4">
                                        <Image alt="Hair color icon" className="mt-[-5px]" src="/Image/about/hair.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Hair Color</div>
                                        <div className="text-sm">Dark Black (Medium Wave)</div>
                                    </div>
                                </div>

                                {/* Height */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Height icon" className="mt-[-5px]" src="/Image/about/height.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Height</div>
                                        <div className="text-sm">5 Feet 6 Inch</div>
                                    </div>
                                </div>

                                {/* Weight */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Weight icon" className="mt-[-5px]" src="/Image/about/weight.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Weight</div>
                                        <div className="text-sm">60 Kg (132 Lbs)</div>
                                    </div>
                                </div>

                                {/* Chest */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Chest icon" className="mt-[-5px]" src="/Image/about/chest.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Chest</div>
                                        <div className="text-sm">39 Inch</div>
                                    </div>
                                </div>

                                {/* Biceps */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Biceps icon" className="mt-[-5px]" src="/Image/about/biceps.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Biceps</div>
                                        <div className="text-sm">13 Inch</div>
                                    </div>
                                </div>

                                {/* Shoes Size */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Shoes size icon" className="mt-[-5px]" src="/Image/about/shoes.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Shoes Size</div>
                                        <div className="text-sm">42 (Apex)</div>
                                    </div>
                                </div>

                                {/* Shirt Size */}
                                <div data-aos="fade-right" className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="Shirt size icon" className="mt-[-5px]" src="/Image/about/shirt.png" width={500} height={300} />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Shirt Size</div>
                                        <div className="text-sm">M (48)</div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Favorite Card */}
                        <article data-aos="fade-out" className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h2 className="text-cyan-500 font-bold mb-2">My Favorite</h2>
                            {/* Food Items */}
                            <section>
                                <h3>Food Items</h3>
                                <div className="flex flex-wrap">
                                    {/* Biryani */}
                                    <div data-aos="fade-down-left" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Biryani photo" src="/Image/about/biriyani.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Food:</strong> Biryani, Chicken Roast, Bhuna Dal</div>
                                    </div>

                                    {/* Pasta */}
                                    <div data-aos="fade-down-left" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Pasta photo" src="/Image/about/pasta.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Fast Food:</strong> Pasta, Noodles</div>
                                    </div>

                                    {/* Jhalmuri */}
                                    <div data-aos="fade-down-left" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Jhalmuri photo" src="/Image/about/jhalmuri.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Street Food:</strong> Jhalmuri, Singara</div>
                                    </div>

                                    {/* Drink */}
                                    <div data-aos="fade-down-left" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Drink photo" src="/Image/about/sevenup.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Drink:</strong> Water, Coffee, 7Up</div>
                                    </div>
                                </div>
                            </section>

                            {/* Entertainment */}
                            <section className="mt-10">
                                <h3>Entertainment</h3>
                                <div className="flex flex-wrap">
                                    {/* Movie */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Avenger Endgame photo" src="/Image/about/avenger.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Movie:</strong> Avenger Endgame</div>
                                    </div>

                                    {/* Drama */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="The King Eternal Monarch photo" src="/Image/about/the_king.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Drama:</strong> The King Eternal Monarch</div>
                                    </div>

                                    {/* Animation Cartoon */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Shinchan and Doraemon photo" src="/Image/about/carton.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Animation Cartoon:</strong> Shinchan, Doraemon</div>
                                    </div>

                                    {/* Song */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Main Agar song photo" src="/Image/about/song.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Song:</strong> Main Agar - Tubelight</div>
                                    </div>

                                    {/* Actor */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Robert Downey Jr and Sharuk Khan photo" src="/Image/about/actor.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Actor:</strong> Robert Downey Jr, Sharuk Khan</div>
                                    </div>

                                    {/* Actress */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Kim Ji-won and Yami Gautam photo" src="/Image/about/actress.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Actress:</strong> Kim Ji-won, Yami Gautam</div>
                                    </div>

                                    {/* Singer */}
                                    <div data-aos="fade-down-right" className="w-[280px] h-[180px] shadow-lg aboutfavoritecard m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden aboutphotocard">
                                            <Image alt="Ed Sheeran and Arijit Singh photo" src="/Image/about/singer.png" width={500} height={300} />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Singer:</strong> Ed Sheeran, Arijit Singh</div>
                                    </div>
                                </div>
                            </section>
                        </article>

                        {/* Family Card */}
                        <article data-aos="fade-in" className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h2 className="text-cyan-500 font-bold mb-2">Family Member</h2>
                            <section>
                                {/* Father's Section */}
                                <div className="mb-14">
                                    <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                                        <Image
                                            data-aos='flip-down'
                                            alt="Father's photo"
                                            src="/Image/about/father.jpeg"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-[20px]">Father</h3>
                                        <p className="text-sm">
                                            My father&#39;s name is Md. Sukur Ali. He is {years} years, {months} months, {days} days old and was born on February 18, 1972.
                                            He works as a building contractor and has previously worked in building construction for many years. His height is 5 feet 8 inches, and he weighs 75 kg. His blood type is O+ positive.<br />
                                            He is a very charming and kind person, always ready to lend a helping hand. To me, he is a true hero. He has sacrificed his whole life for our family, working tirelessly to ensure we have a bright future. Even after long days at work, he comes home with a smile, choosing not to share the challenges he faces. His positivity is inspiring and reminds me of the importance of resilience.<br />
                                            I feel incredibly fortunate to have him as my father. I want to express my gratitude for everything he has done for us, and I strive to make him proud every day.
                                        </p>
                                    </div>
                                </div>

                                {/* Mother's Section */}
                                <div className="mb-14">
                                    <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                                        <Image data-aos='flip-right' alt="Mother's photo" src="/Image/about/mother.jpg" width={500} height={300} />
                                    </div>
                                    <div>
                                        <h3 className="text-[20px]">Mother</h3>
                                        <p className="text-sm">
                                            My mother&#39;s name is Mst. Morium Begum. She is {years2} years, {months2} months, {days2} days old, born on July 06, 1984.
                                            She is a homemaker and takes care of our family with great love and dedication. Her height is 5 feet, and she weighs 53 kg. Her blood type is O+ positive.<br />
                                            She is a very cheerful person, always full of energy and capable of making friends with anyone she meets. Her friendly nature makes her a joy to be around. Throughout her life, she has sacrificed so much for our well-being and to ensure that we grow up in a happy and healthy environment. While we, as a family, sometimes fear her scoldings, we also appreciate them because they come from a place of love and concern.<br />
                                            I aspire to work hard and provide her with the best possible life in the future, as a way of showing my gratitude for everything she has done for us.
                                        </p>
                                    </div>
                                </div>

                                {/* Sister's Section */}
                                <div>
                                    <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                                        <Image data-aos='flip-up' alt="Sister's photo" src="/Image/about/sister.png" width={500} height={300} />
                                    </div>
                                    <div>
                                        <h3 className="text-[20px]">Sister</h3>
                                        <p className="text-sm">
                                            My sister&#39;s name is Mst. Sumaya Akter. She is {years3} years, {months3} months, {days3} days old, born on October 16, 2008.
                                            She is a dedicated student who takes her studies seriously and is always eager to learn new things. Her height is 5 feet 2 inches, and she weighs 40 kg. Her blood type is O+ positive.<br />
                                            She has a charming personality and radiates positive energy. She is naturally curious and has a remarkable ability to learn new skills on her own. Although she gets angry quickly, she also cools down just as fast, showing her forgiving nature. She has a very kind and caring heart. One of her special talents is cooking — her dishes are always delicious and full of flavor.<br />
                                            I sincerely wish that her future is bright, filled with happiness, success, and all the wonderful things life has to offer.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </article>

                        {/* about the website */}
                        <article data-aos="fade-in" className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-cyan-500 font-bold mb-2">About the website </h2>

                            <div className="relative overflow-x-auto">
                                <table className="w-full text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Frontend</th>
                                            <th scope="col" className="px-6 py-3">Backend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 'border-none' : ''}`}
                                        >
                                            <td className="px-6 py-4"> Next.js (for frontend), Talwind CSS (for style), Custom CSS (for responsive design), AOS (for animation), Hero Icons (for set icons), Vercel (for hosting)</td>
                                            <td className="px-6 py-4">PostgreSql, Supabase (store, database, authentication), GitHub (for version control)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div><br />
                            All content on this website has been created and developed by Sohel Rana. This platform is dedicated to sharing my biography, daily life updates, and cherished memories. Rest assured, the website is 100% safe to visit, and the data is highly protected using advanced security technologies to ensure privacy and safety.
                        </article>


                    </div>
                </section>
            </main>
        </>
    );
}