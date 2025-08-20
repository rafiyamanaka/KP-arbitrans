"use server";

import { redirect } from "next/navigation";
import { Booking } from "../_types/booking";
import { supabase } from "./supabase";

export const createRental = async function (rentalData: Booking) {
  console.log(rentalData);

  const { error } = await supabase
    .from("booking")
    .insert([rentalData])
    .select();

  if (error) {
    console.error("Error dalam membuat rental: ", error);
    throw new Error("Gagal membuat rental.");
  }

  redirect("/rental/thankyou");
};
