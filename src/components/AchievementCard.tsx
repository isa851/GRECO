import React from 'react';
import { Medal } from 'lucide-react';

interface AchievementCardProps {
  place: number;
  count: number;
  color: string;
  bgColor: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ place, count, color, bgColor }) => {
  const getPlaceText = (place: number) => {
    switch (place) {
      case 1: return 'Первое место';
      case 2: return 'Второе место';
      case 3: return 'Третье место';
      default: return `${place} место`;
    }
  };

  return (
    <div className={`${bgColor} border border-gray-200 rounded-lg p-6 text-center`}>
      <div className="flex justify-center mb-3">
        <Medal size={32} className={color} />
      </div>
      <div className={`text-3xl font-bold mb-2 ${color}`}>{count}</div>
      <div className="text-gray-700 font-medium">{getPlaceText(place)}</div>
    </div>
  );
};

export default AchievementCard;