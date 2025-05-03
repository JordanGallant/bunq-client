'use client';

export default function AccountCard({ title, icon: Icon, content, bgColor, interactive }) {
  const cardClasses = `
    ${bgColor}
    rounded-lg p-3 flex flex-col justify-between h-28
    ${interactive ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}
  `;

  return (
    <div className={cardClasses} onClick={() => interactive && alert(`${title} card clicked!`)}>
      <div className="flex items-center space-x-2 text-sm opacity-90">
        <Icon size={16} />
        <span>{title}</span>
      </div>
      <div className="text-lg font-semibold mt-auto">
        {content}
      </div>
    </div>
  );
}
