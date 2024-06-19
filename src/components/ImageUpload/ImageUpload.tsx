import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload: React.FC = () => {
  // State to store the selected image file and the preview URL
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="image-upload-container">
      <h1 className="task-title">Task 5</h1>
      <h3>Image Upload</h3>
      <div className="image-preview">
        {previewUrl && <img src={previewUrl} alt="Uploaded" className="circular-image" />}
      </div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;
