import React from 'react'

const Comments = () => {

    // Temporary
    const comments = [
        {
            id:1,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            name:'Rhaenyr Targaryen',
            uderId:1,
            profilePicture:'https://images.immediate.co.uk/production/volatile/sites/3/2022/10/0852HOTDS01-ab006fe.jpg?quality=90&webp=true&resize=750,500',
        },
        {
            id:2,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            name:'Corlys Velaryon',
            uderId:2,
            profilePicture:'https://images.immediate.co.uk/production/volatile/sites/3/2022/10/lord-corlys-velaryon-5f28bcf.jpg?quality=90&webp=true&resize=638,426',
        },
    ]
  return (
    <div>
        {comments.map((comment) => (
            <div className='my-7 flex justify-between gap-5'>
                <img src={comment.profilePicture} alt="" className='w-10 h-10 rounded-full object-cover' />
                <div className='flex flex-col gap-1 flex-6'>
                    <span className='font-medium'>{comment.name}</span>
                    <p className='text-xs flex-1'>{comment.desc}</p>
                </div>
                <span className='self-center text-xs text-gray-400'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments