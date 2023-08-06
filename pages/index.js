
import React from 'react'
import Head from 'next/head'
import Main from '@/components/main'
import Nav from '@/components/nav'




const index = () => {
  return (
    <div>
      <Head>
        <title>weather app</title>
      </Head>
      {/* navbar */}
      <Nav />
      
      <div className='md:flex space-x-4 w-full justify-around '>
        {/* main weather widge */}
        <Main />


      </div>



      {/* footer */}

    </div>

  )
}

export default index

