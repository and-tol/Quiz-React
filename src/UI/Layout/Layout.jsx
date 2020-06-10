import React from 'react'

export const Layout = (props) => {
  return (
    <div className='flex flex-col h-screen'>
      <main className='flex flex-col flex-grow'>{props.children}</main>
    </div>
  );
}
