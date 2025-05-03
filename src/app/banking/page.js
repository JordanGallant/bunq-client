'use client';
import AppHeader from '../../components/layout/AppHeader';
import AwaitingEvents from '../../components/home/AwaitingEvents';
import AccountOverview from '../../components/home/AccountOverview';
import ActionButtons from '../../components/home/ActionButtons';
import BottomNav from '../../components/layout/BottomNav';
import { useEffect, useState } from 'react';

export default function BankingPage() {
  const [balance, setBalance] = useState("Loading...");

  let emotion;

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await fetch('https://bunq-api.onrender.com/account_balance');
      const data = await response.json();
      setBalance(`€ ${parseFloat(data.value).toFixed(2)}`);
    };

    fetchBalance();
  }, []);

  const userName = "Cao Minh Nguyen";
  const notificationCount = 1;
  const accounts = {
    totalBalance: balance,
    main: "€ 0.00",
    savings: "€ 0.00",
  };

  const awaitingEvent = {
    title: "Tax Information Needed",
    details: "89 days remaining",
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col font-sans">
      <div className="max-w-sm mx-auto flex flex-col flex-grow w-full">
        <AppHeader notificationCount={notificationCount} />

        <main className="flex-grow overflow-y-auto px-4 py-5 space-y-6">
          <AwaitingEvents title={awaitingEvent.title} details={awaitingEvent.details} />
          <AccountOverview userName={userName} accounts={accounts} />
          <ActionButtons />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
