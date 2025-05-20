"use client";
import React, { useState } from "react";
import { Upload, message } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { PlusOutlined } from "@ant-design/icons";

const UploadImages: React.FC = () => {
  const [profilePic, setProfilePic] = useState<UploadFile[]>([]);
  const [galleryPics, setGalleryPics] = useState<UploadFile[]>([]);

  // Profile image change (limit to 1)
  const handleProfileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setProfilePic(fileList.slice(-1));
  };

  // Gallery image change (limit 2–5)
  const handleGalleryChange = ({ fileList }: { fileList: UploadFile[] }) => {
    if (fileList.length > 5) {
      message.error("You can upload a maximum of 5 images.");
      return;
    }
    setGalleryPics(fileList);
  };

  const beforeProfileUpload = (): boolean => {
    if (profilePic.length >= 1) {
      message.error("Only one profile picture allowed.");
      return false;
    }
    return true;
  };

  const beforeGalleryUpload = (_file: File, fileList: File[]): boolean => {
    if (galleryPics.length + fileList.length > 5) {
      message.error("Max 5 gallery images allowed.");
      return false;
    }
    return true;
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-8 bg-whitezz shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Upload Profile Picture
      </h2>

      <Upload
        listType="picture-card"
        fileList={profilePic}
        onChange={handleProfileChange}
        beforeUpload={beforeProfileUpload}
        maxCount={1}
      >
        {profilePic.length >= 1 ? null : (
          <div>
            <PlusOutlined />
            <div className="mt-1 text-sm text-gray-500">Upload</div>
          </div>
        )}
      </Upload>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Upload Gallery Images
        </h3>
        <p className="text-sm text-gray-500 mb-4">Min 2, Max 5 images</p>
        <Upload
          listType="picture"
          fileList={galleryPics}
          onChange={handleGalleryChange}
          beforeUpload={beforeGalleryUpload}
          multiple
        >
          {galleryPics.length < 5 && (
            <div className="px-4 py-2 border border-dashed border-gray-300 rounded hover:border-secondary transition">
              <PlusOutlined />{" "}
              <span className="ml-2 text-sm text-primary">Add Image</span>
            </div>
          )}
        </Upload>
      </div>
    </div>
  );
};

export default UploadImages;
