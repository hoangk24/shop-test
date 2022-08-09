import Heading from "components/heading/Heading";
import Loader from "components/loader/Loader";
import MovieCard from "components/movie-card/MovieCard";
import usePopular from "./Popular.hook";

export default function Popular() {
  const { handleBack, handleNext, items } = usePopular();
  if (!items.length) {
    return <Loader className="w-full h-[300px]" />;
  }
  return (
    <div>
      <Heading large onBack={handleBack} onNext={handleNext}>
        🙄 Popular
      </Heading>
      <div className="grid grid-cols-5 gap-3">
        {items.map((it, idx) => (
          <MovieCard item={it} key={idx} />
        ))}
      </div>
    </div>
  );
}
