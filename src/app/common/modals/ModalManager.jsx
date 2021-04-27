import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../../features/auth/LoginForm';
import TestModal from '../../../features/sandox/TestModal';
import BannerDelModal from '../../../features/banner/admin/BannerDelModal';

const ModalManager = () => {
  const modalLookup = {
    TestModal,
    LoginForm,
    BannerDelModal,
  };

  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
