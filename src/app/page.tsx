import React from "react";
import Hero from "../components/Hero";
import LastPosts from "../components/LastPosts";
import WhyBlog from "../components/WyBlog";

export default async function page() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <section className="px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes derniers articles
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Des tutoriels courts, des guides clairs et des conseils actionnables
            pour faire progresser votre stack front-end.
          </p>
        </div>
        <div className="mt-12">
          <LastPosts />
        </div>
      </section>
      <WhyBlog />
    </div>
  );
}
