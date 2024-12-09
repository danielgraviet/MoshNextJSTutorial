'use client';
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-primary w-full" onClick={() => console.log("added")}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
