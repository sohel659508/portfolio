"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { supabase } from "/lib/supabaseServer";
import Banner from "../ads/bannerads";

const isVideo = (url) => {
    if (!url) return false;
    const extensionMatch = url.match(/\.([a-zA-Z0-9]+)(-\d+)?$/);
    if (!extensionMatch) return false;
    const extension = extensionMatch[1].toLowerCase();
    const videoExtensions = ["mp4", "mov", "avi", "mkv", "wmv", "flv", "webm"];
    return videoExtensions.includes(extension);
};

export default function Preview() {
    const router = useRouter();
    const { postid } = router.query; // Get postid from URL

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!postid) return;

        const fetchPost = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("user_post")
                .select("*")
                .eq("id", postid)
                .single();

            if (error) {
                console.error("Error fetching post:", error.message);
                setPost(null);
            } else {
                setPost({
                    ...data,
                    mediaUrl1: data.photo1
                        ? supabase.storage.from("post_photo").getPublicUrl(data.photo1).data?.publicUrl
                        : null,
                    mediaUrl2: data.photo2
                        ? supabase.storage.from("post_photo").getPublicUrl(data.photo2).data?.publicUrl
                        : null,
                    mediaUrl3: data.photo3
                        ? supabase.storage.from("post_photo").getPublicUrl(data.photo3).data?.publicUrl
                        : null,
                    mediaUrl4: data.photo4
                        ? supabase.storage.from("post_photo").getPublicUrl(data.photo4).data?.publicUrl
                        : null,
                    keyword: data.keyword,
                    post_text: data.post_text,
                });
            }
            setLoading(false);
        };

        fetchPost();
    }, [postid]);

    if (loading) {
        return <div className="text-center p-5">Loading...</div>;
    }

    if (!post) {
        return <div className="text-center p-5">No post found.</div>;
    }

    const { keyword, post_text, mediaUrl1, mediaUrl2, mediaUrl3, mediaUrl4 } = post;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": keyword,
        "description": post_text,
        "image": [mediaUrl1, mediaUrl2, mediaUrl3, mediaUrl4].filter(url => url && !isVideo(url)),
        "author": {
            "@type": "Person",
            "name": "Sohel Rana",
        },
    };

    return (
        <>
            <Head>
                <title>{keyword}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={post_text} />
                <meta name="keywords" content={keyword} />
                <meta property="og:title" content={keyword} />
                <meta property="og:description" content={post_text} />
                <meta property="og:image" content={mediaUrl1} />
                <meta property="og:type" content="article" />
                <meta property="og:author" content="Sohel Rana" />
                <link rel="canonical" href={`https://mrsohelrana.com/preview_image/${postid}`} />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                {/* for google adsense........... */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8968230404518514"
                    crossorigin="anonymous"></script>
                    <meta name="google-adsense-account" content="ca-pub-8968230404518514"></meta>
            </Head>
            <main>
                <div className=" bg-white dark:bg-black w-full h-full top-0 flex justify-center flex-wrap p-16 overflow-hidden preview_imagePhotoview pt-3">
                    <div key={postid} className="relative w-full h-full flex-wrap flex justify-center preview_image_image_holder">
                        <h1 className="w-full text-center m-2 text-2xl">Sohel Rana | {keyword}</h1>
                        <h2 className="m-2">{post_text}</h2>

                        {/* for banner adds............ */}
                        <Banner />

                        {mediaUrl1 &&
                            (isVideo(mediaUrl1) ? (
                                <video src={mediaUrl1} controls className="w-auto h-full object-cover m-2 preview_image_image" />
                            ) : (
                                <Image
                                    src={mediaUrl1}
                                    width={500}
                                    height={500}
                                    alt={`${keyword} - Media 1`}
                                    className="w-auto h-full object-cover m-2 preview_image_image"
                                    priority
                                />
                            ))}

                        <div className="w-full"></div>

                        {mediaUrl2 &&
                            (isVideo(mediaUrl2) ? (
                                <video src={mediaUrl2} controls className="w-auto h-full object-cover m-2 preview_image_image" />
                            ) : (
                                <Image src={mediaUrl2} width={500} height={500} alt={`${keyword} - Media 2`} className="w-auto h-full object-cover m-2 preview_image_image" />
                            ))}

                        <div className="w-full"></div>

                        {mediaUrl3 &&
                            (isVideo(mediaUrl3) ? (
                                <video src={mediaUrl3} controls className="w-auto h-full object-cover m-2 preview_image_image" />
                            ) : (
                                <Image src={mediaUrl3} width={500} height={500} alt={`${keyword} - Media 3`} className="w-auto h-full object-cover m-2 preview_image_image" />
                            ))}
                        <div className="w-full"></div>

                        {mediaUrl4 &&
                            (isVideo(mediaUrl4) ? (
                                <video src={mediaUrl4} controls className="w-auto h-full object-cover m-2 preview_image_image" />
                            ) : (
                                <Image src={mediaUrl4} width={500} height={500} alt={`${keyword} - Media 4`} className="w-auto h-full object-cover m-2 preview_image_image" />
                            ))}

                        <div className="w-full h-[50px]"></div>
                    </div>
                </div>
            </main>
        </>
    );
}
