import React from 'react'


export const Layout = (props) => {
  return (
    <div className='flex flex-col h-screen bg-teal-400'>
      <main className='flex flex-col flex-grow items-center'>{props.children}</main>
    </div>
  );
}
