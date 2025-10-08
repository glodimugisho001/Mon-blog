import SearchBar from "../../components/SearchBar";
import Posts from "../../components/Posts";

export default function BlogHome() {
  return (
    <div className="">
      <section className="text-center mt-6">
        <h1 className="text-4xl font-bold text-neutral-800">
          Blog des développeurs modernes
        </h1>
        <p className="text-neutral-500 mt-2">
          Des idées, du code et des réflexions sur le web moderne ✨
        </p>
      </section>
      <SearchBar />
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Mes articles</h2>
        <Posts />
      </section>
    </div>
  );
}
