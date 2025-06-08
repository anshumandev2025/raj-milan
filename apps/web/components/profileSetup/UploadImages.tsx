"use client";
import React, { useState } from "react";
import { Upload, message, Form, Modal } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import {
  PlusOutlined,
  CameraOutlined,
  PictureOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const UploadImages = ({ form }: { form: any }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const profilePic = Form.useWatch("profileImage", form) || [];
  const galleryPics = Form.useWatch("galleryImages", form) || [];

  const handleProfileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    const list = fileList.slice(-1); // keep only 1
    form.setFieldsValue({ profileImage: list });
  };

  const handleGalleryChange = ({ fileList }: { fileList: UploadFile[] }) => {
    if (fileList.length > 5) {
      message.error("You can upload a maximum of 5 images.");
      return;
    }
    form.setFieldsValue({ galleryImages: fileList });
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

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
    setPreviewOpen(true);
  };

  const handleCancel = () => setPreviewOpen(false);

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <Form layout="vertical" form={form}>
        {/* Profile Picture Section */}
        <Form.Item
          rules={[
            { required: true, message: "Please upload a profile picture." },
          ]}
          label={
            <div className="flex items-center gap-2 mb-4">
              <CameraOutlined className="text-lg text-[var(--primary)]" />
              <span className="text-base font-semibold text-[var(--foreground)]">
                Profile Picture
              </span>
            </div>
          }
          name="profileImage"
          valuePropName="fileList"
          getValueFromEvent={() => profilePic}
        >
          <Upload
            listType="picture-card"
            fileList={profilePic}
            onChange={handleProfileChange}
            beforeUpload={beforeProfileUpload}
            onPreview={handlePreview}
            maxCount={1}
            className="profile-upload"
          >
            {profilePic.length >= 1 ? null : (
              <div className="upload-placeholder">
                <div className="upload-icon">
                  <PlusOutlined />
                </div>
                <div className="upload-text">
                  <div className="upload-title">Upload Profile</div>
                  <div className="upload-subtitle">Click or drag to upload</div>
                </div>
              </div>
            )}
          </Upload>
        </Form.Item>

        {/* Gallery Images Section */}
        <Form.Item
          rules={[
            {
              validator: async (_, value) => {
                if (!value || value.length < 2) {
                  throw new Error("Please upload at least 2 gallery images.");
                }
                if (value.length > 5) {
                  throw new Error(
                    "You can upload a maximum of 5 gallery images."
                  );
                }
              },
            },
          ]}
          label={
            <div className="flex items-center gap-2 mb-4">
              <PictureOutlined className="text-lg text-[var(--primary)]" />
              <span className="text-base font-semibold text-[var(--foreground)]">
                Gallery Images
              </span>
              <span className="text-xs px-2 py-1 bg-[var(--secondary)]/20 text-[var(--primary)] rounded-full font-medium">
                {galleryPics.length}/5
              </span>
            </div>
          }
          name="galleryImages"
          valuePropName="fileList"
          getValueFromEvent={() => galleryPics}
        >
          <Upload
            listType="picture"
            fileList={galleryPics}
            onChange={handleGalleryChange}
            beforeUpload={beforeGalleryUpload}
            onPreview={handlePreview}
            multiple
            className="gallery-upload"
          >
            {galleryPics.length < 5 && (
              <div className="gallery-upload-button">
                <div className="gallery-upload-content">
                  <div className="gallery-upload-icon">
                    <PlusOutlined />
                  </div>
                  <div className="gallery-upload-text">
                    <div className="gallery-upload-title">
                      Add Gallery Images
                    </div>
                    <div className="gallery-upload-subtitle">
                      Upload up to {5 - galleryPics.length} more images
                    </div>
                  </div>
                  <div className="gallery-upload-badge">Browse</div>
                </div>
              </div>
            )}
          </Upload>
        </Form.Item>
      </Form>

      {/* Preview Modal */}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
        width="80%"
        style={{ maxWidth: "800px" }}
        centered
      >
        <img
          alt="preview"
          style={{
            width: "100%",
            maxHeight: "70vh",
            objectFit: "contain",
          }}
          src={previewImage}
        />
      </Modal>

      <style jsx global>{`
        /* Profile Upload Styles */
        .profile-upload .ant-upload-select {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
          height: 120px !important;
          min-height: 120px !important;
        }

        .profile-upload .ant-upload-select .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 16px;
          background: linear-gradient(
            135deg,
            var(--background, #fafafa) 0%,
            #ffffff 100%
          );
          border: 2px dashed var(--primary, #1890ff);
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .profile-upload .ant-upload-select .upload-placeholder:hover {
          border-color: var(--primary, #1890ff);
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
          transform: translateY(-2px);
        }

        .profile-upload .upload-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary, #1890ff);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .profile-upload .ant-upload-select:hover .upload-icon {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
        }

        .profile-upload .upload-text {
          text-align: center;
        }

        .profile-upload .upload-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary, #1890ff);
          margin-bottom: 4px;
        }

        .profile-upload .upload-subtitle {
          font-size: 12px;
          color: #8c8c8c;
        }

        .profile-upload .ant-upload-list-picture-card .ant-upload-list-item {
          border-radius: 12px !important;
          overflow: hidden;
          border: 2px solid var(--primary, #1890ff) !important;
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15) !important;
          width: 120px !important;
          height: 120px !important;
        }

        /* Gallery Upload Styles */
        .gallery-upload .ant-upload-select {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
        }

        .gallery-upload-button {
          width: 100%;
        }

        .gallery-upload-content {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(
            135deg,
            var(--background, #fafafa) 0%,
            #ffffff 100%
          );
          border: 2px dashed var(--primary, #1890ff);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gallery-upload-content:hover {
          border-color: var(--primary, #1890ff);
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
          transform: translateY(-1px);
        }

        .gallery-upload-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--secondary, #f0f0f0);
          color: var(--primary, #1890ff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .gallery-upload-content:hover .gallery-upload-icon {
          background: var(--primary, #1890ff);
          color: white;
          transform: scale(1.1);
        }

        .gallery-upload-text {
          flex: 1;
        }

        .gallery-upload-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary, #1890ff);
          margin-bottom: 4px;
        }

        .gallery-upload-subtitle {
          font-size: 12px;
          color: #8c8c8c;
        }

        .gallery-upload-badge {
          padding: 6px 16px;
          background: var(--primary, #1890ff);
          color: white;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .gallery-upload-content:hover .gallery-upload-badge {
          background: var(--primary, #1890ff);
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
        }

        .gallery-upload .ant-upload-list-picture .ant-upload-list-item {
          border-radius: 8px !important;
          border: 1px solid var(--primary, #1890ff) !important;
          padding: 8px !important;
          background: linear-gradient(
            135deg,
            var(--background, #fafafa) 0%,
            #ffffff 100%
          ) !important;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1) !important;
          transition: all 0.3s ease !important;
        }

        .gallery-upload .ant-upload-list-picture .ant-upload-list-item:hover {
          box-shadow: 0 4px 16px rgba(24, 144, 255, 0.2) !important;
          transform: translateY(-2px) !important;
        }

        .gallery-upload
          .ant-upload-list-picture
          .ant-upload-list-item-thumbnail
          img {
          border-radius: 4px !important;
        }

        /* Action buttons styling */
        .ant-upload-list-picture .ant-upload-list-item-actions,
        .ant-upload-list-picture-card .ant-upload-list-item-actions {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 100%
          ) !important;
          border-radius: 0 0 8px 8px !important;
        }

        .ant-upload-list-picture .ant-upload-list-item-actions .anticon,
        .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon {
          color: white !important;
          font-size: 16px !important;
          transition: all 0.2s ease !important;
        }

        .ant-upload-list-picture .ant-upload-list-item-actions .anticon:hover,
        .ant-upload-list-picture-card
          .ant-upload-list-item-actions
          .anticon:hover {
          color: var(--secondary, #40a9ff) !important;
          transform: scale(1.2) !important;
        }

        /* Form styling */
        .ant-form-item-label > label {
          height: auto !important;
          margin-bottom: 0 !important;
        }

        /* Message styling */
        .ant-message-notice-content {
          border-radius: 8px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }

        /* Modal styling */
        .ant-modal-content {
          border-radius: 12px !important;
          overflow: hidden;
        }

        .ant-modal-header {
          border-bottom: 1px solid #f0f0f0 !important;
          padding: 16px 24px !important;
        }

        .ant-modal-body {
          padding: 24px !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .profile-upload .ant-upload-select {
            height: 100px !important;
            min-height: 100px !important;
          }

          .profile-upload .ant-upload-list-picture-card .ant-upload-list-item {
            width: 100px !important;
            height: 100px !important;
          }

          .profile-upload .upload-icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
            margin-bottom: 8px;
          }

          .profile-upload .upload-title {
            font-size: 12px;
          }

          .profile-upload .upload-subtitle {
            font-size: 10px;
          }

          .gallery-upload-content {
            padding: 16px;
            gap: 12px;
          }

          .gallery-upload-icon {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .gallery-upload-title {
            font-size: 13px;
          }

          .gallery-upload-subtitle {
            font-size: 11px;
          }

          .gallery-upload-badge {
            padding: 4px 12px;
            font-size: 11px;
          }

          .ant-modal {
            margin: 16px !important;
            max-width: calc(100vw - 32px) !important;
          }
        }

        @media (max-width: 480px) {
          .space-y-6 {
            padding: 16px !important;
          }

          .gallery-upload-content {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .gallery-upload-text {
            order: 1;
          }

          .gallery-upload-badge {
            order: 2;
            align-self: center;
          }
          .ant-upload-list-item-actions .anticon-delete {
            background: transparent !important;
            color: #ff4d4f !important;
            padding: 4px;
            border-radius: 6px;
            transition: all 0.2s ease;
          }

          .ant-upload-list-item-actions .anticon-delete:hover {
            background-color: rgba(255, 77, 79, 0.1) !important;
            color: #cf1322 !important;
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
};

export default UploadImages;
