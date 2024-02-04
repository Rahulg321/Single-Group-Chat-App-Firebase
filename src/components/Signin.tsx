import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { GiAtom } from "react-icons/gi";

const Signin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="bg-zinc-900">
      <div className="background-gradient absolute inset-0 z-0  max-h-screen"></div>
      <div className="pointer-events-none absolute inset-0 z-10 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      <div className="big-container  flex min-h-screen flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center ">
          <div
            className="animate-spin text-[10rem] text-white transition md:text-[20rem]"
            style={{ animationDuration: "6s" }}
          >
            <GiAtom />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start gap-6 md:justify-center">
          <span className="text-4xl font-extrabold text-white md:text-[4rem] ">
            Techno Club
          </span>
          <span className="block text-center text-2xl italic text-white">
            presents
          </span>
          <span className=" text-3xl text-white md:text-[5rem]">Free Talk</span>

          <button
            className=" z-[10] mt-4 bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-900"
            onClick={() => signInWithGoogle()}
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
