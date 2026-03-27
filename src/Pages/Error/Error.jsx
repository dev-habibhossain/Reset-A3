import error404 from "../../assets/error-404.png";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <img src={error404} alt="404" className="max-w-md w-full" />
      <h2 className="text-3xl font-bold mt-8">Oops, page not found!</h2>
      <p className="text-slate-500 my-4">
        The page you are looking for is not available.
      </p>
      <button onClick={() => navigate("/")} className="btn btn-primary px-8">
        Go Back!
      </button>
    </div>
  );
}
