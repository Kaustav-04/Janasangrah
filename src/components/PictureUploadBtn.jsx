import { Cloudinary } from "@cloudinary/url-gen";
import React, { useEffect } from "react";

const PictureUploadBtn = ({ setImgUrl, imgUrl, disabled }) => {
  useEffect(() => {
    const cloudname = "ddzfucerv";
    const preset = "etbnphr9";
    var uploadWidget = cloudinary.createUploadWidget(
      {
        cloudName: cloudname,
        uploadPreset: preset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImgUrl(result.info.secure_url);
          uploadWidget.close();
          alert(`Image Uploaded at ${result.info.secure_url}`);
        }
      }
    );

    document.getElementById("upload_widget").addEventListener(
      "click",
      () => {
        uploadWidget.open();
      },
      false
    );
  }, []);
  return (
    <div>
      <button
        id="upload_widget"
        disabled={disabled}
        className={disabled ? "btn-disabled" : "btn-theme"}
      >
        Upload Picture
      </button>
      
    </div>
  );
};

export default PictureUploadBtn;
