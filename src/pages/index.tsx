import React from 'react';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import FeaturesSection from '@/components/Features';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import Reviews from '@/components/reviews';
import { Star, Phone } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const SITE_URL = 'https://pointgreyrentals.com';
const SITE_NAME = 'PG Wall Finishing & Repair Co.';
const SITE_DESCRIPTION = 'Your trusted appliance repair specialists in Vancouver. Professional service for all major brands plus expert wall repair and finishing services. Fast, reliable repairs when you need them.';
const BUSINESS_EMAIL = 'office@pointgreyrentals.com';
const BUSINESS_PHONE = '(647) 362-6948';

const Home = () => {
  const router = useRouter();
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: 'PG Appliance & Wall Repair',
    image: `${SITE_URL}/photos/homepage/1.jpg`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1223 Homer St',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      postalCode: 'V6B 1C5',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2763,
      longitude: -123.1223
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Vancouver'
      },
      {
        '@type': 'City',
        name: 'Burnaby'
      },
      {
        '@type': 'City',
        name: 'Richmond'
      },
      {
        '@type': 'City',
        name: 'North Vancouver'
      }
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: ['Appliance Repair', 'Wall Repair', 'Wall Finishing'],
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    areaServed: {
      '@type': 'City',
      name: 'Vancouver and Burnaby'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Appliance Repair',
            description: 'Expert repair services for all major home appliances including refrigerators, washers, dryers, dishwashers, and ovens'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wall Repair',
            description: 'Professional wall and drywall repair services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wall Finishing',
            description: 'Expert wall finishing and texturing services'
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>{SITE_NAME} | Vancouver Appliance Repair & Wall Finishing Experts</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={`${SITE_NAME} | Expert Appliance & Wall Repair Services`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={`${SITE_NAME} | Vancouver's Repair Experts`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="appliance repair vancouver, dishwasher repair, fridge repair, washing machine repair, wall repair vancouver, drywall repair" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={SITE_NAME} />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Vancouver" />
        <meta name="geo.position" content="49.2763;-123.1223" />
        <meta name="ICBM" content="49.2763, -123.1223" />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/1.jpg"
              alt="Professional Appliance Repair Services in Vancouver"
              fill
              className="object-cover object-[85%_25%]"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                PG Wall Finishing & Repair Co.
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-4">
                Vancouver Appliance Repair Specialists
              </p>
              <p className="text-xl md:text-2xl text-white mb-8">
                Expert repairs for all major appliances plus professional wall finishing services. Fast, reliable, and trusted by homeowners across Vancouver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => window.open('/quote', '_current')}
                  className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-yellow-400 transition-colors duration-300">
                  Get Free Estimate
                </button>
                <a 
                  href={`tel:${BUSINESS_PHONE}`}
                  className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  {BUSINESS_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-lg">500+ Satisfied Clients in Vancouver</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          <ComparisonSection />
          <StepsSection />
          <Reviews />
          <FAQ />
        </div>

        {/* CTA Section */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Your Appliances Fixed?
            </h2>
            <p className="text-gray-300 mb-12 text-xl max-w-3xl mx-auto">
              From refrigerators to dishwashers, we fix all major appliances. Plus, expert wall repair services when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/quote')}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-yellow-400 transition-colors duration-300">
                Request Free Quote
              </button>
              <button
                onClick={() => router.push('/services')}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;