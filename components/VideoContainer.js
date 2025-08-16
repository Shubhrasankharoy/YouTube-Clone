"use client"

import { YOUTUBE_FILTERS } from '@/utils/constants';
import { setVideos } from '@/utils/redux/videosSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function VideoContainer({ className }) {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos)
  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(setVideos(data.items));
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);



  return (
    <div className={className + ' space-y-5 w-full'}>
      <div className="w-full overflow-x-auto hide-scrollbar overflow-y-hidden">
        <div className="flex space-x-1.5 whitespace-nowrap px-2 py-2">
          {YOUTUBE_FILTERS.map((filter, idx) => (
            <div
              key={idx}
              className="bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md px-4 py-1.5 cursor-pointer"
            >
              {filter}
            </div>
          ))}
        </div>
      </div>

      <div className='w-full h-full custom-scrollbar overflow-y-auto flex flex-wrap gap-3'>
        {videos !== null && videos.map(item => (
          <div key={item.id}>
            <img className='rounded-md' src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <div className='overflow-hidden w-80'>
              <p>{item.snippet.title}</p>
            </div>
            <div>
              <span>{item.statistics.likeCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
