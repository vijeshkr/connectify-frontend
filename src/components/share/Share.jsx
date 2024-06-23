import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const Share = () => {

    const { currentUser } = useContext(AuthContext);

  return (
    <div className="mb-5 text-gray-400 bg-white dark:bg-black rounded-lg shadow-custom ">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-3">
            <img className='w-10 h-10 rounded-full object-cover' src={currentUser.profilePic} alt="" />
            <input className="text-xs text-wrap sm:text-sm outline-none px-5 py-3 bg-transparent w-full text-gray-400"
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
            />
          </div>
        </div>
        <hr className="mx-5 my-2 h-px " />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 ">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <div className="flex items-center gap-1 sm:gap-3 cursor-pointer">
                <img className="h-5" src={Image} alt="" />
                <span className="text-xs">Add Image</span>
              </div>
            </label>
            <div className="flex items-center gap-1 sm:gap-3 cursor-pointer">
              <img className='h-5' src={Map} alt="" />
              <span className="text-xs">Add Place</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-3 cursor-pointer">
              <img className='h-5' src={Friend} alt="" />
              <span className="text-xs">Tag Friends</span>
            </div>
          </div>
          <div>
            <button className="px-2 py-1 text-xs text-white bg-blue-600 rounded-sm">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;