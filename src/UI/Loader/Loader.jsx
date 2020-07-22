import React from 'react';
import './Loader.css'

export const Loader = () => {
  return (
    <section className='text-center'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
};
