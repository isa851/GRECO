import React from 'react';
import { Medal, Trophy, Target, User, Calendar } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: 'biography', name: 'Биография', icon: User },
    { id: 'achievements', name: 'Достижения', icon: Trophy },
    { id: 'statistics', name: 'Статистика', icon: Target },
    { id: 'career', name: 'Карьера', icon: Medal },
    { id: 'timeline', name: 'Хронология', icon: Calendar },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-300 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-300">
        <h3 className="font-semibold text-gray-900 text-sm">Содержание</h3>
      </div>
      <nav className="p-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-200 flex items-center gap-2 ${
                activeSection === section.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-700'
              }`}
            >
              <Icon size={14} />
              {section.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;