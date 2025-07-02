import React, { useState } from "react";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [folder, setFolder] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMessage("No file selected");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("folder", folder);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Uploaded");
      setFile(null);
      setTitle("");
      setFolder("");
    } else {
      setMessage(`❌ Failed: ${data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Folder (e.g. portraits)" value={folder} onChange={(e) => setFolder(e.target.value)} className="border p-2 w-full" />
      <input type="file" onChange={(e) => e.target.files && setFile(e.target.files[0])} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default UploadForm;
