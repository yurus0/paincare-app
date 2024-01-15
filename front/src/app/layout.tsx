import React from 'react';
import Footer from './components/Footer';
import './globals.css';
//helvetica font from google


export default function RootLayout({
  children,
  head
}: {
  children: React.ReactNode;
  head?: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head>
        {head}
      </head>
      <body className={"bg-black bg-opacity-10"}>
        {children}
        <Footer />
        
        </body>

    </html>
  )
}
