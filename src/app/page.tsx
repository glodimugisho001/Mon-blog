import React from "react";
import Hero from "../components/Hero";
import LastPosts from "../components/LastPosts";
import WhyBlog from "../components/WyBlog";

export default function page() {
  return (
    <div className="">
      <Hero />
      <section className="my-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Mes Derniers articles
        </h2>
        <LastPosts />
      </section>
      <WhyBlog />
    </div>
  );
}
