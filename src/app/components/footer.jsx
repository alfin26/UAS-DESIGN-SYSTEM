"use client"
import styled, { css } from "styled-components"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import Button from "./button"

const variants = {
  default: css`
    background: var(--brand-primary); /* Warna Biru Apple */
    color: white;
    text-align: center;
    padding: 24px 0;

    p {
      margin: 0;
      font-size: 14px;
    }
  `,

  hero: css`
    background: linear-gradient(
      90deg,
      var(--brand-primary),
      var(--brand-primary-light)
    );
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
    border-radius: 12px;
    gap: 16px;

    h2 {
      font-size: 28px;
      font-weight: 700;
    }

    .socials {
      display: flex;
      gap: 16px;
      font-size: 22px;
    }

    .socials a {
      color: white;
      transition: 0.2s;
    }

    .socials a:hover {
      opacity: 0.8;
    }
  `,

  detail: css`
    background: var(--brand-bg-light); /* Warna Biru Muda */
    color: #333;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
    padding: 40px;
    border-top: 3px solid var(--brand-primary); /* Warna Biru Apple */

    h4 {
      margin-bottom: 10px;
      color: var(--brand-primary); /* Warna Biru Apple */
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 6px;
    }

    a {
      color: #333;
      text-decoration: none;
      font-size: 14px;
      transition: 0.2s;
    }

    a:hover {
      color: var(--brand-primary); /* Warna Biru Apple */
    }
  `,
}

const StyledFooter = styled.footer`
  ${({ $variant }) => variants[$variant] || variants.default};
  width: 100%;
  transition: all 0.3s ease;
`

export default function Footer({ variant = "default" }) {
  if (variant === "hero") {
    return (
      <StyledFooter $variant={variant}>
        <h2>Join Our Community 🚀</h2>
        <p>Stay connected with the latest updates and design tips</p>
        <div className="socials">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </StyledFooter>
    )
  }

  if (variant === "detail") {
    return (
      <StyledFooter $variant={variant}>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">help@mywebsite.com</a>
            </li>
            <li>
              <a href="#">+62 812 3456 7890</a>
            </li>
          </ul>
        </div>
      </StyledFooter>
    )
  }

  return (
    <StyledFooter $variant={variant}>
      <p>© 2025 MyWebsite. All rights reserved.</p>
    </StyledFooter>
  )
}