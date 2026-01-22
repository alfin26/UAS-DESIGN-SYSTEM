"use client"
import styled, { css } from "styled-components"

const variants = {
  default: css`
    background-color: var(--brand-primary); /* Warna Biru Apple */
    color: white;
    position: relative;
  `,
  sticky: css`
    background-color: #ffffff;
    color: #333;
    position: sticky;
    top: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
  `,
  gradient: css`
    background: linear-gradient(
      90deg,
      var(--brand-primary),
      var(--brand-primary-light)
    );
    color: white;
    position: relative;
  `,
}

const StyledHeader = styled.header`
  ${({ $variant }) => variants[$variant] || variants.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  transition: all 0.3s ease;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  nav {
    display: flex;
    gap: 16px;
  }

  /* Ubah 'a' menjadi 'button' agar jelas ini adalah aksi */
  button {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    transition: 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: inherit;
  }

  button:hover {
    opacity: 0.8;
  }
`

// TAMBAHKAN 'title' sebagai prop baru
export default function Header({ variant = "default", title = "MyWebsite", onSelect }) {
  return (
    <StyledHeader $variant={variant}>
      {/* GUNAKAN PROP 'title' DI SINI */}
      <h1>{title}</h1> 
      <nav>
        <button onClick={() => onSelect("Home")}>Home</button>
        <button onClick={() => onSelect("About")}>About</button>
        <button onClick={() => onSelect("Contact")}>Contact</button>
      </nav>
    </StyledHeader>
  )
}