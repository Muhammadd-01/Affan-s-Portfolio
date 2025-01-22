import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

const ProjectsContainer = styled.div`
  padding: 2rem;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ProjectInfo = styled.div`
  padding: 1rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const FilterButton = styled.button`
  background-color: ${({ theme, active }) => (active ? theme.primary : "transparent")};
  color: ${({ theme, active }) => (active ? theme.body : theme.text)};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  }
`

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website built with React and Node.js",
    image: "https://example.com/ecommerce-project.jpg",
    link: "https://github.com/yourusername/ecommerce-project",
    category: "web",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application using OpenWeatherMap API and React",
    image: "https://example.com/weather-app.jpg",
    link: "https://github.com/yourusername/weather-app",
    category: "mobile",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A task management application built with React and Firebase",
    image: "https://example.com/task-manager.jpg",
    link: "https://github.com/yourusername/task-manager",
    category: "web",
  },
]

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

  return (
    <ProjectsContainer>
      <Helmet>
        <title>Projects - John Doe's Portfolio</title>
        <meta
          name="description"
          content="Explore John Doe's web development projects, including e-commerce websites, mobile apps, and more."
        />
      </Helmet>
      <h1>My Projects</h1>
      <FilterContainer>
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterButton>
        <FilterButton active={filter === "web"} onClick={() => setFilter("web")}>
          Web
        </FilterButton>
        <FilterButton active={filter === "mobile"} onClick={() => setFilter("mobile")}>
          Mobile
        </FilterButton>
      </FilterContainer>
      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects

