import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

const ResumeContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const ResumeSection = styled(motion.section)`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
`

const JobTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const Company = styled.h4`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`

const DateRange = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
`

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SkillItem = styled.li`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  svg {
    margin-right: 0.5rem;
  }
`

const Resume = () => {
  return (
    <ResumeContainer>
      <Helmet>
        <title>Resume - John Doe's Portfolio</title>
        <meta
          name="description"
          content="View John Doe's resume, including work experience, skills, and education in web development."
        />
      </Helmet>
      <h1>My Resume</h1>
      <DownloadButton href="/path-to-your-resume.pdf" download>
        <FaDownload /> Download Resume
      </DownloadButton>
      <ResumeSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceItem>
          <JobTitle>Senior Web Developer</JobTitle>
          <Company>Tech Solutions Inc.</Company>
          <DateRange>January 2020 - Present</DateRange>
          <Description>
            Led a team of developers in creating responsive web applications using React and Node.js. Implemented CI/CD
            pipelines and improved overall code quality and performance.
          </Description>
        </ExperienceItem>
        <ExperienceItem>
          <JobTitle>Full Stack Developer</JobTitle>
          <Company>Web Innovators LLC</Company>
          <DateRange>June 2017 - December 2019</DateRange>
          <Description>
            Developed and maintained multiple client websites and web applications. Collaborated with designers to
            implement user-friendly interfaces and improve UX.
          </Description>
        </ExperienceItem>
      </ResumeSection>
      <ResumeSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <SkillsList>
          <SkillItem>React</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>HTML5</SkillItem>
          <SkillItem>CSS3</SkillItem>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>Git</SkillItem>
          <SkillItem>RESTful APIs</SkillItem>
          <SkillItem>Agile Methodologies</SkillItem>
        </SkillsList>
      </ResumeSection>
      <ResumeSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle>Education</SectionTitle>
        <ExperienceItem>
          <JobTitle>Bachelor of Science in Computer Science</JobTitle>
          <Company>University of Technology</Company>
          <DateRange>September 2013 - May 2017</DateRange>
        </ExperienceItem>
      </ResumeSection>
    </ResumeContainer>
  )
}

export default Resume

