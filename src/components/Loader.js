import React from 'react';
import loder from "./Loader.gif"

export default function Loader() {
  return <div className='my-4 text-center'>
      <img src={loder} alt="error" style={{width:"50px"}} />
  </div>;
}
