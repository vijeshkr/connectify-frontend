import React, { useContext, useState } from 'react'
import { makeRequest } from '../../axios';
import { useQueryClient, useMutation } from 'react-query';
import { AuthContext } from '../../context/authContext';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Update = ({ setOpenUpdate, user }) => {

  const { setCurrentUser, currentUser } = useContext(AuthContext);

  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: user.name,
    city: user.city,
    website: user.website,
  });

  const upload = async (file) => {
    console.log(file)
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put('/users', user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user']);
      }
    }
  );


  const handleClick = async (e) => {
    e.preventDefault();

    let coverUrl = user.coverPic;
    let profileUrl = user.profilePic;

    if (cover) coverUrl = await upload(cover);
    if (profile) profileUrl = await upload(profile);

    const updatedUserData = { ...texts, coverPic: coverUrl, profilePic: profileUrl };
    const updatedUserDatawithId = { ...texts, coverPic: coverUrl, profilePic: profileUrl,id:currentUser.id };

    // Assuming mutation.mutate updates the user on the server and returns the updated user data
    mutation.mutate(updatedUserData, {
      onSuccess: (data) => {
        // Update the local state with the updated user data
        setCurrentUser(updatedUserDatawithId);
        // Close the update modal and reset the form
        setOpenUpdate(false);
        setCover(null);
        setProfile(null);
      },
      onError: (error) => {
        console.error('Failed to update user data:', error);
      }
    });
  };


  return (
    
      <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-screen h-screen bg-transparent p-12 z-50'>
        <div className=' rounded-md m-auto w-full h-full lg:w-2/4 lg:h-3/4 bg-white dark:bg-black px-12 py-2 z-50 flex flex-col gap-5 shadow-custom relative'>
        <h1 className='text-gray-600 text-xl'>Update Your Profile</h1>
        <form className='flex flex-col gap-5'>
          <div className='flex flex-wrap g-5'>
            <div className='relative'>
            <label htmlFor="cover" className='flex flex-col gap-2 text-gray-600 text-sm'>
              <span className='mx-5'>Cover Picture</span>
              <div className='relative'>
                <img className='mx-5 w-24 h-24 object-cover z-50' src={cover ? URL.createObjectURL(cover) :
                  'http://localhost:8800/images/'+user.coverPic
                } alt="" />
                <CloudUploadIcon className='absolute top-0 bottom-0 left-0 right-0 m-auto text-3xl text-gray-400 cursor-pointer' />
              </div>
            </label>
            <input className='cursor-pointer inset-0 opacity-0 absolute top-14 bottom-0 left-0 right-0 m-auto' type="file" onChange={(e) => setCover(e.target.files[0])} />
            </div>
            <div className='relative'>
            <label htmlFor="profile" className='flex flex-col gap-2 text-gray-600 text-sm'>
              <span className='mx-5'>Profile Picture</span>
              <div className='relative'>
                <img className='mx-5 w-24 h-24 object-cover' src={cover ? URL.createObjectURL(profile) :
                  'http://localhost:8800/images/'+user.profilePic
                } alt="" />
                <CloudUploadIcon className='absolute top-0 bottom-0 left-0 right-0 m-auto text-3xl text-gray-400 cursor-pointer' />
              </div>
            </label>
            <input className='cursor-pointer inset-0 opacity-0 absolute top-14 bottom-0 left-0 right-0 m-auto' type="file" onChange={(e) => setProfile(e.target.files[0])} />
            </div>
          </div>
          
          <input placeholder='Email' className=' p-2 border-b-2 text-gray-600 bg-transparent outline-none' type="text" name='name' onChange={handleChange} />

          <input placeholder='City' className='p-2 border-b-2 text-gray-600 bg-transparent outline-none' type="text" name='city' onChange={handleChange} />

          <input placeholder='Website' className='p-2 border-b-2 text-gray-600 bg-transparent outline-none' type="text" name='website' onChange={handleChange} />
          <button className=' rounded-sm text-sm p-2 text-white bg-blue-600' onClick={handleClick}>Update</button>
        </form>
        <button className='bg-red-600 absolute top-3 right-5 text-white p-1 rounded-sm cursor-pointer' onClick={() => setOpenUpdate(false)}>Close</button>
      </div>
    </div>
  )
}

export default Update