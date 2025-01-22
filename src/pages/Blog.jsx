import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

const BlogContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const BlogPost = styled(motion.article)`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  &:last-child {
    border-bottom: none;
  }
`

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`

const BlogExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const ReadMoreLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2023",
    date: "May 15, 2023",
    excerpt:
      "As technology continues to evolve, web development is constantly changing. In this post, we explore the emerging trends that will shape the future of web development in 2023 and beyond.",
    link: "/blog/future-of-web-development",
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Comprehensive Guide",
    date: "April 22, 2023",
    excerpt:
      "React Hooks have revolutionized the way we write React components. This guide covers everything you need to know about using hooks effectively in your projects.",
    link: "/blog/mastering-react-hooks",
  },
  {
    id: 3,
    title: "Optimizing Website Performance: Tips and Tricks",
    date: "March 10, 2023",
    excerpt:
      "A fast-loading website is crucial for user experience and SEO. Learn practical techniques to optimize your website's performance and improve load times.",
    link: "/blog/optimizing-website-performance",
  },
]

const Blog = () => {
  return (
    <BlogContainer>
      <Helmet>
        <title>Blog - John Doe's Portfolio</title>
        <meta
          name="description"
          content="Read John Doe's latest blog posts on web development trends, React tutorials, and performance optimization tips."
        />
      </Helmet>
      <h1>My Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogPost
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>{post.date}</BlogDate>
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          <ReadMoreLink href={post.link}>Read More</ReadMoreLink>
        </BlogPost>
      ))}
    </BlogContainer>
  )
}

export default Blog

