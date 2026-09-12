import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { ShippingDeliveryPage } from './pages/ShippingDeliveryPage';
import { CancellationPolicyPage } from './pages/CancellationPolicyPage';
import { RefundReturnPage } from './pages/RefundReturnPage';
import { AboutUsPage } from './pages/AboutUsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
      <Route path="/shipping-policy" element={<ShippingDeliveryPage />} />
      <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
      <Route path="/refund-policy" element={<RefundReturnPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
