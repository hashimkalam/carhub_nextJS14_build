"use client";

import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface carDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModel, car }: carDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
