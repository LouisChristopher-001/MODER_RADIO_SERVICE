import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PopupCard from './PopupCard';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom pin icon
const createCustomIcon = (interest) => {
  const getPinColor = (interest) => {
    if (interest >= 15) return '#10b981'; // green
    if (interest >= 10) return '#3b82f6'; // blue
    if (interest >= 7) return '#f59e0b';  // yellow
    return '#6b7280'; // gray
  };

  const getPinSize = (interest) => {
    if (interest >= 15) return 'large';
    if (interest >= 10) return 'medium';
    return 'small';
  };

  const size = getPinSize(interest);
  const color = getPinColor(interest);
  
  const sizeMap = {
    small: { width: 20, height: 30 },
    medium: { width: 25, height: 35 },
    large: { width: 30, height: 40 }
  };

  const dimensions = sizeMap[size];

  const iconHtml = `
    <div style="
      width: ${dimensions.width}px;
      height: ${dimensions.height}px;
      background: ${color};
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${size === 'large' ? '14px' : size === 'medium' ? '12px' : '10px'};
      color: white;
      font-weight: bold;
    ">
      <span style="transform: rotate(45deg);">🏡</span>
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: 'custom-pin',
    iconSize: [dimensions.width, dimensions.height],
    iconAnchor: [dimensions.width / 2, dimensions.height],
    popupAnchor: [0, -dimensions.height / 2]
  });
};

export default function AreaPin({ area, searchInterest, averagePrice, position }) {
  const customIcon = createCustomIcon(searchInterest);

  return (
    <Marker position={position} icon={customIcon}>
      <Popup 
        maxWidth={300}
        minWidth={280}
        className="custom-popup"
        closeButton={true}
        autoClose={false}
        closeOnClick={false}
      >
        <PopupCard 
          area={area}
          searchInterest={searchInterest}
          averagePrice={averagePrice}
        />
      </Popup>
    </Marker>
  );
}
