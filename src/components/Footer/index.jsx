import Image from "next/image";
import {
  FooterContainer,
  FooterContainerLink,
  FooterItem,
  FooterStyle,
} from "./style";
import facebook from "../../assets/img/XMLID_834_.png"
import intagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/XMLID_822_.png"
import { Span } from "..";
import theme from "../../css/theme";


export function Footer() {
  return (
    <FooterStyle>
      <FooterContainer as="section">
        <FooterItem>
          <Span theme={{textColor: theme.colors.white}}>
            Acesse <b>NEWHOLLAND.COM.BR</b>
          </Span>
          <FooterContainerLink>
            <a href="#" className="f-link" title="acessar o facebook">
              <Image src={facebook} alt="facebook" />
            </a>
            <a href="#" className="f-link" title="acessar o instagran">
              <Image src={intagram} alt="Instagran" />
            </a>
            <a href="#" className="f-link" title="acessar o youtube">
              <Image src={youtube} alt="Youtube" />
            </a>
          </FooterContainerLink>
        </FooterItem>
        <FooterItem>
          <Span theme={{textColor: theme.colors.white}}>
            © Copyright 2021. New Holland Agriculture All Right Reserved
          </Span>
          <Span theme={{textColor: theme.colors.white}}>Política de Privacidade</Span>
        </FooterItem>
      </FooterContainer>
    </FooterStyle>
  );
}
