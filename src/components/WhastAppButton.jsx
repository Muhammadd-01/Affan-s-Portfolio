import React from "react"
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"

const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`

const WhatsAppButton = () => {
  return (
    <FloatingButton href="https://wa.me/03128538773" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </FloatingButton>
  )
}

export default WhatsAppButton

