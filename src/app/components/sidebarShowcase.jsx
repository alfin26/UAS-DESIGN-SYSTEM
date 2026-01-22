"use client"
import styled from "styled-components"
import Sidebar from "./sidebar"

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background: #f9f9ff;
  border-radius: 12px;
  max-width: 1000px;
  margin: 0 auto;
`

const VariantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const LayoutRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
`

const PreviewBox = styled.div`
  position: relative;
  border: 1px dashed #ccc;
  border-radius: 12px;
  width: 300px;
  height: 250px;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: ${({ $variant }) =>
    $variant === "mini" ? "center" : "flex-start"};
  align-items: ${({ $variant }) =>
    $variant === "floating" ? "center" : "flex-start"};

  ${({ $variant }) =>
    $variant === "floating" &&
    `
    background: linear-gradient(180deg, #eef2ff, #fff);
    box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
  `}
`

const SidebarBox = styled.div`
  ${({ $variant }) =>
    $variant === "mini"
      ? `
        width: 60px;
        background: #6c63ff;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: white;
        font-size: 20px;
      `
      : `
        width: 180px;
        background: #6c63ff;
        height: 100%;
        color: white;
        padding: 16px;
      `}
`

export default function SidebarShowcase() {
  return (
    <ShowcaseWrapper>
      <h2 style={{ color: "#333" }}>📚 Sidebar Variants Showcase</h2>

      <LayoutRow>
        {/* Default Variant */}
        <VariantWrapper>
          <h4>Default Sidebar</h4>
          <PreviewBox>
            <SidebarBox>
              <Sidebar onSelect={() => {}} />
            </SidebarBox>
          </PreviewBox>
        </VariantWrapper>

        {/* Mini Variant */}
        <VariantWrapper>
          <h4>Mini Sidebar</h4>
          <PreviewBox $variant="mini">
            <SidebarBox $variant="mini">
              <span>🏠</span>
              <span>👤</span>
              <span>⚙️</span>
            </SidebarBox>
          </PreviewBox>
        </VariantWrapper>

        {/* Floating Variant */}
        <VariantWrapper>
          <h4>Floating Sidebar</h4>
          <PreviewBox $variant="floating">
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "20px",
                background: "rgba(108, 99, 255, 0.85)",
                color: "white",
                borderRadius: "16px",
                padding: "10px 16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <p style={{ margin: 0 }}>🏠 Home</p>
              <p style={{ margin: 0 }}>👤 Profile</p>
              <p style={{ margin: 0 }}>⚙️ Settings</p>
            </div>
          </PreviewBox>
        </VariantWrapper>
      </LayoutRow>

      <div style={{ marginTop: "16px" }}>
        <h4>Cara Menggunakan:</h4>
        <pre>
{`<Sidebar /> // Default sidebar
{/* Mini version bisa diatur lewat styling kecil */}
{/* Floating version bisa ditampilkan dengan posisi absolute/fixed */}`}
        </pre>
      </div>
    </ShowcaseWrapper>
  )
}
