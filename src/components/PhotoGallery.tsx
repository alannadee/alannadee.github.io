// /components/Gallery.tsx
import { useEffect, useState } from 'react';

type CloudImage = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  bytes: number;
};

export default function Gallery({ folder }: { folder: string }) {
  const [images, setImages] = useState<CloudImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`/api/photos?folder=${folder}`);
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, [folder]);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.public_id} className="flex flex-col items-center space-y-2">
          <img
            src={img.secure_url}
            alt={img.public_id}
            className="w-full rounded shadow"
          />
          <p className="text-xs text-gray-600">{img.format.toUpperCase()} - {Math.round(img.bytes / 1024)}KB</p>
        </div>
      ))}
    </div>
  );
}
