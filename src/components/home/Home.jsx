import React from 'react'
import { Wrapper } from './Wrapper'

export const Home = () => {
  const userName = JSON.parse(localStorage.getItem("user"))??{name: 'testing'};

  return (
    <div>
      {userName && <h1 className='text-center mt-12 text-5xl'>Welcome - {userName?.name}</h1>}
        <Wrapper />
    </div>
  )
}
