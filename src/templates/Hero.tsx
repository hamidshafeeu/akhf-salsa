import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-opacity-10 bg-gradient-to-b from-green-akhdark to-green-akh">
    <Section yPadding="py-6 p-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Us</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-5 pb-5 p-6">
      <HeroOneButton
        title={
          <>
            {/* {'The modern landing page for\n'} */}
            <span className="font-bold text-gray-200">Unite & Care</span>
            {/* <img src="/assets/images/Logos-03.png" className=" w-1/4"/> */}
          </>
        }
        description="an aware and self-sufficient society that is based on moral values and good conduct"
        image="/assets/images/Logos-09.png"
        imageAlt="Second feature alt text"
      />
    </Section>
  </Background>
);

export { Hero };
