'use client';

import ActionButton from './ActionButton';
import { FaArrowUp, FaArrowDown, FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function ActionButtons() {
  const router = useRouter();
  return (
    <section className="flex justify-around items-center pt-4">
      <ActionButton text="Pay" icon={FaArrowUp} color="bg-orange-800" onClick={() => router.push('/payment')}/>
      <ActionButton text="Request" icon={FaArrowDown} color="bg-blue-600" />
      <ActionButton text="Add" icon={FaPlus} color="bg-purple-600" />
    </section>
  );
}
