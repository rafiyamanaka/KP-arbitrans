"use server";

import { redirect } from "next/navigation";
import { Booking } from "../_types/booking";
import { supabase } from "./supabase";
import { getKendaraan } from "./data-services";

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

export async function loadMoreKendaraan(
  currentCount: number,
  jenisKendaraan?: string,
  startDate?: string,
  endDate?: string
) {
  try {
    const additionalData = await getKendaraan(
      8,
      currentCount,
      jenisKendaraan,
      startDate,
      endDate
    );

    return {
      success: true,
      data: additionalData,
      hasMore: additionalData.length === 8, 
    };
  } catch (error) {
    console.error("Error in loadMoreKendaraan:", error);
    return {
      success: false,
      error: "Gagal memuat data tambahan",
      data: [],
      hasMore: false,
    };
  }
}
