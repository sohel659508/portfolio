"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "/lib/supabaseServer";

// Fetch the `postid` from the URL on the server
export async function getServerSideProps(context) {
    const { postid } = context.params; // Get postid from the URL

    // Fetch post data from Supabase on the server
    const { data, error } = await supabase
        .from('user_post')
        .select('*')
        .eq('id', postid)
        .single();

    if (error) {
        console.error("Error fetching post:", error.message);
        return { props: { post: null } }; // Return empty if there's an error
    }

    // Generate public URLs for images
    const postWithPhotos = {
        ...data,
        photoUrl: data.photo1
            ? supabase.storage.from("post_photo").getPublicUrl(data.photo1).data?.publicUrl
            : null,
        photoUrl2: data.photo2
            ? supabase.storage.from("post_photo").getPublicUrl(data.photo2).data?.publicUrl
            : null,
        photoUrl3: data.photo3
            ? supabase.storage.from("post_photo").getPublicUrl(data.photo3).data?.publicUrl
            : null,
        photoUrl4: data.photo4
            ? supabase.storage.from("post_photo").getPublicUrl(data.photo4).data?.publicUrl
            : null,
    };

    return {
        props: { post: postWithPhotos }, // Pass the post data to the component
    };
}

export default function Preview({ post }) {
    if (!post) {
        return <div className="text-center p-5">No post found.</div>;
    }

    return (
        <>
            <Head>
                <title>Preview | Sohel</title>
            </Head>
            <main>
                <div className="fixed bg-white dark:bg-black w-full h-full top-0 overflow-y-scroll flex justify-center flex-wrap p-16 overflow-hidden">
                    <div key={post.id} className="relative w-full h-full flex-wrap flex justify-center">
                        {post.photoUrl && (
                            <Image
                                src={post.photoUrl}
                                width={500}
                                height={500}
                                alt="Post Image"
                               className="w-auto h-full object-cover m-2"
                            />
                        )}
                        <div className="w-full"></div>
                        {post.photoUrl2 && (
                            <Image
                                src={post.photoUrl2}
                                width={500}
                                height={500}
                                alt="Post Image"
                               className="w-auto h-full object-cover m-2"
                            />
                        )}
                        <div className="w-full"></div>
                        {post.photoUrl3 && (
                            <Image
                                src={post.photoUrl3}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                            />
                        )}
                        <div className="w-full"></div>
                        {post.photoUrl4 && (
                            <Image
                                src={post.photoUrl4}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                            />
                        )}
                        <div className="w-full h-[50px]"></div>
                    </div>
                </div>
            </main>
        </>
    );
}
