import Head from "next/head";
import { AdjustmentsIcon, GlobeAltIcon, ClockIcon, BriefcaseIcon, UsersIcon, TranslateIcon, LightBulbIcon } from '@heroicons/react/outline';
import Link from "next/link";
import Image from "next/image";

export default function Skill() {
    return (
        <>
            <Head>
                <title>Skill | Sohel</title>
            </Head>
            <main className="p-5">

                {/* academic qualification section............. */}

                {/* card section............................ */}
                <div className="flex  flex-wrap">

                    {/* card box........................ */}
                    <div href="#" class="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div>
                            <div className="text-cyan-500 font-bold mb-2">
                                Short Interduction
                            </div>
                            Hi, my name is Sohel Rana. I live in Tongi, Gazipur, Dhaka, and I was born in Mohammadupur, Magura, Khulna. I completed my graduation at Government Rajendra College in Faridpur. Currently, I work as a Store Executive at Tususka Group, where I am a full-time employee.
                            I am now seeking to join a company where I can apply my talents, enhance my skills, and gain valuable experience. My ultimate goal is to establish my own tech company, focusing on areas such as e-commerce, student management software, and web and software development. I am also taking proactive steps towards achieving this future goal.

                        </div>
                    </div>



                    {/* for body measurment card box........................ */}
                    <div href="#" class="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div>
                            <div className="text-cyan-500 font-bold mb-2">
                                Body Measurment
                            </div>
                            <div className="flex flex-wrap">
                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/age.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Age</div>
                                        <div className="text-sm">22 year, 2 month, 1 day</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/colortone.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Skin Color Tone</div>
                                        <div className="text-sm">Light Brown</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-4">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/hair.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Hair Color</div>
                                        <div className="text-sm">Dark Black (Medium Wave)</div>
                                    </div>
                                </div>


                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/height.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Height</div>
                                        <div className="text-sm">5 Feet 6 Inch</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/weight.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Weight</div>
                                        <div className="text-sm">60 Kg (132 Lbs)</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/chest.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Chest</div>
                                        <div className="text-sm">39 Inch</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/biceps.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Biceps</div>
                                        <div className="text-sm">13 Inch</div>
                                    </div>
                                </div>

                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/shoes.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Shoes Size</div>
                                        <div className="text-sm">42 (Apex)</div>
                                    </div>
                                </div>


                                <div className="flex w-[280px] m-2 h-[70px] rounded shadow-md">
                                    <div className="w-[25%] overflow-hidden p-2">
                                        <Image alt="photo" className="mt-[-5px]" src="/Image/about/shirt.png" width="100" height="100" />
                                    </div>
                                    <div className="p-2">
                                        <div className="font-bold">Shirt Size</div>
                                        <div className="text-sm">M (48)</div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>


                    {/* for favorit card box........................ */}
                    <div href="#" class="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div>
                            <div className="text-cyan-500 font-bold mb-2">
                                My Favorit
                            </div>
                            {/* fooditem card........... */}
                            <div>
                                # Food Item<br />
                                <div className="flex flex-wrap">
                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/biriyani.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Food:</strong> Biriany, Chiken Roast, Bhuna dal</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/pasta.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Fast Food:</strong> Pasta, Noodloos</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/jhalmuri.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Street Food:</strong> Jhalmuri, Singara</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/sevenup.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Drink:</strong> Water, Coffee, 7Up</div>
                                    </div>


                                </div>
                            </div>



                            {/* entertainment section.............. */}
                            <div className="mt-10">
                                # Entertainment<br />
                                <div className="flex flex-wrap">
                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/avenger.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Movie:</strong> Avenger Endgame</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/the_king.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Drama:</strong> The King Eternal Monarch</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/carton.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Animation Carton:</strong> Shinchan, Doraemon</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/song.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Song:</strong> Main Agar- Tubelight</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/actor.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Actor:</strong> robert downey jr, Sharuk Khan</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/actress.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Actoress:</strong> kim Ji-won, yami gaoutam</div>
                                    </div>

                                    {/* food card.......... */}
                                    <div className="w-[280px] h-[180px] shadow-lg m-3 rounded overflow-hidden">
                                        <div className="h-[82%] bg-black overflow-hidden">
                                            <Image alt="photo" src="/Image/about/singer.png" width="280" height="100" />
                                        </div>
                                        <div className="text-[12px] p-1"><strong>Singer:</strong> Ed Sheeran, Arijit Singh</div>
                                    </div>


                                </div>
                            </div>



                        </div>
                    </div>



                    {/* for family card box........................ */}
                    <div className="block h-auto m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div>
        <div className="text-cyan-500 font-bold mb-2">
            Family Member
        </div>
        <div>
            {/* Father's Section */}
            <div className="mb-14">
                <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                    <Image alt="Father's photo" src="/Image/about/father.jpeg" height={150} width={140} />
                </div>
                <div>
                    <div className="text-[20px]">Father</div>
                    <p className="text-sm">
                        My father&#39;s name is Md. Sukur Ali. He is 52 years, 11 months, 5 days old and was born on February 18, 1972. 
                        He works as a building contractor and has previously worked in building construction for many years. His height is 5 feet 8 inches, and he weighs 75 kg. His blood type is O+ positive.<br />
                        He is a very charming and kind person, always ready to lend a helping hand. To me, he is a true hero. He has sacrificed his whole life for our family, working tirelessly to ensure we have a bright future. Even after long days at work, he comes home with a smile, choosing not to share the challenges he faces. His positivity is inspiring and reminds me of the importance of resilience.<br />
                        I feel incredibly fortunate to have him as my father. I want to express my gratitude for everything he has done for us, and I strive to make him proud every day.
                    </p>
                </div>
            </div>

            {/* Mother's Section */}
            <div className="mb-14">
                <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                    <Image alt="Mother's photo" src="/Image/about/mother.jpg" height={150} width={140} />
                </div>
                <div>
                    <div className="text-[20px]">Mother</div>
                    <p className="text-sm">
                        My mother&#39;s name is Mst. Morium Begum. She is 40 years, 6 months, 17 days old, born on July 06, 1984. 
                        She is a homemaker and takes care of our family with great love and dedication. Her height is 5 feet, and she weighs 53 kg. Her blood type is O+ positive.<br />
                        She is a very cheerful person, always full of energy and capable of making friends with anyone she meets. Her friendly nature makes her a joy to be around. Throughout her life, she has sacrificed so much for our well-being and to ensure that we grow up in a happy and healthy environment. While we, as a family, sometimes fear her scoldings, we also appreciate them because they come from a place of love and concern.<br />
                        I aspire to work hard and provide her with the best possible life in the future, as a way of showing my gratitude for everything she has done for us.
                    </p>
                </div>
            </div>

            {/* Sister's Section */}
            <div>
                <div className="w-[140px] h-[150px] rounded overflow-hidden float-left m-2 mt-0 ml-0 mr-5">
                    <Image alt="Sister's photo" src="/Image/about/sister.png" height={150} width={140} />
                </div>
                <div>
                    <div className="text-[20px]">Sister</div>
                    <p className="text-sm">
                        My sister&#39;s name is Mst. Sumaya Akter. She is 16 years, 3 months, 7 days old, born on October 16, 2008. 
                        She is a dedicated student who takes her studies seriously and is always eager to learn new things. Her height is 5 feet 2 inches, and she weighs 40 kg. Her blood type is O+ positive.<br />
                        She has a charming personality and radiates positive energy. She is naturally curious and has a remarkable ability to learn new skills on her own. Although she gets angry quickly, she also cools down just as fast, showing her forgiving nature. She has a very kind and caring heart. One of her special talents is cooking — her dishes are always delicious and full of flavor.<br />
                        I sincerely wish that her future is bright, filled with happiness, success, and all the wonderful things life has to offer.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>






                </div>
            </main>
        </>
    );
}