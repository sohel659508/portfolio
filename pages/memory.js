import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NativeAds from "./ads/nativeads";
import Banner from "./ads/bannerads";
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
import { supabase } from "/lib/supabaseServer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatDate } from '/utility/dateUtils';
import useSWR from 'swr';

// SWR fetcher function for Supabase
const fetchUserPosts = async () => {
    const { data, error } = await supabase
        .from("user_post")
        .select("*")
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }

    // Generate public URLs for photos (if available)
    const postsWithPhotos = data.map((post) => ({
        ...post,
        photoUrl: post.photo1
            ? supabase.storage.from("post_photo").getPublicUrl(post.photo1).data.publicUrl
            : "",
        photoUrl2: post.photo2
            ? supabase.storage.from("post_photo").getPublicUrl(post.photo2).data.publicUrl
            : "",
        photoUrl3: post.photo3
            ? supabase.storage.from("post_photo").getPublicUrl(post.photo3).data.publicUrl
            : "",
        photoUrl4: post.photo4
            ? supabase.storage.from("post_photo").getPublicUrl(post.photo4).data.publicUrl
            : "",
    }));

    return postsWithPhotos;
};

const isVideo = (url) => {
    if (!url) return false;

    // Extract the file extension, ignoring any suffixes like -0, -1, etc.
    const extensionMatch = url.match(/\.([a-zA-Z0-9]+)(-\d+)?$/);
    if (!extensionMatch) return false;

    const extension = extensionMatch[1].toLowerCase(); // Get the extension without suffix
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'wmv', 'flv', 'webm'];
    return videoExtensions.includes(extension);
};

