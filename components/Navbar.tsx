import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center first-line:sm:px-16 px-6 py-4">
        <Link href="/" className="displayFlex">
          <Image
            src="/logo.svg"
            alt="Car Hug Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue reounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
