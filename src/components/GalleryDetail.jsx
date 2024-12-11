import React from 'react';
import '../css/gallery.css'; // Import the CSS file for styling
import image1 from "../assets/image1.jpg"; // Import the image
import image2 from "../assets/image2.jpg"; // Import the second image
import image3 from "../assets/image3.jpg"; // Import the third image
import image4 from "../assets/image4.jpg"
const GalleryDetail = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery Detail</h2>
      <div className="gallery-images">
        <div className="image-card">
          <img src={image4} alt="Gallery section 1" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image2} alt="Gallery section 2" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image3} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image4} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image3} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image1} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image2} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image3} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image1} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image2} alt="Gallery section 3" className="gallery-image" />
        </div>  
        <div className="image-card">
          <img src={image4} alt="Gallery section 3" className="gallery-image" />
        </div>
        <div className="image-card">
          <img src={image1} alt="Gallery section 3" className="gallery-image" />
        </div>
        {/* Add more images here */}
      </div>
    </div>
  );
};

export default GalleryDetail;
