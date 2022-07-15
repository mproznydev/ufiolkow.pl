import React from 'react';
import { Helmet } from 'react-helmet';

function SEO() {
  return (
    <Helmet>
      <html lang="pl" />
      <title>uFiołków</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
    </Helmet>
  );
}

export default SEO;
