import React, { useContext, useState } from 'react'
import assets from "../assets/assets"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const [selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate();
  const [name, setname] = useState(authUser.fullName)
  const [bio, setBio] = useState(authUser.bio)
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImg)
    {
      await updateProfile({ fullName: name, bio });
      navigate('/')
      return;
    }
    const reander = new FileReader();
    reander.readAsDataURL(selectedImg);
    reander.onload = async () => {
      const base64Image = reander.result;
      await updateProfile({ profilePic: base64Image, fullName: name, bio });
      navigate('/');
    }
  }
  return (
    <div className="min-h-screen bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form onSubmit={handelSubmit} className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg ">Profile Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
            <input onChange={(e)=>{setSelectedImg(e.target.files[0])}} type="file" id="avatar" accept=".png ,.jpg,.jpeg" hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="icon_" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
            Upload profile Image
          </label>
          <input onChange={(e) => { setname(e.target.value) }} value={name} type="text" required placeholder="Your Name " className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-transparent" />
          <textarea onChange={(e) => { setBio(e.target.value) }} required placeholder="Write Profile Bio" className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-transparent" rows={4} value={bio}></textarea>
          <button className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer" type="submit">Save</button>
        </form>

        <img className={`max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10 ${selectedImg&& 'rounded-full'}`} src={assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfilePage
