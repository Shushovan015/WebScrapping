"use client";

import React, { FormEvent, Fragment, useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { addUserEmailToProduct } from "@/lib/actions";

interface Props {
  productId: string;
}

const Modal = ({ productId }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    //add user email to product
    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false);
    setEmail("");
    closeModal();
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track{" "}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        {/* <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-1"
            >
              <div>
                <Dialog.Overlay className="fixed inset-0" />
              </div>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-98"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content"></div>
            </Transition.Child>
          </div> */}
        {/* This is the starting of dialogue box */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>
              <h4 className="dialogue-head_text">
                Stay updated with product pricing alerts right in your inbox!
              </h4>
              <p className="text-sm text-gray-600 mt-3">
                Never miss a bargain again with our timely alerts!
              </p>
              <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="dialogue-input_container">
                  <Image
                    src="/assets/icons/mail.svg"
                    alt="mail"
                    width={18}
                    height={18}
                  />
                  <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="dialogue-input"
                  />
                </div>
                <button type="submit" className="dialogue-btn">
                  {isSubmitting ? "Submitting..." : "Track"}
                </button>
              </form>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
