"use client"
import styled from "styled-components"
import Header from "./header"

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

export default function HeaderShowcase() {
  return (
    <ShowcaseWrapper>
      <h2 style={{ color: "#333" }}>🧭 Header Variants Showcase</h2>

      <Header variant="default" title="Default Header" />
      <Header variant="sticky" title="Sticky Header" />
      <Header variant="gradient" title="Gradient Header" />

      <div style={{ marginTop: "16px" }}>
        <h4>Cara Menggunakan:</h4>
        <pre>
{`<Header variant="default" />
<Header variant="sticky" />
<Header variant="gradient" />`}
        </pre>
      </div>
    </ShowcaseWrapper>
  )
}
