import React, { useState, useCallback } from "react";
import { Button } from "@mantine/core";
import { useDropzone } from "react-dropzone";

const Step6 = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(
    data || {
      frontImage: null,
      mealsImages: [],
      interiorImages: [],
    }
  );

  const handleChange = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };
      if (onUpdate) onUpdate(updatedData);
      return updatedData;
    });
  };

  const handleRemoveFile = (key, index = null) => {
    if (index !== null) {
      const updatedArray = [...formData[key]];
      updatedArray.splice(index, 1);
      handleChange(key, updatedArray);
    } else {
      handleChange(key, null);
    }
  };

  const renderDropzone = (label, key, maxFiles) => {
    const onDrop = useCallback(
      (acceptedFiles) => {
        if (maxFiles === 1) {
          handleChange(key, acceptedFiles[0]); 
        } else {
          const currentFiles = formData[key] || [];
          const newFiles = [...currentFiles, ...acceptedFiles].slice(0, maxFiles);
          handleChange(key, newFiles); 
        }
      },
      [key, maxFiles, formData]
    );
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: "image/*",
      multiple: maxFiles > 1,
    });
  
    const files = formData[key];
    const isMaxFilesUploaded =
      (Array.isArray(files) && files.length >= maxFiles) || (!Array.isArray(files) && files);
  
    return (
      <div className="flex flex-col mb-6">
        <label className="block mb-2 font-medium">{label}</label>
  
        {!isMaxFilesUploaded && (
          <div
            {...getRootProps()}
            className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-200 hover:bg-gray-100 cursor-pointer mb-4"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-gray-500">Drop the files here...</p>
            ) : (
              <p className="text-gray-500">
                Drag and drop files here, or click to select files
              </p>
            )}
          </div>
        )}
  
        <div className="grid grid-cols-3 gap-4">
          {Array.isArray(files)
            ? files.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`${label} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => {
                      URL.revokeObjectURL(URL.createObjectURL(file));
                      handleRemoveFile(key, index);
                    }}
                    className="absolute top-1 right-1 z-10"
                  >
                    Remove
                  </Button>
                </div>
              ))
            : files && (
                <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md">
                  <img
                    src={URL.createObjectURL(files)}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => {
                      URL.revokeObjectURL(URL.createObjectURL(files));
                      handleRemoveFile(key);
                    }}
                    className="absolute top-1 right-1 z-10"
                  >
                    Remove
                  </Button>
                </div>
              )}
        </div>
      </div>
    );
  };
  


  // Check all imaages
  const isAllImagesUploaded =
    formData.frontImage &&
    formData.mealsImages.length >= 3 &&
    formData.interiorImages.length >= 3;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 rounded-xl p-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Restaurant Gallery</h2>

        {!isAllImagesUploaded && (
          <>
            {/* Front Image */}
            {renderDropzone("Front Image", "frontImage", 1)}

            {/* Meals Images */}
            {renderDropzone("Meals Images", "mealsImages", 3)}

            {/* Interior Images */}
            {renderDropzone("Interior Images", "interiorImages", 3)}
          </>
        )}

       
      </div>
    </div>
  );
};

export default Step6;
