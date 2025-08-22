import HeadingSection from "@/app/_components/HeadingSection";

const Kontak = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 pb-24 pt-10 md:py-16 lg:py-24 xl:py-32 px-8 sm:px-16 lg:px-24 xl:px-32">
      <div className="flex-1 flex flex-col justify-center">
        <HeadingSection
          subHeading="Kontak Kami"
          heading="Punya Pertanyaan? Tim Kami Siap Bantu!"
          subHeadingClass="text-center md:text-left"
          headingClass="w-full md:max-w-xl !mb-6 text-center md:text-left"
        />
        <p className="mb-4 md:mb-8 text-netral-700">
          Kami siap melayani kebutuhan transportasi Anda dengan cepat dan
          terpercaya.
        </p>

        <div className="flex flex-col gap-1">
          <div className="mb-2 flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 19C13.0523 19 13.5 18.5523 13.5 18C13.5 17.4477 13.0523 17 12.5 17C11.9477 17 11.5 17.4477 11.5 18C11.5 18.5523 11.9477 19 12.5 19Z"
                fill="#196FEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H18C19.1046 22 20 21.1046 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM18.36 20C18.36 20.1988 18.1988 20.36 18 20.36H7C6.80118 20.36 6.64 20.1988 6.64 20V4C6.64 3.90452 6.67793 3.81295 6.74544 3.74544C6.81295 3.67793 6.90452 3.64 7 3.64H18C18.1988 3.64 18.36 3.80118 18.36 4V20Z"
                fill="#196FEB"
              />
            </svg>
            <span className="text-netral-700">0815 - 4295 - 2220</span>
          </div>

          <div className="mb-2 flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.65 7.59C8.35449 7.31464 7.89399 7.32277 7.60838 7.60838C7.32277 7.89399 7.31464 8.35449 7.59 8.65L11.37 12.43V17.12C11.37 17.5342 11.7058 17.87 12.12 17.87C12.5342 17.87 12.87 17.5342 12.87 17.12V12.12C12.8698 11.9212 12.7907 11.7305 12.65 11.59L8.65 7.59Z"
                fill="#196FEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 2H14.24C16.3617 2 18.3966 2.84285 19.8969 4.34315C21.3971 5.84344 22.24 7.87827 22.24 10V14.24C22.24 18.6583 18.6583 22.24 14.24 22.24H10C5.58172 22.24 2 18.6583 2 14.24V10C2 5.58172 5.58172 2 10 2ZM14.24 20.74C17.8276 20.7345 20.7345 17.8276 20.74 14.24V10C20.7345 6.41243 17.8276 3.50551 14.24 3.5H10C6.41243 3.50551 3.50551 6.41243 3.5 10V14.24C3.50551 17.8276 6.41243 20.7345 10 20.74H14.24Z"
                fill="#196FEB"
              />
            </svg>

            <span className="text-netral-700">
              Setiap hari, 07.00 - 22.00 WIB
            </span>
          </div>

          <div className="flex items-start gap-4">
            <svg
              width="28"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.82 15.485C16.4551 15.3016 16.0106 15.4439 15.82 15.805C15.6438 16.1729 15.7895 16.6142 16.15 16.805C17.03 17.255 17.53 17.805 17.53 18.335C17.53 19.465 15.17 20.725 12.01 20.725C8.85 20.725 6.48 19.475 6.48 18.375C6.48 17.855 6.98 17.295 7.86 16.845C8.1239 16.7392 8.30528 16.4932 8.3284 16.2098C8.35151 15.9265 8.2124 15.6544 7.96914 15.5072C7.72588 15.36 7.4203 15.363 7.18 15.515C5.9659 15.9726 5.11948 17.083 5 18.375C5 20.595 8 22.265 12 22.265C16 22.265 19 20.595 19 18.375C18.8916 17.0718 18.0432 15.9472 16.82 15.485Z"
                fill="#196FEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.25 18.815V14.495C7.95689 14.0982 5.54253 11.2053 5.74127 7.89433C5.94 4.58336 8.68308 2 12 2C15.3169 2 18.06 4.58336 18.2587 7.89433C18.4575 11.2053 16.0431 14.0982 12.75 14.495V18.815C12.75 19.2292 12.4142 19.565 12 19.565C11.5858 19.565 11.25 19.2292 11.25 18.815ZM16.4242 6.44113C15.6818 4.65406 13.9351 3.49094 12 3.49498C9.36789 3.50048 7.2355 5.63287 7.23 8.26498C7.22596 10.2001 8.38908 11.9468 10.1762 12.6892C11.9632 13.4316 14.0216 13.0233 15.39 11.6549C16.7583 10.2866 17.1666 8.2282 16.4242 6.44113Z"
                fill="#196FEB"
              />
              <path
                d="M9.59 9.37498C10.0042 9.37498 10.34 9.0392 10.34 8.62498C10.34 7.47623 11.2712 6.54498 12.42 6.54498C12.8342 6.54498 13.17 6.2092 13.17 5.79498C13.17 5.38077 12.8342 5.04498 12.42 5.04498C11.4679 5.04763 10.5558 5.4284 9.88441 6.10354C9.21303 6.77867 8.83735 7.69285 8.84 8.64498C8.84264 8.84125 8.92314 9.02843 9.06379 9.16533C9.20445 9.30224 9.39374 9.37765 9.59 9.37498Z"
                fill="#196FEB"
              />
            </svg>

            <span className="text-netral-700">
              Jl. Kober Gg. Radiul No.51, Kober, Kec. Purwokerto Barat,
              Kabupaten Banyumas, Jawa Tengah
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <iframe
          title="Lokasi ARBITRANS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126607.60836846034!2d109.07796104335935!3d-7.411142599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e681826e855%3A0xd36f1a514b8a1525!2sArbi%20Rental%20Mobil%20Purwokerto%20-%20Sewa%20Mobil%20Purwokerto!5e0!3m2!1sid!2sid!4v1754939594888!5m2!1sid!2sid"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Kontak;
