'use client';

import { FaChevronDown } from 'react-icons/fa';
import { FaRegFolder, FaWallet, FaBullseye, FaPiggyBank } from 'react-icons/fa';
import { SiMastercard } from 'react-icons/si';
import AccountCard from './AccountCard';

export default function AccountOverview({ userName, accounts }) {
  const cardData = [
    {
      title: 'Cards',
      icon: FaRegFolder,
      content: (
        <div className="relative h-10 w-16 mt-1">
          <div className="absolute bottom-0 left-0 h-8 w-12 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-md shadow-md transform -rotate-3">
            <SiMastercard className="absolute top-1 right-1 text-white text-opacity-80" size={10}/>
          </div>
          <div className="absolute bottom-1 left-1 h-8 w-12 bg-gray-600 rounded-md shadow-md transform rotate-2 border border-gray-500">
            <SiMastercard className="absolute top-1 right-1 text-orange-500" size={10}/>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-800',
      interactive: true,
    },
    {
      title: 'Total Balance',
      icon: FaWallet,
      content: accounts.totalBalance,
      bgColor: 'bg-purple-700',
      interactive: false,
    },
    {
      title: 'Main',
      icon: FaBullseye,
      content: accounts.main,
      bgColor: 'bg-orange-800',
      interactive: true,
    },
    {
      title: 'Savings Acc...',
      icon: FaPiggyBank,
      content: accounts.savings,
      bgColor: 'bg-blue-700',
      interactive: true,
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">{userName}</h2>
        <FaChevronDown size={16} className="text-gray-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {cardData.map((card) => (
          <AccountCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
