import Head from "next/head";
import React from 'react';

import {
    ChatAltIcon,
    LocationMarkerIcon,
    MenuAlt1Icon,
    NewspaperIcon,
    PhotographIcon,
    ShareIcon,
    ThumbUpIcon,
    VideoCameraIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps() {
    const res = await fetch("https://mrsohelrana.com/memoryapi");
    const data = await res.json();

    return {
        props: {
            posts: data,
        },
    };
}

export default function Memory({ posts }) {
    return (
        <>
            <Head>
                <title>Memory | Sohel</title>
            </Head>
            <main>
                <div className="flex justify-between">
                    {/* Left side */}
                    <div className="w-[32%] shadow-md p-2 h-screen fixed left-0">
                        <div>
                            <div className="rounded p-2 text-[18px] flex items-center mb-2">
                                <MenuAlt1Icon className="h-8 w-8 mr-5" /> Menu Bar
                            </div>
                            <Link
                                href=""
                                className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex"
                            >
                                <NewspaperIcon className="h-6 w-6 mr-3" /> All Post
                            </Link>
                            <Link
                                href=""
                                className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex"
                            >
                                <PhotographIcon className="h-6 w-6 mr-3" /> Photo
                            </Link>
                            <Link
                                href=""
                                className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex"
                            >
                                <VideoCameraIcon className="h-6 w-6 mr-3" /> Video
                            </Link>
                            <Link
                                href=""
                                className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex"
                            >
                                <LocationMarkerIcon className="h-6 w-6 mr-3" /> Live Location
                            </Link>
                        </div>
                    </div>

                    {/* Center side */}
                    <div className="w-[450px] p-2 h-screen ml-[33%]">
                        <div>
                            {posts.map((post) => (
                                // Card box
                                <div
                                    key={post.postid}
                                    className="rounded overflow-hidden h-auto shadow-xl mb-16 dark:shadow-slate-950 dark:border-2 dark:border-gray-800 border-2"
                                >
                                    <div className="p-1 flex h-[15%]">
                                        <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                            <Image
                                                src="/Image/index/facebook.png"
                                                width={100}
                                                height={100}
                                                alt="Profile Image"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="font-bold">Sohel Rana</div>
                                            <div className="text-sm text-gray-500">01 Jan 2025</div>
                                        </div>
                                    </div>

                                    {/* Center content */}
                                    <div>
                                        <div className="p-2 text-sm">{post.post_text}</div>
                                        <div className="cursor-pointer">
                                        <Link href={`/preview_image/${post.postid}`}>
                                                <div className="grid grid-cols-2 gap-1">
                                                <Image
                                                    src={`https://mrsohelrana.com/${post.photo1}`}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = 'none')}
                                                     loading="lazy"
                                                />
                                                <Image
                                                    src={`https://mrsohelrana.com/${post.photo2}`}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = 'none')}
                                                     loading="lazy"
                                                />
                                                <Image
                                                    src={`https://mrsohelrana.com/${post.photo3}`}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = 'none')}
                                                     loading="lazy"
                                                />
                                                <Image
                                                    src={`https://mrsohelrana.com/${post.photo4}`}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = 'none')}
                                                     loading="lazy"
                                                />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="p-1">
                                        <div className="flex justify-between">
                                            <div className="hover:scale-105 cursor-pointer w-[30%] flex p-1 rounded">
                                                <ThumbUpIcon className="h-6 w-6 mr-2" /> Like
                                            </div>
                                            <div className="hover:scale-105 cursor-pointer w-[30%] flex p-1 rounded">
                                                <ChatAltIcon className="h-6 w-6 mr-2" /> Comment
                                            </div>
                                            <div className="hover:scale-105 cursor-pointer w-[30%] flex p-1 rounded">
                                                <ShareIcon className="h-6 w-6 mr-2" /> Share
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
