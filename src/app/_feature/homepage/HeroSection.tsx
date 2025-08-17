"use client";
import { motion } from "motion/react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-primary pt-32 rounded-b-[56px] pb-24">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="mx-auto flex flex-col items-center justify-center text-center mb-16">
          <p className="font-medium mb-6 text-netral-300">
            Selamat Datang di ARBITRANS Rental Kendaraan Purwokerto!
          </p>
          <h1 className="text-3xl md:text-5xl text-netral-100 lg:text-6xl font-bold leading-tight">
            Rental Kendaraan Tanpa Repot. <br />
            Kapan Saja, Dimana Saja!
          </h1>
        </div>

        <div className="w-full flex justify-center mt-8">
          <div className="w-[90%] md:w-[80%] h-[413px] rounded-t-[104px] bg-gradient-to-b from-[#6FB8FF] to-[#3F8CFF]/0" />
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center -mt-[250px]"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Image
          src="/kendaraan.png"
          alt="Kendaraan ARBITRANS"
          width={1200}
          height={300}
          className="object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
