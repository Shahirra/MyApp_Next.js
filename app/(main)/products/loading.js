import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center">
        <h1 className="text-red-700 text-2xl pr-6">Loading</h1>
        <img src='/loading.png' width={24}></img>
    </div>
  )
}
export default loading;
