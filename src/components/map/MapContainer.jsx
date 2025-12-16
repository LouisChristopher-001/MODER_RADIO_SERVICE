import React, { useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, ZoomControl } from 'react-leaflet';
import { motion } from 'framer-motion';
import AreaPin from './AreaPin';
import Legend from './Legend';
import 'leaflet/dist/leaflet.css';

// Area data with coordinates for Islamabad & Rawalpindi
const areas = [
  {
    name: 'DHA Islamabad',
    searchInterest: 18,
    averagePrice: 'PKR 80-120 Lacs',
    position: [33.53157791249284, 73.16427094687188],
    description: 'Premium residential area with modern amenities'
  },
  {
    name: 'Bahria Town Rawalpindi',
    searchInterest: 16,
    averagePrice: 'PKR 60-100 Lacs',
    position: [33.47924779939434, 73.07855867499775], 
    description: 'Gated community with world-class facilities'
  },
  {
    name: 'Gulberg Greens',
    searchInterest: 14,
    averagePrice: 'PKR 70-110 Lacs',
    position: [33.61244002720776, 73.17363269025444], 
    description: 'Luxury housing society with green spaces'
  },
  {
    name: 'B-17 (MPCHS)',
    searchInterest: 12,
    averagePrice: 'PKR 50-80 Lacs',
    position: [33.691723384753004, 72.82653795410428], 
    description: 'Modern housing scheme with affordable options'
  },
  {
    name: 'G-13 / G-14',
    searchInterest: 10,
    averagePrice: 'PKR 40-70 Lacs',
    position: [33.651665784741986, 72.9662398776381], 
    description: 'Developed sectors with good infrastructure'
  },
  {
    name: 'Bani Gala',
    searchInterest: 8,
    averagePrice: 'PKR 90-150 Lacs',
    position: [33.713482874103214, 73.160517318895646], 
    description: 'Upscale residential area with scenic views'
  },
  {
    name: 'Sector G-11',
    searchInterest: 7,
    averagePrice: 'PKR 45-75 Lacs',
    position: [33.669887182454154, 72.99709412080357], 
    description: 'Well-established sector with commercial activity'
  }
];

export default function MapContainer() {
  useEffect(() => {
    // Ensure Leaflet CSS is loaded
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Map Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h3 className="text-2xl font-bold text-primary mb-2">
          Explore Investment Zones
        </h3>
        <p className="text-warmGray">
          Discover the most sought-after areas in Islamabad & Rawalpindi
        </p>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200"
      >
        <LeafletMap
          center={[33.6844, 73.0479]} // Centered on Islamabad
          zoom={12}
          style={{ height: '500px', width: '100%' }}
          zoomControl={false}
          scrollWheelZoom={true}
          className="z-0"
        >
          {/* Map Tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Zoom Controls */}
          <ZoomControl position="topright" />
          
          {/* Area Pins */}
          {areas.map((area, index) => (
            <AreaPin
              key={index}
              area={area.name}
              searchInterest={area.searchInterest}
              averagePrice={area.averagePrice}
              position={area.position}
            />
          ))}
        </LeafletMap>


      </motion.div>

      {/* Mobile Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 lg:hidden"
      >
        <Legend />
      </motion.div>

      
    </div>
  );
}
