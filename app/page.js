import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-full flex flex-row md:p-[70px] my-5 justify-evenly flex-wrap">
      <div className="sm:p-[10px_70px] border-2 border-gray-300 rounded text-center my-5 p-[10px_5%]">
        <h3 className="text-center font-sans text-3xl my-2">Student Login</h3>
        <p>To see all notifactions and update.</p>
        <Link href="/auth/login">
          <button className="bg-black text-white rounded-full p-[10px_40px] my-5 ease-linear">
            Login
          </button>
        </Link>
      </div>
      <div className="sm:p-[10px_70px] border-2 border-gray-300 rounded text-center my-5 p-[10px_5%]">
        <h3 className="text-center font-sans text-3xl my-2">College Login</h3>
        <p>To send the notifactions and update.</p>
        <Link href="/admin/login">
        <button className="bg-black text-white rounded-full p-[10px_40px] my-5 ease-linear">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
