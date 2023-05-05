import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const EULA = () => {
  return (
    <Layout>
      <SEO title="EULA" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">End User License Agreement (EULA)</h1>
        {/* Add the content of your EULA here */}
      </main>
    </Layout>
  );
};

export default EULA;
