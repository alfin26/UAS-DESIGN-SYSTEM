import "./globals.css";
// Jika di kode lama Anda ada import StyledComponentsRegistry, biarkan/uncomment baris di bawah:
// import StyledComponentsRegistry from './registry'; 

export const metadata = {
  title: "Batik Gajah Oling - UMKM Banyuwangi",
  description: "Pusat oleh-oleh dan Batik Khas Banyuwangi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* PERUBAHAN PENTING:
           1. Sidebar dihapus agar tampilan full screen.
           2. Container flex/grid dihapus.
        */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}