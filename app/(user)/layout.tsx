import '../../styles/globals.css';
import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html>
         <body className="max-w-7xl mx-auto">
            <Header />
            <Banner />
            {children}
         </body>
      </html>
   );
}
