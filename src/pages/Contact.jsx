import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
`

const SubmitButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact - John Doe's Portfolio</title>
        <meta
          name="description"
          content="Get in touch with John Doe for web development projects, collaborations, or inquiries."
        />
      </Helmet>
      <h1>Contact Me</h1>
      <ContactInfo>
        <ContactItem>
          <FaEnvelope />
          <span>john.doe@example.com</span>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <span>+1 (123) 456-7890</span>
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt />
          <span>New York, NY</span>
        </ContactItem>
      </ContactInfo>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  )
}

export default Contact

