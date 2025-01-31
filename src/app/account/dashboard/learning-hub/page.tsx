import React from 'react'
import LearningHub from './learningHub'
import NavbarJobSeeker from "../../../../components/Navbar-job-seeker"
import Footer from "../../../../components/Footer"
const page = () => {
  return (
    <div>
        <NavbarJobSeeker />
        <LearningHub />
        <Footer />
    </div>
  )
}

export default page