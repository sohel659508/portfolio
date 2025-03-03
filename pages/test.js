import { useState } from "react";
import { supabase } from "../lib/supabaseServer";

export default function Test() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([null, null, null, null]); // Array to store 4 images

  const handleInsert = async () => {
    if (!inputValue.trim()) return;

    // Upload images and get their paths
    const imagePaths = await Promise.all(
      images.map(async (image, index) => {
        if (!image) return null;
        const { data, error } = await supabase.storage
          .from("post_photo")
          .upload(`uploads/${Date.now()}-${image.name}-${index}`, image);
        if (error) {
          console.error(`Upload error for image ${index + 1}:`, error);
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

    if (error) console.error("Insert error:", error);
    else {
      alert("Insert success");
      setInputValue("");
      setImages([null, null, null, null]); // Reset images
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter post text"
      />
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
      <button onClick={handleInsert}>Insert</button>
    </div>
  );
}