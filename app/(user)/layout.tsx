import '../../styles/globals.css';
import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html>
         <body>
            <div className="bg-dark_background min-h-screen">
               <div className="max-w-7xl mx-auto">
                  <Header />
                  <Banner />
                  {children}
                  <Footer />
               </div>
            </div>
         </body>
      </html>
   );
}
