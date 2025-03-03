import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Delete() {
  const router = useRouter();
  const { postid } = router.query;

  const handleDelete = async () => {
    if (!postid) return;

    try {
      // Fetch post details to get the storage path (assuming there's a file to delete)
      const { data: post, error: fetchError } = await supabase
        .from("user_post")
        .select("id, photo1, photo2, photo3, photo4") // Ensure you have a column storing the file path
        .eq("id", postid)
        .single();

      if (fetchError) throw fetchError;

   await supabase.storage.from("post_photo").remove([post.photo1]);
   await supabase.storage.from("post_photo").remove([post.photo2]);
   await supabase.storage.from("post_photo").remove([post.photo3]);
   await supabase.storage.from("post_photo").remove([post.photo4]);

      // Delete the post from the database
      const { error: deleteError } = await supabase
        .from("user_post")
        .delete()
        .eq("id", postid);

      if (deleteError) throw deleteError;

      alert("Post deleted successfully!");
      router.back(); // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting post:", error.message);
      alert("Failed to delete the post.");
    }
  };

  return (
    <main className="overflow-hidden fixed w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="m-3 text-3xl">
            Are you sure you want to delete this post?
          </h1>
          <span className="m-3 text-2xl">Post ID: {postid}</span>
          <br />
          <div className="m-3">
            <button
              onClick={handleDelete}
              className="m-3 rounded-lg bg-red-500 p-2 w-[150px] text-[17px]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
