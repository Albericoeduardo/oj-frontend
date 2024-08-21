import Navbar from '@/components/navbar/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

const projects = () => {
  return (
    <div>
      <Navbar />
      <h1>All projects</h1>
      <Projects />
    </div>
  )
}

export default projects