import React from 'react';

export default function Legend() {
  const legendItems = [
    { color: 'bg-green-500', label: 'Very High Interest (15%+)', range: 'Prime Investment Zone' },
    { color: 'bg-blue-500', label: 'High Interest (10-14%)', range: 'High Growth Potential' },
    { color: 'bg-yellow-500', label: 'Medium Interest (7-9%)', range: 'Stable Investment' },
    { color: 'bg-gray-500', label: 'Low Interest (Below 7%)', range: 'Emerging Area' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
      <h4 className="font-semibold text-primary mb-3">Investment Interest Levels</h4>
      <div className="space-y-2">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              <div className="text-xs text-warmGray">{item.range}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="text-xs text-warmGray">
          <strong>Note:</strong> Search interest percentages are based on property inquiries and market demand.
        </div>
      </div>
    </div>
  );
}
