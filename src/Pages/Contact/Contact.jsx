import React from 'react'
import banner from '../../Components/Assets/Category/category-4.jpg'
import PageInfo from '../../Components/PageInfo/PageInfo'
import ContactForm from '../../Components/ContactForm/ContactForm'
const Contact = () => {
  return (
    <div>
        <PageInfo image={banner} name={"CONTACT"}/>
        <ContactForm/>
    </div>
  )
}

export default Contact