export default function Memory() {
    const router = useRouter();

    // Use SWR to fetch and cache posts
    const { data: posts, error, mutate } = useSWR('userPosts', fetchUserPosts);

    // Loading state
    const loading = !posts && !error;

    // State to track expanded posts
    const [expandedPosts, setExpandedPosts] = useState({});

    // Toggle expanded state for a specific post
    const toggleExpand = (postId) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId], // Toggle expanded state for the specific post
        }));
    };

    // Dynamic JSON-LD Structured Data for posts
    const generatePostSchema = (post) => ({
        "@context": "https://schema.org",
        "@type": "SocialMediaPosting",
        "headline": post.post_text || "Sohel Rana's Memory",
        "description": post.post_text || "Explore Sohel Rana's memories and posts.",
        "datePublished": post.created_at,
        "author": {
            "@type": "Person",
            "name": "Sohel Rana",
            "url": "https://www.mrsohelrana.com"
        },
        "image": post.photoUrl || "https://www.mrsohelrana.com/Image/index/facebook.png",
        "url": `https://www.mrsohelrana.com/memory/${post.id}`
    });

    // Loading Skeleton
    if (loading) {
        return (
            <div className="w-full sm:w-[450px] p-2 h-screen sm:ml-[33%] dark:bg-gray-900">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="rounded overflow-hidden h-auto shadow-xl mb-16 dark:bg-gray-800"
                    >
                        {/* Profile Section Skeleton */}
                        <div className="p-1 flex h-[15%]">
                            <Skeleton
                                circle
                                width={45}
                                height={45}
                                baseColor="#374151"
                                highlightColor="#4b5563"
                            />
                            <div className="ml-3">
                                <Skeleton
                                    width={100}
                                    height={20}
                                    baseColor="#374151"
                                    highlightColor="#4b5563"
                                />
                                <Skeleton
                                    width={80}
                                    height={15}
                                    baseColor="#374151"
                                    highlightColor="#4b5563"
                                />
                            </div>
                        </div>

                        {/* Post Text Skeleton */}
                        <div className="p-2">
                            <Skeleton
                                count={3}
                                baseColor="#374151"
                                highlightColor="#4b5563"
                            />
                        </div>

                        {/* Image Grid Skeleton */}
                        <div className="grid grid-cols-2 gap-1">
                            <Skeleton
                                height={200}
                                baseColor="#374151"
                                highlightColor="#4b5563"
                            />
                            <Skeleton
                                height={200}
                                baseColor="#374151"
                                highlightColor="#4b5563"
                            />
                        </div>

                        {/* Footer Buttons Skeleton */}
                        <div className="p-1">
                            <div className="flex justify-between">
                                <Skeleton
                                    width={80}
                                    height={30}
                                    baseColor="#374151"
                                    highlightColor="#4b5563"
                                />
                                <Skeleton
                                    width={80}
                                    height={30}
                                    baseColor="#374151"
                                    highlightColor="#4b5563"
                                />
                                <Skeleton
                                    width={80}
                                    height={30}
                                    baseColor="#374151"
                                    highlightColor="#4b5563"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Error handling
    if (error) {
        return <div>Error loading posts. Please try again later.</div>;
    }

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Memory | Sohel Rana</title>
                <meta name="robots" content="index, follow" />
                <meta name="title" content="Memory | Sohel Rana" />
                <meta name="description" content="Explore Sohel Rana's memories and posts. Stay updated with his latest photos, videos, and thoughts." />
                <meta name="keywords" content="Sohel Rana, Memory, Posts, Photos, Videos, Thoughts" />
                <meta name="author" content="Sohel Rana" />
                <link rel="canonical" href="https://www.mrsohelrana.com/memory" />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mrsohelrana.com/memory" />
                <meta property="og:title" content="Memory | Sohel Rana" />
                <meta property="og:description" content="Explore Sohel Rana's memories and posts. Stay updated with his latest photos, videos, and thoughts." />
                <meta property="og:image" content="https://www.mrsohelrana.com/Image/index/facebook.png" />

                {/* Twitter Meta Tags */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.mrsohelrana.com/memory" />
                <meta property="twitter:title" content="Memory | Sohel Rana" />
                <meta property="twitter:description" content="Explore Sohel Rana's memories and posts. Stay updated with his latest photos, videos, and thoughts." />
                <meta property="twitter:image" content="https://www.mrsohelrana.com/Image/index/facebook.png" />
                <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>

                {/* Dynamic JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Memory | Sohel Rana",
                        "description": "Explore Sohel Rana's memories and posts. Stay updated with his latest photos, videos, and thoughts.",
                        "url": "https://www.mrsohelrana.com/memory",
                        "image": "https://www.mrsohelrana.com/Image/index/facebook.png",
                        "author": {
                            "@type": "Person",
                            "name": "Sohel Rana",
                            "url": "https://www.mrsohelrana.com"
                        }
                    })}
                </script>

                {/* for google adsense........... */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8968230404518514"
                    crossorigin="anonymous"></script>
            </Head>

            <main>
                <div className="flex justify-between">
                    {/* Left side */}
                    <div className="w-[32%] shadow-md p-2 h-screen fixed left-0 leftlayoutscreememory">
                        <div>
                            <div className="rounded p-2 text-[18px] flex items-center mb-2">
                                <MenuAlt1Icon className="h-8 w-8 mr-5" /> Menu Bar
                            </div>
                            <Link href="" className="m-5 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <NewspaperIcon className="h-6 w-6 mr-3" /> All Post
                            </Link>
                            <Link href="" className="m-5 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <PhotographIcon className="h-6 w-6 mr-3" /> Photo
                            </Link>
                            <Link href="" className="m-5 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <VideoCameraIcon className="h-6 w-6 mr-3" /> Video
                            </Link>
                            <Link href="" className="m-5 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <LocationMarkerIcon className="h-6 w-6 mr-3" /> Live Location
                            </Link>
                        </div>
                        <NativeAds />

                    </div>

                    {/* Center side */}
                    <div className="w-[450px] p-2 h-screen ml-[33%] centerlayoutmemory">

                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="rounded overflow-hidden h-auto shadow-xl mb-16 dark:shadow-slate-950 dark:border-2 dark:border-gray-800 border-2"
                            >
                                {/* Profile Section */}
                                <div className="p-1 flex h-[15%]">
                                    <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                        <Image
                                            src="/favicon.ico"
                                            width={100}
                                            height={100}
                                            alt="Profile Image"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="font-bold">Sohel Rana</div>
                                        <div className="text-sm text-gray-500">{formatDate(post.created_at)}</div>
                                    </div>
                                </div>

                                {/* Post Text with "See More" */}
                                <div className="p-2 text-sm whitespace-pre-line">
                                    <div
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: expandedPosts[post.id] ? "unset" : 3,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {post.post_text}
                                    </div>
                                    {post.post_text.split("\n").length > 1 && (
                                        <button
                                            onClick={() => toggleExpand(post.id)}
                                            className="text-blue-500 hover:underline mt-1"
                                        >
                                            {expandedPosts[post.id] ? "See Less" : "See More"}
                                        </button>
                                    )}
                                </div>

                                {/* Media Grid */}
                                <div className="cursor-pointer">
                                    <Link href={`/preview_image/${post.id}`}>
                                        <div
                                            className={`grid gap-1 ${post.photoUrl && !post.photoUrl2
                                                ? "grid-cols-1"
                                                : post.photoUrl3
                                                    ? "grid-cols-2"
                                                    : "grid-cols-2"
                                                }`}
                                        >
                                            {post.photoUrl && (
                                                isVideo(post.photoUrl) ? (
                                                    <video
                                                        controls
                                                        src={post.photoUrl}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        priority
                                                    />
                                                ) : (
                                                    <Image
                                                        src={post.photoUrl}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        priority
                                                    />
                                                )
                                            )}
                                            {post.photoUrl2 && (
                                                isVideo(post.photoUrl2) ? (
                                                    <video
                                                        controls
                                                        src={post.photoUrl2}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={post.photoUrl2}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                )
                                            )}
                                            {post.photoUrl3 && (
                                                isVideo(post.photoUrl3) ? (
                                                    <video
                                                        controls
                                                        src={post.photoUrl3}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={post.photoUrl3}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                )
                                            )}
                                            {post.photoUrl4 && (
                                                isVideo(post.photoUrl4) ? (
                                                    <video
                                                        controls
                                                        src={post.photoUrl4}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={post.photoUrl4}
                                                        width={450}
                                                        height={100}
                                                        alt={`Sohel Post Image ${post.keyword}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => (e.target.style.display = "none")}
                                                        loading="lazy"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </Link>
                                </div>

                                {/* Footer Buttons */}
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

                                {/* Dynamic JSON-LD for each post */}
                                <script type="application/ld+json">
                                    {JSON.stringify(generatePostSchema(post))}
                                </script>
                            </div>
                        ))}
                        <div className="h-[20px]"></div>
                    </div>
                </div>
            </main>
        </>
    );
}