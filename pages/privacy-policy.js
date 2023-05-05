import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">Privacy Policy</h1>
        {/* Add the content of your Privacy Policy here */}
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
