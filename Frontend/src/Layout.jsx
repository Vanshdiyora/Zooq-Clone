import React, { useState } from 'react';
import { Header, Footer } from './Index';
import { Outlet } from 'react-router';

function Layout() {
  const [logged, setLogged] = useState(null);
  let first=''
  let last=''
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <Outlet context={{ logged, setLogged ,first,last}} />
      <Footer />
    </div>
  );
}

export default Layout;
