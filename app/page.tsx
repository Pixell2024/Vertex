import Image from "next/image";
import ComA from "./components/ComA";
import StatsSection from "./components/StatsSection";
import ImageGrid from "./components/ImageGrid";
import BillboardSection from "./components/BillboardSection";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnersShowcase from "./components/PartnersShowcase";
import ImageSignage from "./components/ImageSignage";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <ComA />
      <StatsSection />
      <ImageGrid />
      <BillboardSection />
      <ImageSignage />
      <PartnersShowcase />
      <TestimonialsSection />
      <BlogSection />
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
