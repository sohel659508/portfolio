import { useState } from "react";
import { supabase } from "/lib/supabaseServer";
import { useRouter } from "next/navigation";

export default function NewPOst() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([null, null, null, null]); // Array to store 4 images
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleInsert = async () => {
    if (!inputValue.trim()) return;

    setLoading(true); // Set loading to true when the process starts

    try {
      // Upload images and get their paths
      const imagePaths = await Promise.all(
        images.map(async (image, index) => {
          if (!image) return null;
          const { data, error } = await supabase.storage
            .from("post_photo")
            .upload(`uploads/${Date.now()}-${image.name}-${index}`, image);
          if (error) {
            alert("Photo Upload Failed");
            return null;
          }
          return data.path;
        })
      );

      // Insert data into the table
      const { error } = await supabase.from("user_post").insert([
        {
          post_text: inputValue,
          photo1: imagePaths[0],
          photo2: imagePaths[1],
          photo3: imagePaths[2],
          photo4: imagePaths[3],
        },
      ]);

      if (error) {
        console.error("Insert error:", error);
      } else {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false); // Set loading to false when the process ends
    }
  };

  return (
    <>
      <main>
        <div className="flex justify-center items-center h-full mt-10">
          <div className="h-auto w-[600px] p-5 rounded-lg shadow-lg">
            <div>
              <h1 className="text-2xl">+ Create New Post</h1>
            </div>
            <div className="mt-5">
              <label className="font-bold">Select Photo</label>
              <div className="flex flex-wrap gap-5">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const newImages = [...images];
                      newImages[index] = e.target.files[0];
                      setImages(newImages);
                    }}
                  />
                ))}
              </div>
              <div className="mt-5">
                <label className="font-bold">Post Description</label>
                <br />
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="border w-full p-2 outline-none"
                  placeholder="Write something...."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={handleInsert}
                disabled={loading} // Disable the button when loading
                className="bg-blue-500 p-2 w-60 rounded text-white disabled:bg-blue-300"
              >
                {loading ? "Submitting..." : "Submit post"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}