import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16  xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={140}
              height={30}
              alt="logo"
              priority={true}
              className="filter brightness-75 contrast-90"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
