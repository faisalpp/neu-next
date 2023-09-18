'use client'

import './globals.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '@/store'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/DeskComp/ScrollToTop'
import Footer from '@/components/DeskComp/Footer'

let persistor = persistStore(store);

export const metadata = {
  title: 'Neu Appliance Outlet',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor} >
            <Navbar />
            <ScrollToTop />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
