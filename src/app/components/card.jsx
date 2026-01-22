"use client"
import styled, { css } from "styled-components"
import Button from "./button"

const variants = {
  default: css`
    background: #ffffff;
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* Agar tinggi kartu sama rata */
  `,
  // Varian lain biarkan tetap ada untuk jaga-jaga
  withArticle: css`
    background: #ffffff;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
}

const StyledCard = styled.div`
  ${({ $variant }) => variants[$variant] || variants.default};
  width: 100%; /* Agar mengikuti lebar grid */
`

// PERUBAHAN PENTING: 
// Sekarang Card hanya membungkus {children} (isi apapun yang kita masukkan di page.jsx)
export default function Card({ variant = "default", children, ...props }) {
  return (
    <StyledCard $variant={variant} {...props}>
      {children}
    </StyledCard>
  )
}