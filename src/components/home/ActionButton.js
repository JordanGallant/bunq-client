'use client';

export default function ActionButton({ text, icon: Icon, color, onClick}) {
  

  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={onClick} 
        className={`${color} rounded-full w-14 h-14 flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
        aria-label={text}
      >
        <Icon size={24} />
      </button>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
