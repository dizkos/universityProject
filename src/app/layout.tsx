import type { Metadata } from 'next';
import '@styles/globals.scss';
import { styreneAWebFont } from '../styles/setFont';

export const metadata: Metadata = {
  title: 'Тестовое задание',
  description: 'Тестовое задание по работе',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={styreneAWebFont.variable}
        style={{ fontFamily: 'var(--font-styrene-aweb)' }}
      >
        <div id="page">{children}</div>
      </body>
    </html>
  );
}
