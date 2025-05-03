'use client';

import StatusBar from '../../components/layout/StatusBar';
import AppHeader from '../../components/layout/AppHeader';
import AwaitingEvents from '../../components/home/AwaitingEvents';
import AccountOverview from '../../components/home/AccountOverview';
import ActionButtons from '../../components/home/ActionButtons';
import BottomNav from '../../components/layout/BottomNav';
import SystemNav from '../../components/layout/SystemNav';

export default function BankingPage() {
  const userName = "Cao Minh Nguyen";
  const notificationCount = 1;
  const accounts = {
    totalBalance: "€ 0.00",
    main: "€ 0.00",
    savings: "€ 0.00",
  };
  const awaitingEvent = {
    title: "Tax Information Needed",
    details: "89 days remaining",
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col font-sans">
      {/* Mimic phone UI */}
      <div className="max-w-sm mx-auto flex flex-col flex-grow w-full">
        <StatusBar time="02:33" />
        <AppHeader notificationCount={notificationCount} />

        <main className="flex-grow overflow-y-auto px-4 py-5 space-y-6">
          <AwaitingEvents title={awaitingEvent.title} details={awaitingEvent.details} />
          <AccountOverview userName={userName} accounts={accounts} />
          <ActionButtons />
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
        <SystemNav />
      </div>
    </div>
  );
}
