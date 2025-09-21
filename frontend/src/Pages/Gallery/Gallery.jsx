import React from "react";
import './Gallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


// function Gallery(){
//     return(
//         <div>
//             <h1>Gallery</h1>
//             <p>All gallery-related content will go here.</p>
//         </div>
//     )
// }

const images = [
    {
        original: "/Images/IMG_1722.JPG",
        thumbnail: "/Images/IMG_1722.JPG",
    },
    {
        original: "/Images/g2.jpg",
        thumbnail: "/Images/g2.jpg",
    },
    {
        original: "/Images/g8.jpg",
        thumbnail: "/Images/g8.jpg",
    },
    {
        original: "/Images/g7.jpg",
        thumbnail: "Images/g7.jpg",
    },
    {
        original: "/Images/g5.jpg",
        thumbnail: "/Images/g5.jpg",
    },
    {
        original: "/Images/IMG_1730.JPG",
        thumbnail: "/Images/IMG_1730.JPG",
    },
];

const Gallery = () => {
    return (
        <div>
            <div className="title">
                <div>
                    <h1>Gallery</h1>
                </div>
                <div>
                    <center>
                        <p>
                            The first class that dared to dream. Photos documenting the beginnings of our Next-Gen Computing research journey.
                        </p>
                    </center>
                </div>
            </div>

            <div className="gallery-container">
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={true}
                    autoPlay={true}
                    slideInterval={4000}
                    thumbnailPosition="bottom"
                />
            </div>
        </div>
    );
};

export default Gallery;