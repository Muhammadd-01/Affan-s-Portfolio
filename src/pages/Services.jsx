import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaCode, FaMobile, FaServer, FaPencilAlt } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

const ServicesContainer = styled.div`
  padding: 2rem;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications tailored to your needs using modern technologies like React and Node.js.",
    icon: <FaCode />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native for both iOS and Android.",
    icon: <FaMobile />,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Robust and scalable server-side solutions using Node.js, Express, and MongoDB.",
    icon: <FaServer />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centered design approach to create intuitive and visually appealing interfaces.",
    icon: <FaPencilAlt />,
  },
]

const Services = () => {
  return (
    <ServicesContainer>
      <Helmet>
        <title>Services - John Doe's Portfolio</title>
        <meta
          name="description"
          content="Explore the web development services offered by John Doe, including custom web applications, mobile app development, and UI/UX design."
        />
      </Helmet>
      <h1>My Services</h1>
      <ServicesGrid>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services

