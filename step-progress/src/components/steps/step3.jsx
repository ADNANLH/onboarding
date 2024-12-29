import React, { useState, useCallback } from "react";
import { TextInput, Select, Button } from "@mantine/core";
import { useDropzone } from "react-dropzone";

const Step3 = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(data || { name: "", businessType: "", logo: null, cover: null });

  const handleChange = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };
      if (onUpdate) onUpdate(updatedData);
      return updatedData;
    });
  };

  const handleRemoveFile = (key) => {
    handleChange(key, null);
  };

  const renderDropzone = (label, key) => {
    const onDrop = useCallback(
      (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
          handleChange(key, acceptedFiles[0]);
        }
      },
      [key]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: "image/*",
    });

    const file = formData[key];

    return (
      <div className="flex flex-col items-center gap-2">
        <label className="block font-medium text-gray-700">{label}</label>
        {file ? (
          // Display uploaded image
          <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md">
            <img
              src={URL.createObjectURL(file)}
              alt={`${label} Preview`}
              className="w-full h-full object-cover"
            />
            <Button
              onClick={() => handleRemoveFile(key)}
              size="xs"
              color="red"
              className="absolute top-1 right-1"
            >
              Remove
            </Button>
          </div>
        ) : (
          // Display dropzone
          <div
            {...getRootProps()}
            className="flex items-center justify-center w-32 h-32 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition duration-200"
          >
            <input {...getInputProps()} />
            <p className="text-sm text-gray-500 text-center">
              {isDragActive ? "Drop files here..." : "Drag & drop or click to upload"}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full  rounded-lg  p-6">

        {/* Business Information */}
        <div className="flex flex-col gap-4 mb-6">
          <TextInput
            variant="filled"
            label="Name"
            placeholder="Enter business name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <Select
            variant="filled"
            label="Business Type"
            placeholder="Select business type"
            value={formData.businessType}
            onChange={(value) => handleChange("businessType", value)}
            data={["Restaurant", "Snack", "Coffee", "Pizzeria", "Other"]}
            required
          />
        </div>

        {/* Logo Dropzone */}
        <div className="flex flex-col gap-4 mb-6">
          {renderDropzone("Logo", "logo")}
        </div>

        {/* Cover Dropzone */}
        <div className="flex flex-col gap-4 mb-6">
          {renderDropzone("Cover", "cover")}
        </div>
      </div>
    </div>
  );
};

export default Step3;
