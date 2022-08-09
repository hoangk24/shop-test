import Button from "components/button/Button";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/4">
        <img
          className="block w-full"
          src="https://bazar-react.vercel.app/assets/images/illustrations/404.svg"
          alt=""
        />
        <div className="flex justify-center gap-2 items-center mt-2">
          <Button className="btn-outline">Go Back</Button>
          <Button>Go to Home</Button>
        </div>
      </div>
    </div>
  );
}
