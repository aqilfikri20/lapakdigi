const products = [
  { number: "01", name: "Nama produk unggulan", description: "Deskripsi singkat produk UMKM", price: "Rp XX.XXX", tone: "product-card--green" },
  { number: "02", name: "Nama produk lainnya", description: "Deskripsi singkat produk UMKM", price: "Rp XX.XXX", tone: "product-card--sage" },
  { number: "03", name: "Nama produk lainnya", description: "Deskripsi singkat produk UMKM", price: "Rp XX.XXX", tone: "product-card--gray" },
];

function SunMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="sun-mark">
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 3v8m0 26v8M3 24h8m26 0h8M9.15 9.15l5.66 5.66m18.38 18.38 5.66 5.66m0-29.7-5.66 5.66M14.81 33.19l-5.66 5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Judul UMKM, beranda"><span className="brand-mark">U.</span><span>JUDUL UMKM</span></a>
        <nav aria-label="Navigasi utama"><a href="#cerita">Cerita kami</a><a href="#menu">Menu</a><a href="#kunjungi">Lokasi</a></nav>
        <a className="header-cta" href="#kunjungi">Mampir, yuk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> PRODUK LOKAL, CERITA ISTIMEWA <span className="eyebrow-line" /></p>
          <h1>Kenali<br /><em>judul UMKM</em> kamu.</h1>
          <p className="hero-description">Tulis deskripsi singkat UMKM di sini. Ceritakan produk atau layanan, keunikan usaha, dan alasan pelanggan memilihnya.</p>
          <div className="hero-actions"><a className="button button--dark" href="#menu">Lihat menu <span aria-hidden="true">↗</span></a><a className="text-link" href="#cerita">Kenalan dengan kami <span aria-hidden="true">↓</span></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>Jam operasional<br /><strong>Isi hari dan jam buka UMKM</strong></span></div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi produk untuk profil UMKM" role="img">
          <div className="art-sun"><SunMark /></div><span className="art-caption">A LITTLE PAUSE<br />IN YOUR DAY</span>
          <div className="coffee-steam coffee-steam--one" /><div className="coffee-steam coffee-steam--two" />
          <div className="coffee-cup"><div className="coffee-surface" /><div className="cup-logo">U.</div><div className="cup-handle" /></div>
          <div className="coffee-shadow" /><div className="art-leaf art-leaf--one" /><div className="art-leaf art-leaf--two" /><div className="art-leaf art-leaf--three" />
          <span className="art-stamp">DIBUAT<br />DENGAN<br /><b>♡</b></span>
          <div className="art-bottom"><span>PRODUK / LAYANAN UNGGULAN</span><span>▲ KOTA KAMU</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Produk unggulan, usaha lokal, dibuat sepenuh hati"><div className="ticker-track"><span>PRODUK UNGGULAN</span><i>✳</i><span>USAHA LOKAL</span><i>✳</i><span>DIBUAT SEPENUH HATI</span><i>✳</i><span>PRODUK UNGGULAN</span><i>✳</i><span>USAHA LOKAL</span><i>✳</i><span>DIBUAT SEPENUH HATI</span><i>✳</i></div></div>

      <section className="story section-wrap" id="cerita">
        <div className="section-label"><span>01 / CERITA UMKM</span><span>BERDIRI SEJAK [TAHUN]</span></div>
        <div className="story-grid"><h2>Cerita di balik<br /><em>usaha kami.</em></h2><div className="story-copy"><p>Tulis cerita singkat tentang UMKM di sini. Misalnya, kapan usaha dimulai, siapa yang menjalankannya, dan nilai yang selalu dijaga dalam setiap produk atau layanan.</p><a className="text-link" href="#kunjungi">Kenali usaha kami <span aria-hidden="true">↗</span></a></div><div className="stat"><strong>[XX]<span>+</span></strong><span>pelanggan<br />kami</span></div><div className="stat"><strong>[X]<span>★</span></strong><span>produk<br />unggulan</span></div></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-wrap"><div className="section-label"><span>02 / PRODUK UNGGULAN</span><span>DISESUAIKAN DENGAN UMKM</span></div><div className="menu-heading"><h2>Kenali produk<br /><em>unggulan kami.</em></h2><p>Tampilkan produk atau layanan utama.<br />Lengkapi nama, deskripsi, dan harga.</p></div>
          <div className="product-grid">{products.map((product) => <article className={`product-card ${product.tone}`} key={product.number}><div className="product-top"><span>{product.number} / FAVORIT</span><span aria-hidden="true">↗</span></div><div className="product-illustration" aria-hidden="true"><div className="product-plate"><div className="product-item">{product.number === "03" ? <span className="bread-shape" /> : <span className="glass-shape"><i /></span>}</div></div><span className="product-spark">✳</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{product.price}</strong></div></article>)}</div>
        </div>
      </section>

      <section className="visit section-wrap" id="kunjungi"><div className="visit-card"><div className="visit-copy"><p className="eyebrow"><span className="eyebrow-dot" /> HUBUNGI / KUNJUNGI KAMI</p><h2>Mari terhubung<br /><em>dengan kami.</em></h2><p>[Alamat lengkap UMKM]<br />[Hari dan jam operasional]</p><a className="button button--light" href="https://maps.google.com" target="_blank" rel="noreferrer">Lihat lokasi <span aria-hidden="true">↗</span></a></div><div className="visit-art" aria-hidden="true"><div className="visit-circle"><SunMark /><span>SELAMAT<br />DATANG</span></div><div className="visit-plant"><i /><i /><i /><i /><i /><b /></div><span className="visit-coordinate">KOTA / KABUPATEN<br />INDONESIA</span></div></div><footer><a className="brand footer-brand" href="#home"><span className="brand-mark">U.</span><span>JUDUL UMKM</span></a><span>Deskripsi singkat atau slogan UMKM.</span><span>© 2025 JUDUL UMKM · CONTOH</span></footer></section>
    </main>
  );
}
