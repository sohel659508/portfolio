"use client";
import { useEffect, useState } from "react";
import { supabase } from "/lib/supabaseServer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
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

    // ✅ Fetch user posts with photo URLs
    const fetchUserPosts = async () => {
        const { data, error } = await supabase.from("user_post").select("*");

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
        }));

        setPosts(postsWithPhotos);
    };

    // ✅ Logout function
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
    };

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }


    return (
        <main>
            <div className="m-5">
                <div className="flex justify-between">
                    <Link href="/admin/new_post" className="text-white bg-green-500 px-4 py-2 rounded">
                        Add New Post
                    </Link>
                    <button onClick={handleLogout} className="text-white bg-red-500 px-4 py-2 rounded">
                        Logout
                    </button>
                </div>

                <div className="mt-5">
                    <h1 className="text-2xl">Post Details</h1>
                    <table className="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Post Photo</th>
                                <th scope="col" className="px-6 py-3">Post Details</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td className="px-6 py-1">
                                            <div className="h-[50px] w-auto relative overflow-hidden">
                                                {post.photoUrl ? (
                                                    <Image
                                                        src={post.photoUrl}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        alt="Post"
                                                        className="rounded object-cover"
                                                    />
                                                ) : (
                                                    <span>No photo available</span>
                                                )}
                                            </div>

                                        </td>
                                        <td className="px-6 py-4">{post.post_text}</td>
                                        <td className="px-6 py-4">{post.created_at}</td>
                                        <td className="px-6 py-4 flex justify-around gap-5">
                                            <Link href={`delete_post?postid=${post.id}`} className="text-orange-500">Edit</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">No posts found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}