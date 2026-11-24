import site from "../data/siteData.json";
import logo from "../assets/logo.svg?url&no-inline";

export default function jsonLDGenerator() {
  const root = new URL("/", site.siteUrl).href;
  const organization = root + "#organizacion";
  const {address} = site.organization;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": organization, name: site.title, alternateName: "AMIAS",
        url: root, logo: new URL(logo, root).href, email: "hola@amias.mx", telephone: "+52 55 6651 8800",
        address: { "@type": "PostalAddress", streetAddress: address.street, addressLocality: address.city,
          addressRegion: address.state, postalCode: address.postalCode, addressCountry: "MX" },
      },
      { "@type": "WebSite", "@id": root + "#sitio", name: site.title, alternateName: "AMIAS",
        url: root, inLanguage: "es-MX", publisher: { "@id": organization } },
    ],
  };
}
