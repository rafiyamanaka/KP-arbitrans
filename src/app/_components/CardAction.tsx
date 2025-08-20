"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { useState } from "react";
import Message from "./Message";

interface CardActionProps {
  isDisewa: boolean;
  id: string;
}

function CardAction({ isDisewa, id }: CardActionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const isNotDate = !startDate || !endDate;

  return (
    <>
      <Button
        onClick={() => {
          {
            if (isNotDate) handleShowMessage();
            else router.push(`/rental/${id}`);
          }
        }}
        rightIcon={
          !isDisewa && (
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.68698 14.9406C5.80493 15.0556 5.96397 15.1186 6.12865 15.1156C6.29284 15.1159 6.45091 15.0533 6.57032 14.9406L14.3453 7.15829V13.8739C14.3453 14.2191 14.6251 14.4989 14.9703 14.4989C15.1382 14.5035 15.3007 14.4394 15.4202 14.3214C15.5397 14.2035 15.606 14.0419 15.6037 13.8739V5.76375C15.6253 5.66867 15.6248 5.56823 15.5998 5.47037C15.5433 5.24892 15.3703 5.07601 15.1489 5.01945C15.051 4.99446 14.9506 4.99396 14.8555 5.01561H6.74532C6.40014 5.01561 6.12032 5.29543 6.12032 5.64061C6.12032 5.98579 6.40014 6.26561 6.74532 6.26561H13.4703L5.68698 14.0489C5.56738 14.1665 5.5 14.3271 5.5 14.4948C5.5 14.6624 5.56738 14.8231 5.68698 14.9406Z"
                fill="#F8F9FA"
              />
            </svg>
          )
        }
        text={isDisewa ? "Tidak Tersedia" : "Lihat Detail"}
        className={`w-full ${
          isDisewa
            ? "!bg-netral-300 !border-netral-400 !cursor-not-allowed text-netral-900"
            : ""
        }`}
        disabled={isDisewa}
      />
      {showMessage && (
        <Message text="Pilih tanggal awal dan akhir terlebih dahulu di Searchbar sebelum melakukan rental!" />
      )}
    </>
  );
}

export default CardAction;
