import React from 'react';

interface InfoItem {
  label: string;
  value: string;
}

interface InfoBoxProps {
  title: string;
  items: InfoItem[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, items }) => {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
      <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>
      <table className="w-full text-sm">
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="py-1 pr-4 font-medium text-gray-700">{item.label}:</td>
              <td className="py-1 text-gray-900">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoBox;