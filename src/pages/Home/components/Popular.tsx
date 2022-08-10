import Heading from "components/heading/Heading";
import Loader from "components/loader/Loader";
import MovieCard from "components/movie-card/MovieCard";
import usePopular from "./Popular.hook";

export default function Popular() {
  const { handleBack, handleNext, data, loading } = usePopular();
  if (loading) {
    return <Loader className="h-[300px] w-full" />;
  }
  if (!data) {
    return null;
  }
  return (
    <div>
      <Heading large onBack={handleBack} onNext={handleNext}>
        🙄 Popular
      </Heading>
      <div className="grid grid-cols-6 gap-3">
        {data.map((it, idx) => (
          <MovieCard movie={it} key={idx} />
        ))}
      </div>
    </div>
  );
}
