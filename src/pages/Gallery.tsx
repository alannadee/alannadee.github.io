// /pages/gallery.tsx or wherever you're routing
import Gallery from '../components/PhotoGallery';

export default function GalleryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Home/Test Gallery</h1>
      <Gallery folder="Test" />
    </div>
  );
}
