import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Weather from './components/Weather';

import './custom.css'

export default function App() {
  return (
    <Layout>
      <Home />
      <Weather />
    </Layout>
  );
}

