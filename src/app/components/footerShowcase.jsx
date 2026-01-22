"use client"
import styled from "styled-components"
import Footer from "./footer"

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #f9f9ff;
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;
`

export default function FooterShowcase() {
  return (
    <ShowcaseWrapper>
      <h2 style={{ color: "#333" }}>🦶 Footer Variants Showcase</h2>

      <Footer variant="default" />
      <Footer variant="hero" />
      <Footer variant="detail" />

      <div style={{ marginTop: "16px" }}>
        <h4>Cara Menggunakan:</h4>
        <pre>
{`<Footer variant="default" />
<Footer variant="hero" />
<Footer variant="detail" />`}
        </pre>
      </div>
    </ShowcaseWrapper>
  )
}
