import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

type MasonryGalleryProps = {
  images: string[];
};

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <style>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -1rem;
          width: auto;
        }

        .my-masonry-grid_column {
          padding-left: 1rem;
          background-clip: padding-box;
        }

        .my-masonry-grid_column > img {
          margin-bottom: 1rem;
        }

        .my-masonry-grid_column:nth-child(1) {
            margin-top: 3rem;
        }
        .my-masonry-grid_column:nth-child(2) {
            margin-top: 1rem;
        }
        .my-masonry-grid_column:nth-child(3) {
            margin-top: 3rem;
        }
        .my-masonry-grid_column:nth-child(4) {
            margin-top: 2rem;
        }
      `}</style>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index}`}
            loading="lazy"
            initial={{ opacity : 0 }}
            whileInView={{ opacity : 1 }}
            transition={{ duration: 1 }}
            className="rounded-lg hover:scale-105 transition-transform duration-300 w-full max-w-[250px] mx-auto"
          />
        ))}
      </Masonry>
    </>
  );
};

export default MasonryGallery;