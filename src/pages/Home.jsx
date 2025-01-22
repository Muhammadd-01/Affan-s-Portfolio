import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`

const Bio = styled(motion.p)`
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Skill = styled(motion.span)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`

const Home = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>John Doe - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to John Doe's web developer portfolio. Explore my projects, services, and expertise in web development."
        />
      </Helmet>
      <ProfileImage src="https://example.com/your-image.jpg" alt="John Doe" />
      <Name initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        John Doe
      </Name>
      <Title initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        Full Stack Web Developer
      </Title>
      <Bio initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        I'm a passionate web developer with 5 years of experience in creating beautiful, responsive, and user-friendly
        websites. My expertise includes React, Node.js, and modern web technologies.
      </Bio>
      <SkillsContainer>
        {["React", "Node.js", "JavaScript", "HTML5", "CSS3", "MongoDB"].map((skill, index) => (
          <Skill
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
    </HomeContainer>
  )
}

export default Home

