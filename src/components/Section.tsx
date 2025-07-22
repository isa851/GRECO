import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;