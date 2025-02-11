import Head from "next/head";
import { ArrowLeftIcon, DownloadIcon } from '@heroicons/react/outline';
import Link from "next/link";
import Image from "next/image";

// This will run on the server side to fetch data based on the postid
export async function getServerSideProps(context) {
    const { postid } = context.params; // Get postid from the dynamic route

    const res = await fetch(`https://mrsohelrana.com/photo-preview-api?postid=${postid}`);
    const data = await res.json();

    return {
        props: {
            data
        },
    };
}

export default function Preview({ data }) {
    return (
        <>
            <Head>
                <title>Preview | Sohel</title>
            </Head>
            <main>
                <div className="fixed bg-white dark:bg-black w-full h-full top-0 overflow-y-scroll flex justify-center flex-wrap p-10">

                    {data.map((post) => (
                        // Card box
                        <div key={post.postid} className="relative w-full h-full flex-wrap flex justify-center">
                            <Image
                                src={`https://mrsohelrana.com/${post.photo1}`}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                            <div className="w-full"></div>
                            <Image
                                src={`https://mrsohelrana.com/${post.photo2}`}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                            <div className="w-full"></div>
                            <Image
                                src={`https://mrsohelrana.com/${post.photo3}`}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                            <div className="w-full"></div>
                            <Image
                                src={`https://mrsohelrana.com/${post.photo4}`}
                                alt="Demo Image"
                                width={500}
                                height={500}
                                className="w-auto h-full object-cover m-2"
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                        </div>
                    ))}

                </div>
            </main>
        </>
    );
}
