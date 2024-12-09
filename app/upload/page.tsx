'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

const UploadImage = () => {
  const [publicId, setPublicId] = useState<string>('')

  const handleUpload = (result: any) => {
    console.log('Upload result:', result) // Debug the result object
    if (result.event === 'success') {
      setPublicId(result.info.public_id)
      console.log('Public ID set:', result.info.public_id) // Debug publicId
    } else {
      console.error('Upload failed or did not complete:', result)
    }
  }

  return (
    <div>
      <h1>Upload Image to Cloudinary</h1>
      {publicId ? (
        <div>
          <p>Image uploaded successfully:</p>
          <CldImage
            src={publicId}
            width={960}
            height={600}
            alt="Uploaded Image"
          />
        </div>
      ) : (
        <p>No image uploaded yet</p>
      )}
      <CldUploadWidget
        uploadPreset="iafz8rky" // Ensure this preset exists in your Cloudinary account
        onUpload={handleUpload}
      >
        {({ open }) => (
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              console.log('Button clicked') // Confirm button click
              open() // Open the widget
            }}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  )
}

export default UploadImage
