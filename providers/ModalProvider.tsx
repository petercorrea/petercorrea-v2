'use client';

import NavModal from '@/components/NavModal';
import useNavModal from '@/hooks/useNavModal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navModal = useNavModal();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NavModal isOpen={navModal.isOpen} />
    </>
  );
};

export default ModalProvider;
