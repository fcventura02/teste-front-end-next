import theme from "../src/css/theme";
import {
  Banner,
  Card,
  CardItem,
  Container,
  ContainerText,
  Footer,
  Header,
  Paragraph,
  SubTitle,
  Title,
} from "../src/components";
import imgCabine from "../src/assets/img/cabineVehicle.png";
import imgGestao from "../src/assets/img/software.png";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <section>
          <ContainerText className="container--padding_vertical">
            <Paragraph>
              <b>Natural é aquilo que faz parte do dia a dia das pessoas</b>. O
              mundo está cada vez mais digital, dentro e fora das porteiras.
              Você e todos os envolvidos na cadeia produtiva do agronegócio já
              são digitais!
              <br />
              <br />
              <b>Já é natural se comunicar e comprar pelo celular</b>. É natural
              pesquisar pelas cotações na internet e acompanhar a previsão do
              tempo. Assim como, é
              <b>natural ser digital para plantar, colher e vender</b>.
              <br />
              <br />
              Para a New Holland, a tecnologia torna nossa vida mais fácil,
              descomplicada e eficiente. É
              <b>
                natural usar máquinas e equipamentos inovadores, aplicativos,
                drones, telas e demais soluções digitais
              </b>
              que ajudam na fazenda, para aproveitar ao máximo os recursos do
              campo.
            </Paragraph>
          </ContainerText>
        </section>
        <section>
          <Container>
            <iframe
              width="100%"
              height="539"
              src="https://www.youtube.com/embed/Yx0CTCo497s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Container>
          <ContainerText className="container--padding_vertical">
            <Title>SOLUÇÕES NEW HOLLAND</Title>
            <Paragraph>
              Os equipamentos da <b>New Holland</b> são
              <b>modernos, inovadores, intuitivos, tecnológicos</b>, e ao mesmo
              tempo, <b>muito fáceis de operar. Ideais</b> para
              <b>todos os tamanhos de propriedades</b> e perfis de produtores.
            </Paragraph>
          </ContainerText>
          <Container>
            <Card>
              <CardItem>
                <img
                  src={imgCabine.src}
                  alt="Cabine de um equipamento da New Holland"
                />

                <div>
                  <SubTitle theme={{ textColor: theme.colors.yellow }}>
                    MONITORES
                  </SubTitle>
                  <Paragraph>
                    Tenha o <b>gerenciamento preciso</b> do campo
                    <b>nas suas mãos</b> com tela colorida e recursos de alta
                    precisão. Dessa forma, você aproveita muito mais os insumos
                    e reduz os desperdícios.
                  </Paragraph>
                </div>
              </CardItem>
              <hr />
              <CardItem>
                <img src={imgGestao.src} alt="Software de gerencimaneto" />
                <div>
                  <SubTitle theme={{ textColor: theme.colors.yellow }}>
                    GESTÃO DE FROTA
                  </SubTitle>
                  <Paragraph>
                    <b>Através de rede móvel</b>, você pode se
                    <b>
                      conectar com as suas máquinas New Holland de onde estiver
                    </b>
                    . E ainda, pode enviar e receber informações
                    <b>em tempo real</b>.
                  </Paragraph>
                </div>
              </CardItem>
            </Card>
          </Container>
        </section>
        <section>
          <Container>
            <SubTitle>
              Quer conhecer a solução ideal para o seu campo? Fale agora mesmo
              com o nosso time de especialistas.
            </SubTitle>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
