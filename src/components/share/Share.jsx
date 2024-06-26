import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { useMutation , useQueryClient} from 'react-query';
import { makeRequest } from "../../axios";


const Share = () => {

  const [file,setFile] = useState(null);
  const [desc,setDesc] = useState('');

  // Upload image
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const mutation = useMutation((newPost) => {
        return makeRequest.post('/posts', newPost);
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
      },
    });

    const handleClick = async (e) => {
      e.preventDefault();
      let imgUrl = '';
      if(file) imgUrl = await upload();
      mutation.mutate({desc, img:imgUrl});
      setDesc('');
      setFile(null);

    };

  return (
    <div className="mb-5 text-gray-400 bg-white dark:bg-black rounded-lg shadow-custom ">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-3">
            <img className='w-10 h-10 rounded-full object-cover' src={'http://localhost:8800/images/'+currentUser.profilePic} alt="" />
            <input className="text-xs text-wrap sm:text-sm outline-none px-5 py-3 bg-transparent w-full text-gray-400"
              type="text"
              placeholder={`What's on your mind ${currentUser.name} ?`} onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex">
            {file && <img className="w-20 h-20 rounded-sm object-cover" src={URL.createObjectURL(file)}/>}
          </div>
        </div>
        <hr className="mx-5 my-2 h-px " />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 ">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}

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
            <button onClick={handleClick} className="px-2 py-1 text-xs text-white bg-blue-600 rounded-sm">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;