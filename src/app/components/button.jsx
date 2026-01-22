"use client"
import styled, { css } from "styled-components"

const variants = {
  default: css`
    background: var(--brand-primary); /* Warna Biru Apple */
    color: white;
    border: 1px solid var(--brand-primary);
  `,
  // GANTI 'icon' menjadi 'outline'. Ini akan memperbaiki tombol sidebar.
  outline: css`
    background: #ffffff;
    color: var(--brand-primary); /* Warna Biru Apple */
    border: 1px solid var(--brand-primary); /* Border Biru Apple */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 14px;
    
    &:hover {
      background: var(--brand-bg-light); /* Efek hover biru muda */
      opacity: 1;
      transform: scale(1.02);
    }
  `,
  gradient: css`
    background: linear-gradient(
      45deg,
      var(--brand-primary),
      var(--brand-primary-light)
    );
    color: white;
    border: none;
  `,
}

const StyledButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 12px; /* Dibuat lebih bulat */
  cursor: pointer;
  font-weight: 600;
  width: 100%; /* Membuat tombol sidebar jadi penuh */
  text-align: left; /* Ratakan teks tombol sidebar ke kiri */
  ${({ $variant }) => variants[$variant] || variants.default};
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  svg {
    font-size: 18px;
  }
`

export default function Button({ variant = "default", icon, children, ...props }) {
  return (
    <StyledButton $variant={variant} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  )
}