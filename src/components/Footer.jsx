import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='footer w-full py-4 text-center bg-[#030014] border-t border-white/10 text-white/50'>
       <h1>&copy; {year} Kishan - All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
