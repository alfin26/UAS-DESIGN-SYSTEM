"use client"
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

// --- IMPORT KOMPONEN ---
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import Button from './components/button';

// --- STYLED COMPONENTS ---
const PageWrapper = styled.div`
  background-color: #FAFAFA;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/free-vector/luxury-mandala-background-with-golden-arabesque-pattern-arabic-islamic-east-style_483537-2263.jpg?w=1380');
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--brand-primary);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    color: #f0f0f0;
  }
  
  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    height: 70vh;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  scroll-margin-top: 80px; 
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  color: #333;
  font-size: 2.2rem;
  
  span {
    border-bottom: 4px solid var(--brand-primary);
    padding-bottom: 10px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
  border: 1px solid #eee;
`;

const PriceTag = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--brand-primary);
  margin: 10px 0 20px 0;
`;

// --- PERBAIKAN LAYOUT FILOSOFI (HORIZONTAL) ---
const AboutSection = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: row; /* Memaksa Horizontal (Kiri-Kanan) */
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 80px 10%;
  scroll-margin-top: 80px;

  img {
    width: 45%; /* Gambar mengambil 45% lebar */
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .content {
    width: 50%; /* Teks mengambil 50% lebar */
  }

  /* Agar responsif di HP (Jadi susun ke bawah) */
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    
    img { width: 100%; }
    .content { width: 100%; }
  }
`;

// --- DATA PRODUK ---
const products = [
  { id: 1, name: "Kemeja Gajah Oling", price: "Rp 185.000", link: "https://wa.me/6281234567890?text=Order%20Kemeja", img: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lslruo7vj74t20" },
  { id: 2, name: "Kain Batik Tulis", price: "Rp 450.000", link: "https://wa.me/6281234567890?text=Order%20Kain", img: "https://koleksikikie.com/wp-content/uploads/2016/06/kain-batik-banyuwangi-motif-gajah-oling.jpg" },
  { id: 3, name: "Udeng Banyuwangi", price: "Rp 85.000", link: "https://wa.me/6281234567890?text=Order%20Udeng", img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/26/66324835-4923-4414-8742-c16e789966bf.jpg" },
];

export default function LandingPage() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <PageWrapper>
      {/* HEADER */}
      <Header 
        variant="sticky" 
        title="BATIK GAJAH OLING" 
        onSelect={(menu) => {
            if(menu === 'Home') scrollToSection('hero-top');
            if(menu === 'About') scrollToSection('about-section');
            if(menu === 'Contact') openExternalLink('https://wa.me/6281234567890'); 
        }} 
      />
      
      <div id="hero-top"></div> 

      {/* HERO SECTION */}
      <HeroSection>
        <h1>Warisan Agung Banyuwangi</h1>
        <p>
          Temukan keindahan motif Gajah Oling yang legendaris. 
          Diproses secara tradisional oleh pengrajin lokal.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          {/* TOMBOL INI AKAN SCROLL KE BAGIAN PRODUK */}
          <Button 
            variant="gradient" 
            onClick={() => scrollToSection('produk-section')}
          >
            Belanja Sekarang
          </Button>

          <Button 
            variant="outline" 
            style={{ background: 'white', color: '#333' }}
            onClick={() => scrollToSection('about-section')}
          >
            Tentang Kami
          </Button>
        </div>
      </HeroSection>

      {/* KATALOG PRODUK */}
      <SectionContainer id="produk-section">
        <SectionTitle><span>Koleksi Terpopuler</span></SectionTitle>
        <ProductsGrid>
          {products.map((item) => (
            /* KITA PAKAI VARIANT DEFAULT, BUKAN WITHARTICLE */
            <Card key={item.id} variant="default">
              <div>
                <ProductImage src={item.img} alt={item.name} />
                <h3 style={{fontSize: '1.2rem', marginBottom: '5px'}}>{item.name}</h3>
                <p style={{color: '#777', fontSize: '0.9rem'}}>Original Handmade</p>
              </div>
              
              <div>
                <PriceTag>{item.price}</PriceTag>
                
                {/* TOMBOL "BELI SEKARANG" - BERFUNGSI MEMBUKA LINK */}
                <Button 
                   variant="default" 
                   icon={<FaShoppingBag />}
                   style={{justifyContent: 'center', width: '100%'}}
                   onClick={() => openExternalLink(item.link)}
                >
                  Beli Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </ProductsGrid>
      </SectionContainer>

      {/* TENTANG KAMI - LAYOUT HORIZONTAL */}
      <AboutSection id="about-section">
        <img src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/17/batik-banyuwangi-1756534954.jpg" alt="Proses Membatik" />
        <div className="content">
          <SectionTitle style={{textAlign: 'left', marginBottom: '20px'}}>
            <span>Filosofi Gajah Oling</span>
          </SectionTitle>
          <p style={{lineHeight: '1.8', color: '#555', fontSize: '1.1rem'}}>
            Motif <strong>Gajah Oling</strong> menyerupai tanda tanya, yang secara filosofis bermakna Eling (Ingat) kepada Sang Pencipta.
            <br/><br/>
            Sebagai UMKM Lokal Banyuwangi, kami berkomitmen melestarikan budaya ini sekaligus memberdayakan ekonomi warga sekitar.
          </p>
          <div style={{marginTop: '30px'}}>
             <Button 
                variant="outline" 
                icon={<FaMapMarkerAlt />}
                onClick={() => openExternalLink('https://goo.gl/maps/placeholder')}
             >
                Kunjungi Gallery Kami
             </Button>
          </div>
        </div>
      </AboutSection>

      <Footer variant="detail" />
    </PageWrapper>
  );
}