export function convertRupiah(nominal: string | number): string {
  const number = String(nominal).replace(/\D/g, "");
  if (!number) return "";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(number));
}
