import Container from "@/components/ui/container";
import GlobalNav from "./global-nav";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <GlobalNav data={[]} />
        </div>
      </Container>
    </div>
  );
}

export default NavBar;