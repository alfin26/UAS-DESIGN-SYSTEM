"use client"
import styled from "styled-components"
import { useRouter } from "next/navigation" // 1. Import router untuk pindah halaman
import Button from "./button"

const SidebarWrapper = styled.aside`
  background: #ffffff;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #666;
    padding: 0 10px;
    margin-top: 10px;
  }

  /* Garis pembatas tipis agar rapi */
  .divider {
    height: 1px;
    background: #e5e5e5;
    margin: 8px 0;
  }
`

export default function Sidebar({ onSelect }) {
  const router = useRouter(); // 2. Siapkan fungsi navigasi

  // Menu untuk UTS (Ganti komponen di halaman yang sama)
  const items = ["Home", "Button", "Card", "Header", "Footer", "Sidebar"]

  return (
    <SidebarWrapper>
      <h4>Components (UTS)</h4>
      {items.map((item) => (
        <Button
          key={item}
          onClick={() => onSelect(item)}
          variant="outline"
        >
          {item}
        </Button>
      ))}

      {/* 3. Tombol Khusus Project UAS */}
      <div className="divider" />
      <h4>Project UAS</h4>
      
      <Button 
        variant="gradient" // Saya beri warna gradient agar terlihat spesial
        onClick={() => router.push('/landingpage')} // Aksi: Pindah ke halaman baru
      >
        🚀 Buka Landing Page
      </Button>

    </SidebarWrapper>
  )
}