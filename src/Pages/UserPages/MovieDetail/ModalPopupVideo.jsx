/* eslint-disable */

import React from 'react'
import ReactPlayer from 'react-player'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import { useQuery } from 'react-query';

export default function ModalPopupVideo({ trailer }) {
  // const getListQuery = useQuery("list-query", callDataApi, {
  //   cacheTime: Infinity, //Thời gian cache data, ví dụ: 5000, sau 5s thì cache sẽ bị xóa, khi đó data trong cache sẽ là undefined
  //   refetchOnWindowFocus: false,
  //   staleTime: 10000,
  // });

  // const { data, isLoading, isFetching } = getListQuery;
  return (
    <div className='flex justify-center items-center py-5 ' >
      <ReactPlayer
        url={trailer}
        width="90%"
        height="90vh"
        playing={false}
        controls={true}
      />
      {/* <Skeleton width="5000px" height="5000px" /> */}
    </div>
  )
}
