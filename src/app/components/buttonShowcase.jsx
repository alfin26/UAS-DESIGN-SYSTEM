"use client"
import styled from "styled-components"
import Button from "./button"
import { FaHeart, FaArrowRight } from "react-icons/fa"

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #f9f9ff;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export default function ButtonShowcase() {
  return (
    <ShowcaseWrapper>
      <h2 style={{ color: "#333" }}>🎨 Button Variants Showcase</h2>

      <ButtonRow>
        <Button variant="default">Default</Button>
        <Button variant="icon" icon={<FaHeart />}>
          Like
        </Button>
        <Button variant="gradient">
          Next <FaArrowRight />
        </Button>
      </ButtonRow>

      <div style={{ marginTop: "16px" }}>
        <h4>Cara Menggunakan:</h4>
        <pre>
{`<Button variant="default">Default</Button>
<Button variant="icon" icon={<FaHeart />}>Like</Button>
<Button variant="gradient">Next <FaArrowRight /></Button>`}
        </pre>
      </div>
    </ShowcaseWrapper>
  )
}
