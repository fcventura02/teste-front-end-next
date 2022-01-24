import Image from "next/image";
import { HeaderContainer } from "./style.js";
import logo from "../../assets/img/logo.png"
export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="New holland agriculture" />
    </HeaderContainer>
  );
}
