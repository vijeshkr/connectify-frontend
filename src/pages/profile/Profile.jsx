import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import Update from '../../components/update/Update';

const Profile = () => {
  const [openUpdate, setOpenUpdate] =useState(false);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const queryClient = useQueryClient();

  // State to store userId
  const [userId, setUserId] = useState(parseInt(location.pathname.split('/')[2]));

  // Update userId whenever the URL changes
  useEffect(() => {
    const newUserId = parseInt(location.pathname.split('/')[2]);
    setUserId(newUserId);
    queryClient.invalidateQueries(['user', newUserId]);
    queryClient.invalidateQueries(['relationship', newUserId]);
  }, [location.pathname, queryClient]);

  // Fetch user data
  const { isLoading, error, data } = useQuery(['user', userId], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => res.data)
  );

  // Fetch relationship data
  const { isLoading: relationshipLoading, data: relationshipData } = useQuery(['relationship', userId], () =>
    makeRequest.get(`/relationships?followedUserId=${userId}`).then((res) => res.data)
  );

  // Mutation to handle follow/unfollow
  const mutation = useMutation((following) => {
    if (following) return makeRequest.delete(`/relationships?userId=${userId}`);
    return makeRequest.post('/relationships', { userId });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['relationship', userId]);
    },
  });

  const handleFollow = () => {
    mutation.mutate(relationshipData?.includes(currentUser.id));
  }


  return (
    <div className='dark:bg-neutral-800 min-h-screen'>
      {/* Images container */}
      {isLoading ? 'Loading...' : (
        <>
          <div className='w-full sm:h-72 h-60 relative'>
            <img className='w-full h-full object-cover' src={'http://localhost:8800/images/'+data.coverPic} alt="" />
            <img className='sm:w-44 sm:h-44 w-32 h-32 rounded-full object-cover absolute left-0 right-0 mx-auto sm:top-48 top-44' src={'http://localhost:8800/images/'+data.profilePic} alt="" />
          </div>
          {/* Profile container */}
          <div className='sm:px-10 px-3 py-3 sm:py-5'>
            <div className='h-48 bg-white shadow-custom rounded-md flex items-center justify-between p-5 mb-5 dark:bg-black dark:text-white'>
              <div className='flex-1 flex-wrap flex gap-3 text-gray-600 text-xl lg:text-2xl'>
                <a href="https://www.facebook.com/">
                  <FacebookOutlinedIcon />
                </a>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
                <a href="https://in.linkedin.com/">
                  <LinkedInIcon />
                </a>
                <a href="https://in.pinterest.com/">
                  <PinterestIcon />
                </a>
              </div>
              <div className='flex-1 flex flex-col gap-3 items-center'>
                <span className='font-medium lg:text-2xl text-xl pt-8 text-center'>{data.name}</span>
                {/* Container div */}
                <div className='flex w-full items-center justify-around text-gray-600 gap-2'>
                  <div className='hidden lg:flex gap-1'>
                    <PlaceIcon fontSize='small' />
                    <span className='text-xs'>{data.city}</span>
                  </div>
                  <div className='hidden lg:flex gap-1'>
                    <LanguageIcon fontSize='small' />
                    <span className='text-xs'>{data.website}</span>
                  </div>
                </div>
                {relationshipLoading ? '' : userId === currentUser.id ? (
                  <button onClick={()=>setOpenUpdate(true)} className='bg-blue-600 text-white rounded-md py-1 w-16 sm:text-base text-xs sm:w-24'>Update</button>
                ) : (
                  <button onClick={handleFollow} className='bg-blue-600 text-white rounded-md py-1 w-16 sm:text-base text-xs sm:w-24'>
                    {relationshipData.includes(currentUser.id) ? 'Following' : 'Follow'}
                  </button>
                )}
              </div>
              <div className='flex-1 flex items-center justify-end gap-3 text-gray-600'>
                <EmailIcon className='cursor-pointer' />
                <MoreVertIcon className='cursor-pointer' />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}

export default Profile;
