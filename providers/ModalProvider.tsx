'use client';

import Modal from '@/components/Modal';
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
      <Modal isOpen={navModal.isOpen} />
    </>
  );
};

export default ModalProvider;
