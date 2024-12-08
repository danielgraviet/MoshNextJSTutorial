'use client'
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadImage = () => {
  return (
    <CldUploadWidget uploadPreset='ntqfcqu8'>
        {({open}) => <button
        className='btn btn-primary'
        onClick={() => open()}
        >Upload</button>}
    </CldUploadWidget>
  )
}

export default UploadImage