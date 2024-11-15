"use client";

import { useRef, useState, useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";

const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  useEffect(() => {
    if (fileUploadError || filePerc === 100) {
      setTimeout(() => {
        setFileUploadError(false);
        setFilePerc(0);
      }, 4000);
    }
  }, [filePerc, fileUploadError]);

  const handleFileUpload = (file) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center uppercase my-2">
        Profile
      </h1>
      <form className="flex flex-col gap-4 mt-6">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          className="hidden"
          accept="image/*"
        />
        <div className="relative self-center mt-2">
          <img
            className="rounded-full h-24 w-24 object-cover cursor-pointer"
            src={formData.avatar}
            alt="Profile Image"
          />
          <p className="text-sm ">
            {fileUploadError ? (
              <span className="text-red-600">
                Error uploading image(image must be less than 2mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-600">Image uploaded</span>
            ) : (
              ""
            )}
          </p>
          <div
            onClick={() => fileRef.current.click()}
            className="h-24 w-24 absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity rounded-full flex items-center justify-center cursor-pointer"
          >
            <IoIosCamera className="text-white text-2xl" />
          </div>
        </div>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer font-semibold flex items-center flex-nowrap gap-1">
          Delete account
          <MdDelete className=" text-xl mt-[.5px]" />
        </span>
        <span className="text-blue-500 cursor-pointer font-semibold flex items-center flex-nowrap gap-1">
          Sign Out
          <IoLogOutOutline className=" text-xl mt-[2px] " />
        </span>
      </div>
    </div>
  );
};

export default Profile;
