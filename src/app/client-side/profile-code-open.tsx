"use client";
import React, { useState } from "react";
import ModalWindow from '@/components/ui/modalwindow';
import HeaderItem from '@/components/ui/headeritem';

export default function ProfileCodeOpen() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
      <>
      {isModalOpen && (
        <ModalWindow closeModal={() => setModalOpen(false)} />
      )}
        <HeaderItem setModalOpen={setModalOpen} />
    </>
    )
}