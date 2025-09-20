import './Gallery.css'

// function Gallery(){
//     return(
//         <div>
//             <h1>Gallery</h1>
//             <p>All gallery-related content will go here.</p>
//         </div>
//     )
// }

import React from "react";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const Gallery = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Gallery
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          A glimpse of our events, seminars, and achievements. Browse through
          the gallery to see our vibrant community in action.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;



// export default Gallery;