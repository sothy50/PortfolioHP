//"use client";
import Terminal from '../ui/terminal';
import React, { useState } from 'react';
interface ModalProps {
    closeModal: () => void;
  }
export default function ModalWindow({closeModal}: ModalProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    // 既存のコード ...
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        {/* モーダルウィンドウのコンテンツ */}
        <Terminal closeModal={closeModal} />
      </div>
    );
  }
  