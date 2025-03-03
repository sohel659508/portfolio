import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
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


export default function Memory() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                router.push("/admin/login");
            } else {
                setLoading(false);
                fetchUserPosts();
            }
        };

        checkSession();
    }, [router]);

    // Fetch user posts with photo URLs
    const fetchUserPosts = async () => {
        const { data, error } = await supabase.from("user_post").select("*").order('created_at', { ascending: false });;

        if (error) {
            console.error("Error fetching posts:", error);
            return;
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

        setPosts(postsWithPhotos);
    };

    // Loading Skeleton
    if (loading) {
        return (
            <div className="w-[450px] p-2 h-screen ml-[33%] dark:bg-gray-900">
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
                                baseColor="#374151" // Dark theme base color
                                highlightColor="#4b5563" // Dark theme highlight color
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

    return (
        <>
            <Head>
                <title>Memory | Sohel</title>
            </Head>
            <main>
                <div className="flex justify-between">
                    {/* Left side */}
                    <div className="w-[32%] shadow-md p-2 h-screen fixed left-0 leftlayoutscreememory">
                        <div>
                            <div className="rounded p-2 text-[18px] flex items-center mb-2">
                                <MenuAlt1Icon className="h-8 w-8 mr-5" /> Menu Bar
                            </div>
                            <Link href="" className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <NewspaperIcon className="h-6 w-6 mr-3" /> All Post
                            </Link>
                            <Link href="" className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <PhotographIcon className="h-6 w-6 mr-3" /> Photo
                            </Link>
                            <Link href="" className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <VideoCameraIcon className="h-6 w-6 mr-3" /> Video
                            </Link>
                            <Link href="" className="m-6 hover:text-cyan-500 rounded p-1 cursor-pointer flex">
                                <LocationMarkerIcon className="h-6 w-6 mr-3" /> Live Location
                            </Link>
                        </div>
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
                                            src="/Image/index/facebook.png"
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

                                {/* Post Text */}
                                <div className="p-2 text-sm">{post.post_text}</div>

                                {/* Image Grid */}
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
                                                <Image
                                                    src={post.photoUrl}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = "none")}
                                                    priority
                                                />
                                            )}
                                            {post.photoUrl2 && (
                                                <Image
                                                    src={post.photoUrl2}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = "none")}
                                                    loading="lazy"
                                                />
                                            )}
                                            {post.photoUrl3 && (
                                                <Image
                                                    src={post.photoUrl3}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = "none")}
                                                    loading="lazy"
                                                />
                                            )}
                                            {post.photoUrl4 && (
                                                <Image
                                                    src={post.photoUrl4}
                                                    width={450}
                                                    height={100}
                                                    alt="Post Image"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => (e.target.style.display = "none")}
                                                    loading="lazy"
                                                />
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
                            </div>
                        ))
                        }
                        <div className="h-[20px]"></div>
                    </div>
                </div>
            </main>
        </>
    );
}