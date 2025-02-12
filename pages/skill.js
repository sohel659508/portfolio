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
            <main className="p-5 skill_mainsection">

                {/* academic qualification section............. */}
                <div>
                    <div className="text-[17px] font-bold flex"><BriefcaseIcon className="h-6 w-6 mr-3" />  Professional Skill</div>
                    {/* card section............................ */}
                    <div className="flex  flex-wrap">
                        {/* card box........................ */}
                        <div class="block h-[620px] m-2 cursor-pointer w-[32%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]"><ClockIcon className="h-5 w-5 mr-2" /> 2023-Continue</div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src='/Image/default/tusuka_logo.png' alt="Logo" width="120" height="50"></Image>
                            </div>
                            <div className="text-cyan-500 font-bold">
                                Store Executive
                            </div>
                            <div class="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Received Accessories:</strong> Verify and record accessories upon receipt, ensuring accuracy according to the challan.</li>
                                    <li><strong>Inventory Management:</strong> Create and maintain inventory reports and bin cards.
                                        Update registers and ERP software for received, issued, and stock reports.
                                    </li>
                                    <li><strong>Accessories Distribution:</strong> Distribute accessories to sample, sewing, finishing, and packing sections.</li>
                                    <li><strong>Material Shortlist:</strong> Maintain a shortlist of in-house materials for timely availability.</li>
                                    <li><strong>Reporting:</strong> Generate various types of reports and share them with merchandisers and management.</li>
                                    <li><strong>Financial Documentation:</strong> Create bills of exchange.</li>
                                    <li><strong>Additional Tasks:</strong> Perform other duties as assigned by management.</li>
                                </ul>

                            </div>
                            <Link href="" class="text-gray-700 dark:text-gray-400 underline-offset-2 underline">View Result</Link>
                        </div>


                        {/* card box........................ */}
                        <div class="block h-[620px] m-2 cursor-pointer w-[32%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]"><ClockIcon className="h-5 w-5 mr-2" />  2022-2023</div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src='/Image/default/tusuka_logo.png' alt="Logo" width="120" height="50"></Image>
                            </div>
                            <div className="text-cyan-500 font-bold">
                                Data Entry Executive
                            </div>
                            <div class="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Data Entry:</strong> Enter data into ERP software, updating store accessories, fabric, and general store items while maintaining a manual Excel sheet.</li>
                                    <li><strong>Reporting:</strong>
                                        <ul>
                                            <li>Create daily received and issued reports.</li>
                                            <li>Generate monthly and yearly closing/stock reports.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Export Information:</strong> Prepare daily export information and share it with management and other concerned parties.</li>
                                    <li><strong>Financial Documentation:</strong> Create bills of exchange.</li>
                                    <li><strong>Inventory Management:</strong> Prepare inventory reports and manage other store-related tasks.</li>
                                    <li><strong>Additional Duties:</strong> Perform other tasks as assigned by management.</li>
                                </ul>

                            </div>
                            <Link href="" class="text-gray-700 dark:text-gray-400 underline-offset-2 underline">View Result</Link>
                        </div>

                        {/* card box........................ */}
                        <div class="block h-[620px] m-2 cursor-pointer w-[32%] skillprofessionlayer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex text-[14px]"><ClockIcon className="h-5 w-5 mr-2" />  2019-2022</div>
                            <div className="float-right mt-[-30px] w-[120px] h-[50px] rounded overflow-hidden items-center flex">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src='/Image/default/tvs_logo.png' alt="Logo" width="120" height="50"></Image>
                            </div>
                            <div className="text-cyan-500 font-bold">
                                Computer Operator
                            </div>
                            <div class="text-gray-700 p-3 dark:text-gray-400 mb-2">
                                <ul className="list list-disc">
                                    <li><strong>Office Records:</strong> Maintain all types of office records using Excel sheets.</li>
                                    <li><strong>Salary Management:</strong> Create monthly salary sheets.</li>
                                    <li><strong>Expense Tracking:</strong>
                                        <ul>
                                            <li>Maintain daily expenses.</li>
                                            <li>Keep records and submit them to the admin and accounts departments.</li>
                                        </ul>
                                    </li>
                                    <li><strong>General Store Management:</strong> Oversee general store items, including stationery and office supplies.</li>
                                    <li><strong>Worker Management:</strong>
                                        <ul>
                                            <li>Track daily worker attendance.</li>
                                            <li>Inform the cook and other relevant personnel about lunch requirements.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Additional Tasks:</strong> Perform other official tasks as assigned by management.</li>
                                </ul>

                            </div>
                            <Link href="" class="text-gray-700 dark:text-gray-400 underline-offset-2 underline">View Result</Link>
                        </div>



                    </div>
                </div>

                {/* hard skill section................................ */}
                <div className="text-[17px] font-bold flex mt-11"><AdjustmentsIcon className="h-6 w-6 mr-3" />  Hard Skill</div>
                {/* card box........................ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                        <GlobeAltIcon className="h-12" />
                    </div>
                    <div className="text-cyan-500 font-bold">
                        Web Design & Development
                    </div><br />
                    <div className="flex flex-wrap">
                        {/* skill card................. */}
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            HTML- (100%)<br />
                            <progress value="100" max="100"></progress>
                        </div>

                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            CSS- (95%)<br />
                            <progress value="95" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Bootstrap- (90%)<br />
                            <progress value="90" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Tailwind CSS- (90%)<br />
                            <progress value="90" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            JS- (70%)<br />
                            <progress value="70" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            React (NextJs)- (90%)<br />
                            <progress value="95" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Flutter- (80%)<br />
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Python- (60%)<br />
                            <progress value="60" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            PHP- (85%)<br />
                            <progress value="85" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            MySqli- (90%)<br />
                            <progress value="90" max="100"></progress>
                        </div>
                    </div>
                </div>

                {/* for mobile app developer skill.........../ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                            <g fill="#94d82d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M16.28125,0.03125c-0.12891,0.02344 -0.26172,0.04688 -0.375,0.125c-0.45703,0.30859 -0.55859,0.94922 -0.25,1.40625l2.15625,3.21875c-3.33203,1.76563 -5.81641,4.69922 -6.625,8.21875h27.625c-0.80859,-3.51953 -3.29297,-6.45312 -6.625,-8.21875l2.15625,-3.21875c0.30859,-0.45703 0.20703,-1.09766 -0.25,-1.40625c-0.46094,-0.30859 -1.09766,-0.17578 -1.40625,0.28125l-2.375,3.5c-1.64844,-0.60156 -3.4375,-0.9375 -5.3125,-0.9375c-1.875,0 -3.66406,0.33594 -5.3125,0.9375l-2.375,-3.5c-0.23047,-0.34375 -0.64844,-0.48047 -1.03125,-0.40625zM19.5,8c0.82813,0 1.5,0.67188 1.5,1.5c0,0.83203 -0.67187,1.5 -1.5,1.5c-0.83203,0 -1.5,-0.66797 -1.5,-1.5c0,-0.82812 0.66797,-1.5 1.5,-1.5zM30.5,8c0.83203,0 1.5,0.67188 1.5,1.5c0,0.83203 -0.66797,1.5 -1.5,1.5c-0.82812,0 -1.5,-0.66797 -1.5,-1.5c0,-0.82812 0.67188,-1.5 1.5,-1.5zM8,15c-1.65625,0 -3,1.34375 -3,3v14c0,1.65625 1.34375,3 3,3c0.35156,0 0.6875,-0.07422 1,-0.1875v-19.625c-0.3125,-0.11328 -0.64844,-0.1875 -1,-0.1875zM11,15v22c0,1.65234 1.34766,3 3,3h22c1.65234,0 3,-1.34766 3,-3v-22zM42,15c-0.35156,0 -0.6875,0.07422 -1,0.1875v19.625c0.3125,0.10938 0.64844,0.1875 1,0.1875c1.65625,0 3,-1.34375 3,-3v-14c0,-1.65625 -1.34375,-3 -3,-3zM15,42v4c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4v-4zM27,42v4c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4v-4z"></path></g></g>
                        </svg>
                    </div>
                    <div className="text-cyan-500 font-bold">
                        Mobile Application Developed
                    </div><br />
                    <div className="flex flex-wrap">
                        {/* skill card................. */}
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Reactnative- (60%)<br />
                            <progress value="60" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Flutter- (80%)<br />
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            PHP Api- (70%)<br />
                            <progress value="70" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            MySqli- (90%)<br />
                            <progress value="90" max="100"></progress>
                        </div>
                    </div>
                </div>


                {/* for computer app developer skill.........../ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className="float-right mt-[-10px] w-[120px] h-[50px] rounded overflow-hidden items-center flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="window" width="70" height="70">
                            <g id="Layer_2">
                                <g id="Layer_1-2">
                                    <rect width="28.87" height="28.87" fill="transparent" rx="6.48" ry="6.48" ></rect>
                                    <path d="M13.23 14.17V8.91l-5.39.76v4.5h5.39zM7.84 14.73v4.5l5.39.75v-5.25H7.84zM13.87 14.77v5.3l7.16.99v-6.29h-7.16zM21.03 14.11v-6.3l-7.16 1.01v5.29h7.16z" fill="#04aef4"></path>
                                </g>
                            </g>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linux" width="45" height="80">
                            <path fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" d="M2.5 21.5c.2-.8.2-1.7 0-2.5 0-.8 1.7-.7 2-1s.2-1.5 1-1.5S6.8 19.1 8 20c1.8 1.2 1.6 3.5.5 3.5s-2.4-.9-3-1-3-.1-3-1zm14-4.5c-.8 0-1 4.8-1 5s-.3 1.5 1 1.5 1.8-.8 2.5-1.5 2.5-.8 2.5-1.5-1-1-1.5-1.5.3-2-.5-2"></path>
                            <path fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" d="M14 7c1.7 3 2.6 6.5 2.5 10 0 0-.1 1.5 1 1.5s2 .2 2-2.5c0-5.1-4-6.7-4-9 0-1.5.2-6.5-3.5-6.5-1.7 0-3 .6-3 5.5 0 2.1-1.3 3.7-2 5.5-.7 1.6-1.2 3.3-1.5 5"></path>
                            <path fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" d="M11.5 5.5c-1 0-2.5.9-2.5 1.5s1.6 1.5 2 1.5 3-1.2 3-1.5c0-1-2.5-1.5-2.5-1.5z"></path>
                            <ellipse cx="13" cy="4.5" fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" rx=".5" ry="1"></ellipse>
                            <ellipse cx="10" cy="4.5" fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" rx=".5" ry="1"></ellipse>
                            <path fill="none" stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" d="M9.1 21.3c1 .2 4.8.6 6.6-1.4M9 23.3c.4-.5 2.2-.8 3-.8h3.4"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 192.756 192.756" id="mac" >
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
                                <path fill="transparent" d="M102.135 91.37c-13.534.527-28.121-2.021-40.423-8.173l2.548-4.042c11.951 5.624 25.66 7.558 37.875 7.03 0 .439.525-8.261 1.316-13.006H85.086c1.669-19.157 7.557-36.205 16.345-50.704H46.509v83.658h57.733c-1.318-5.01-2.107-14.939-2.107-14.763z"></path>
                                <path fill="#00acec" d="M107.67 85.833c10.018-.967 18.805-3.603 24.166-7.03L135 82.845c-7.383 4.307-16.961 7.118-27.33 8.173.264 5.185 1.055 10.105 2.373 15.115h39.543V22.475h-42.092c-8.963 13.709-14.06 28.999-15.993 45.168h18.894c-1.583 6.151-2.549 12.215-2.725 18.19zM71.465 35.129h5.361V47.52h-5.361V35.129z"></path>
                                <path d="M116.105 35.129h5.362V47.52h-5.362V35.129z"></path>
                                <path d="M107.67 85.833c10.018-.967 18.805-3.603 24.166-7.03L135 82.845c-7.383 4.307-16.961 7.118-27.33 8.173.439 9.314 2.725 18.541 7.293 27.417l-4.568 2.459c-8.348-13.18-9.842-30.931-6.943-47.715H85.086c2.285-26.099 12.302-48.244 26.89-65.467l3.953 3.427C101.695 27.66 93.874 46.905 91.501 67.643h18.894c-1.583 6.151-2.549 12.215-2.725 18.19z"></path>
                                <path fill="#00acec" d="M102.135 86.185v5.185c-13.534.527-28.121-2.021-40.423-8.173l2.548-4.042c11.95 5.624 25.659 7.557 37.875 7.03z"></path>
                                <path d="M15.752 134.252c-2.46.176-3.69.264-5.272.264-.967 0-1.934 0-3.076-.088H5.647c-.879 0-1.318.352-1.318 1.23 0 .791.439 1.23 1.494 1.318l1.845.176c2.988.264 3.251.527 3.251 3.076 0 .352-.087 1.23-.087 2.197l-1.67 29.613c-.352 5.975-.439 6.502-.967 7.205-.264.439-1.054.879-2.285 1.055l-1.142.176c-1.67.352-1.934.615-1.934 1.582 0 .703.439 1.143 1.143 1.143h.439l1.055-.088c1.318-.088 3.339-.176 4.833-.176s4.569.088 5.448.176l1.23.088.439.088c.703.088 1.318-.527 1.318-1.318 0-.879-.439-1.23-1.494-1.406l-1.406-.176c-3.251-.352-3.603-.879-3.603-4.395 0-1.141 0-2.723.088-3.777l.966-28.822 12.566 37.961c.352 1.055.527 1.23.967 1.23.527 0 .615-.176 1.055-1.318l12.917-37.787.176 29.176v2.812c0 3.777-.352 4.48-2.724 4.832l-1.143.176c-1.23.176-1.669.527-1.669 1.494 0 .791.439 1.143 1.318 1.23h.352l.967-.176c1.143-.088 4.481-.264 6.063-.264 1.406 0 2.285 0 3.427.176 1.142.088 2.021.088 2.285.088h1.055c.878 0 1.318-.352 1.318-1.23 0-.791-.439-1.143-1.845-1.318l-1.23-.176c-1.845-.176-2.46-.791-2.724-2.021-.176-1.229-.176-2.723-.264-7.996l-.176-25.484-.088-3.602c0-3.516.176-3.779 2.987-4.131l1.67-.176c1.23-.176 1.582-.527 1.582-1.406 0-.791-.264-1.055-1.318-1.143h-.264l-1.055.088c-1.318 0-2.373.088-3.603.088-1.318 0-2.461-.088-4.746-.176l-12.917 37.523-12.477-37.611zm96.049 11.424v-5.008h-.967l-1.23 4.217h-.088l-1.318-4.217h-.967v5.008h.615v-2.898-1.23l1.406 4.129h.527l1.406-4.217v4.216h.616zm-47.365 33.217c1.406-.615 2.9-1.756 3.955-2.986.703-1.055.966-1.758.966-3.076l.176-7.908c-2.46 1.229-3.867 2.02-5.097 2.898-.439.264-.791.615-1.142.879-2.637 2.197-3.955 4.658-3.955 6.943 0 2.283 1.23 3.777 2.988 3.777.615 0 1.318-.176 2.109-.527zm0-14.059c1.494-.879 3.251-1.758 5.097-2.549v-6.328c0-4.305-.967-6.15-3.339-6.15-.615 0-1.23.088-1.757.264-2.373.879-4.13 3.34-4.746 6.941l-.264 1.318c-.352 1.582-.703 1.934-1.933 1.934h-1.23c-.967 0-1.494-.527-1.494-1.406 0-1.494 1.494-5.096 3.164-7.117 1.757-2.109 4.042-3.604 6.503-4.307.966-.264 2.021-.439 3.076-.439 2.636 0 3.954.352 5.097 1.318 1.669 1.406 2.109 2.725 2.109 7.029v.527l-.176 15.994c0 5.186 0 5.186.176 5.887.088.703.615 1.406 1.318 1.494 1.318.176 1.846-.352 2.373-1.318.439-1.141 1.846-1.141 1.67.088-.088 1.318-.439 2.373-1.582 3.691-1.406 1.582-3.339 2.021-5.272 2.021-2.637 0-3.867-1.67-3.867-5.186-1.318 1.67-3.076 3.076-4.921 4.043-1.669.791-3.515 1.318-5.185 1.318-3.427 0-5.712-2.461-5.712-6.24-.002-4.391 3.864-8.962 10.895-12.827zm38.224-23.551h1.67v4.393h.615v-4.393h1.67v-.615h-3.955v.615zm1.406 36.203c-1.582 2.197-3.865 4.043-7.557 3.955-7.205-.264-10.105-8.084-10.105-16.783 0-8.525 3.779-14.764 8.875-15.027 1.757-.088 3.076.527 4.218 1.67 1.143 1.055 2.021 2.461 2.461 3.602.877 2.549 3.338 4.395 2.986-3.25-.176-2.812-3.602-4.834-7.469-4.746-9.754.264-16.521 7.908-16.521 19.859 0 10.459 5.185 17.4 12.917 17.4 2.987 0 6.591-.176 9.05-2.109 1.934-1.406 2.461-2.109 2.812-3.604.443-1.932-1.139-1.668-1.667-.967z"></path>
                                <path fill="#00acec" d="M139.656 132.406c-12.479.264-21.441 11.072-21.441 26.188 0 15.643 8.699 26.451 21.09 26.451h.352c6.328-.088 11.248-2.637 15.467-8.084 4.041-5.098 5.799-10.723 5.799-18.455 0-7.117-1.494-12.654-4.48-17.223-3.779-5.713-9.58-8.877-16.434-8.877h-.353zm0 50.002c-4.568 0-7.645-1.758-10.633-6.152-3.164-4.656-4.568-10.105-4.568-17.574 0-13.797 6.15-23.375 15.201-23.639h.352c4.131 0 7.469 1.846 10.193 5.625 3.164 4.217 4.658 10.105 4.658 17.838 0 7.119-1.23 12.566-4.043 16.961-2.988 4.832-6.326 6.941-11.16 6.941zm47.629-47.013c-2.725-1.758-5.271-2.461-8.787-2.461-7.91 0-13.797 5.889-13.797 14.061 0 5.625 2.549 9.051 8.963 12.303l4.131 1.934c5.008 2.549 7.117 5.359 7.117 9.93 0 6.24-3.779 10.633-8.963 10.633-2.725 0-5.098-1.055-6.59-3.076-1.318-1.668-2.373-4.305-2.812-6.502l-.176-1.67c-.264-1.494-.527-1.934-1.406-1.934-.791 0-1.23.703-1.23 2.109l.264 10.896c3.428 2.021 6.854 2.988 10.984 2.988 5.186 0 9.051-1.758 11.688-5.361 2.109-2.812 3.252-6.326 3.252-10.105 0-6.502-2.549-10.457-8.525-13.533l-2.723-1.406c-4.922-2.459-5.977-3.162-7.207-4.568-1.229-1.406-1.844-3.252-1.844-5.537 0-4.92 3.162-8.436 7.381-8.436 4.129 0 7.293 3.076 7.996 7.646l.176 1.229c.088.967.439 1.406 1.143 1.406.879 0 1.055-.088 1.23-1.582v-.176l-.265-8.788z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="text-cyan-500 font-bold">
                        Software Development
                    </div><br />
                    <div className="flex flex-wrap">
                        {/* skill card................. */}
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            Python- (60%)<br />
                            <progress value="60" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            TKinter- (80%)<br />
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            PHP Api- (70%)<br />
                            <progress value="70" max="100"></progress>
                        </div>
                        <div className="m-2 w-[200px] h-[70px] p-2 overflow-hidden rounded skillsmallcard">
                            MySqli- (90%)<br />
                            <progress value="90" max="100"></progress>
                        </div>
                    </div>

                </div>


                {/* for Technical skill......................... */}
                <div className="text-[17px] font-bold flex mt-11"><LightBulbIcon className="h-6 w-6 mr-3" />  Technical Skill</div>
                {/* card box........................ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-wrap">
                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/os.png" alt="Logo" width='100' height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1">All Operating System</div>
                        </div>
                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/office.png" alt="logo" width='100' height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden">All MS Office Application</div>
                        </div>

                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/hardware.png" alt="logo" width='100' height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden">PC Hardware</div>
                        </div>
                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/ps.png" width='100' alt="logo" height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden">
                                Adobe Photoshop</div>
                        </div>

                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/vs.png" width='100' alt="logo" height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden text-center">Visual Studieo</div>
                        </div>

                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/vp.png" alt="logo" width='100' height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden text-center">Video Editing</div>
                        </div>

                        {/* skill card.......... */}
                        <div className="w-[120px] h-[130px] overflow-hidden rounded hardskillsection m-4">
                            <div className="h-[78%] flex justify-center skillhardimage">
                                <Image onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: "none", pointerEvents: "none" }} src="/Image/skill/wearing.png" alt="logo" width='100' height='100' />
                            </div>
                            <div className="h-[23%] text-[12px] p-1 line-clamp-1 whitespace-nowrap overflow-hidden text-center">Electric Wiring</div>
                        </div>






                    </div>

                </div>







                {/* for soft skill......................... */}
                <div className="text-[17px] font-bold flex mt-11"><UsersIcon className="h-6 w-6 mr-3" />  Soft Skill</div>
                {/* card box........................ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 className="text-[20px]">#Communication</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Effective Communication:</strong> Ability to clearly and concisely convey information, both verbally and in writing, to different audiences.</li>
                        <li><strong>Active Listening:</strong> Paying full attention to the speaker, understanding their message, and responding thoughtfully.</li>
                        <li><strong>Presentation Skills:</strong> Delivering information or ideas confidently and engagingly in front of an audience.</li>
                    </ul>

                    <h2 className="text-[20px]">#Teamwork</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Collaboration:</strong> Working effectively with others towards a common goal, sharing information, and supporting team members.</li>
                        <li><strong>Conflict Resolution:</strong> Addressing and resolving disagreements in a constructive manner to maintain a positive team environment.</li>
                        <li><strong>Adaptability:</strong> Being flexible and open to changes in roles, responsibilities, and work conditions.</li>
                    </ul>

                    <h2 className="text-[20px]">#Problem-Solving</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Critical Thinking:</strong> Analyzing situations logically and making informed decisions based on evidence and reasoning.</li>
                        <li><strong>Creativity:</strong> Generating innovative ideas and solutions to overcome challenges or improve processes.</li>
                        <li><strong>Decision-Making:</strong> Making choices that are well-considered and aligned with goals and values.</li>
                    </ul>

                    <h2 className="text-[20px]">#Leadership</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Motivating Others:</strong> Inspiring and encouraging team members to achieve their best and stay engaged in their work.</li>
                        <li><strong>Delegation:</strong> Assigning tasks and responsibilities effectively while empowering team members to take ownership.</li>
                        <li><strong>Visionary Thinking:</strong> Setting a clear direction and long-term goals for a team or project and inspiring others to work towards them.</li>
                    </ul>

                    <h2 className="text-[20px]">#Emotional Intelligence</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Self-Awareness:</strong> Recognizing and understanding your own emotions and how they affect your behavior and decisions.</li>
                        <li><strong>Empathy:</strong> Understanding and sharing the feelings of others to build strong relationships and provide support.</li>
                        <li><strong>Stress Management:</strong> Handling pressure and maintaining a positive attitude, even in challenging situations.</li>
                    </ul>

                    <h2 className="text-[20px]">#Time Management</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Prioritization:</strong> Identifying and focusing on tasks that are most important and aligning efforts with key objectives.</li>
                        <li><strong>Organization:</strong> Keeping work and information systematically arranged to improve efficiency and productivity.</li>
                        <li><strong>Deadline Management:</strong> Meeting deadlines and managing time effectively to complete tasks on schedule.</li>
                    </ul>

                    <h2 className="text-[20px]">#Interpersonal Skills</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Networking:</strong> Building and maintaining professional relationships that can provide support, advice, and opportunities.</li>
                        <li><strong>Negotiation:</strong> Reaching agreements that satisfy all parties involved by understanding their needs and finding common ground.</li>
                        <li><strong>Respectfulness:</strong> Treating others with courtesy and consideration, regardless of their role or position.</li>
                    </ul>

                    <h2 className="text-[20px]">#Work Ethic</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Reliability:</strong> Being dependable and consistently performing tasks and responsibilities to the best of your ability.</li>
                        <li><strong>Integrity:</strong> Demonstrating honesty and strong moral principles in all professional interactions.</li>
                        <li><strong>Responsibility:</strong> Taking ownership of your work and being accountable for your actions and their outcomes.</li>
                    </ul>
                </div>


                {/* for Language skill......................... */}
                <div className="text-[17px] font-bold flex mt-11"><TranslateIcon className="h-6 w-6 mr-3" />  Language Skill</div>
                {/* card box........................ */}
                <div class="block h-auto skillcardsection m-2 cursor-pointer w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h2 className="text-[20px]">#Bangla (Native Language)</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Reading:</strong> Fluent in reading Bangla literature, newspapers, and online content. Comfortable with both formal and informal texts.</li>
                        <li><strong>Listening:</strong> Highly proficient in understanding spoken Bangla in various contexts, including conversations, media, and presentations.</li>
                        <li><strong>Speaking:</strong> Fluent in speaking Bangla, capable of engaging in detailed conversations, presentations, and discussions.</li>
                    </ul>

                    <h2 className="text-[20px]">#English</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Reading:</strong> Fluent in reading English literature, newspapers, and online content. Comfortable with both formal and informal texts.</li>
                        <li><strong>Listening:</strong> Highly proficient in understanding spoken English in various contexts, including conversations, media, and presentations.</li>
                        <li><strong>Speaking:</strong> Can speak English at a basic level, capable of engaging in simple conversations.</li>
                    </ul>

                    <h2 className="text-[20px]">#Hindi</h2>
                    <ul className="list list-disc m-2 ml-10">
                        <li><strong>Reading:</strong> Fluent in reading Hindi literature, newspapers, and online content. Comfortable with both formal and informal texts.</li>
                        <li><strong>Listening:</strong> Highly proficient in understanding spoken Hindi in various contexts, including conversations, media, and presentations.</li>
                        <li><strong>Speaking:</strong> Can speak Hindi at a basic level, capable of engaging in simple conversations.</li>
                    </ul>

                </div>




            </main>
        </>
    );
}