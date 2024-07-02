"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "@/components/testimonials/Testimonials";
import { useContext, useState } from "react";
import axios from "axios";
import Hero from "@/components/heroHome/page";
import Schedule from "@/components/schedule/page";
import Questions from "@/components/questions/page";
import { BooleanContext } from "./context";

export default function Home() {
  const { english } = useContext(BooleanContext);
  return (
    <main className={styles.main}>
      <Hero />
      <Schedule />
      <Questions />
      <Testimonials />
    </main>
  );
}
