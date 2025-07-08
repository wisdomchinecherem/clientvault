import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <button>
          <Link href={"/features/auth/Login"}>LogIn</Link>
        </button>
      </div>
    </>
  );
}
