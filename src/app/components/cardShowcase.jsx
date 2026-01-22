"use client"
import styled from "styled-components"
import Card from "./card"

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

const CardRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export default function CardShowcase() {
  return (
    <ShowcaseWrapper>
      <h2 style={{ color: "#333" }}>🧩 Card Variants Showcase</h2>

      <CardRow>
        <Card variant="default" />
        <Card variant="withArticle" />
        <Card variant="article" />
      </CardRow>

      <div style={{ marginTop: "16px" }}>
        <h4>Cara Menggunakan:</h4>
        <pre>
{`<Card variant="default" />
<Card variant="withArticle" />
<Card variant="article" />`}
        </pre>
      </div>
    </ShowcaseWrapper>
  )
}
