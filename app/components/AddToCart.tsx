'use client';
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("added")}>
        Add To Cart
      </button>
      <CldUploadButton
        uploadPreset="ntqfcqu8"
        onUpload={(result) => console.log(result)} // Handle upload results here
      >
        <button className="btn btn-error">Upload</button>
      </CldUploadButton>
    </div>
  );
};

export default AddToCart;
