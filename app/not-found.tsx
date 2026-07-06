"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '3rem', color: '#da4747' }}>404</h1>
      <h2>Aradığın Sayfa Bulunamadı!</h2>
      <p style={{ margin: '20px 0', color: '#666' }}>
        3 saniye içinde ana sayfaya otomatik olarak yönlendiriliyorsun...
      </p>
      <Link href="/" style={{ color: '#0070f3', fontWeight: 'bold' }}>
        Hemen Ana Sayfaya Dön
      </Link>
    </div>
  );
}