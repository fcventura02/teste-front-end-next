import { useState } from "react";
import theme from "../src/css/theme";
import {
  Banner,
  Card,
  CardItem,
  Container,
  ContainerText,
  Footer,
  Form,
  Header,
  Input,
  Paragraph,
  SubTitle,
  Title,
  Label,
  Span,
  Alert,
  ButtonClose,
} from "../src/components";
import imgCabine from "../src/assets/img/cabineVehicle.png";
import imgGestao from "../src/assets/img/software.png";
import { getCitys, getStates } from "../src/service";

const Home = ({ data }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [erro, setErro] = useState([]);
  const [timeAlert, setTimeAlert] = useState();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState([]);
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [newsLater, setNewsLater] = useState(false);
  const [terms, setTerms] = useState(false);
  function handleChangeName(e) {
    setErro(erro.filter((er) => er !== "name"));
    setName(e.target.value);
  }
  function handleChangeTel(value) {
    setErro(erro.filter((er) => er !== "tel"));
    setTel(
      value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{1})/, "$1")
        .replace(/(\d{1})(\d{4})(\d{4})/, "$1 $2-$3")
    );
  }
  function handleChangeEmail(e) {
    setErro(erro.filter((er) => er !== "email"));
    setEmail(e.target.value);
  }
  async function handleChangeState(e) {
    setErro(erro.filter((er) => er !== "state"));
    setState(e.target.value);
    if (e.target.value.length === 2) {
      const itemState = data.filter((item) => item.sigla === e.target.value);
      itemState.length === 1 &&
        (await getCitys(itemState[0].id).then((res) => {
          setListCity(res);
        }));
    }
  }
  function handleChangeCity(e) {
    setErro(erro.filter((er) => er !== "city"));
    setCity(e.target.value);
  }
  function handleChangeProduct(e) {
    setErro(erro.filter((er) => er !== "product"));
    setProduct(e.target.value);
  }
  function handleChangeTerms(e) {
    setErro(erro.filter((er) => er !== "terms"));
    setTerms(e.target.checked);
  }

  function validadeEmail(_email) {
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(_email)) {
      return false;
    }
    return true;
  }

  function handleChangeSubmit(e) {
    e.preventDefault();
    const containErro = hasErro();
    setErro(containErro);
    if (containErro.length === 0) {
      setIsOpenAlert(!isOpenAlert);
      setTimeAlert(
        window.setTimeout(() => {
          setIsOpenAlert(false);
        }, 5000)
      );
      clearInputs();
    }
  }

  function hasErro() {
    const isError = [];
    name.trim() === "" && isError.push("name");
    tel.trim() === "" && isError.push("tel");
    (email.trim() === "" || !validadeEmail(email)) && isError.push("email");
    state.trim() === "" && isError.push("state");
    city.trim() === "" && isError.push("city");
    product.trim() === "" && isError.push("product");
    !terms && isError.push("terms");
    return isError;
  }

  function clearInputs() {
    setName("");
    setTel("");
    setEmail("");
    setState("");
    setCity("");
    setListCity([]);
    setProduct("");
    setMessage("");
    setNewsLater(false);
    setTerms(false);
  }
  
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
          <ContainerText textAling="center" className="container--padding_vertical">
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
            <Form
              id="form"
              onSubmit={handleChangeSubmit}
              className="container--padding_vertical form"
            >
              <Input>
                <Label htmlFor="name">Nome</Label>
                <input
                  value={name}
                  onChange={handleChangeName}
                  type="text"
                  id="name"
                />
                <Span
                  className={`input_error${
                    erro.toString().includes("name") ? "-open" : ""
                  }`}
                  id="erroMessage-name"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input>
                <Label htmlFor="tel">Telefone</Label>
                <input
                  value={tel}
                  onChange={(e) => handleChangeTel(e.target.value)}
                  type="tel"
                  id="tel"
                  maxLength="16"
                  minLength="14"
                />
                <Span
                  className={`input_error${
                    erro.toString().includes("tel") ? "-open" : ""
                  }`}
                  id="erroMessage-tel"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input>
                <Label htmlFor="email">E-mail</Label>
                <input
                  value={email}
                  onChange={handleChangeEmail}
                  type="email"
                  id="email"
                />
                <Span
                  className={`input_error${
                    erro.toString().includes("email") ? "-open" : ""
                  }`}
                  id="erroMessage-email"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input className="form_input-sm">
                <Label htmlFor="state">Estado</Label>
                <input
                  value={state}
                  onChange={handleChangeState}
                  type="text"
                  id="state"
                  maxLength="2"
                  list="stateList"
                />
                <datalist id="stateList">
                  {data.map((item) => (
                    <option key={item.id} value={item.sigla}>
                      {item.nome}
                    </option>
                  ))}
                </datalist>
                <Span
                  className={`input_error${
                    erro.toString().includes("state") ? "-open" : ""
                  }`}
                  id="erroMessage-state"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input className="form_input-sm">
                <Label htmlFor="city">Cidade</Label>
                <input
                  value={city}
                  onChange={handleChangeCity}
                  type="text"
                  id="city"
                  list="cityList"
                  disabled={listCity.length === 0}
                />
                <datalist id="cityList">
                  {listCity.map((item) => (
                    <option key={item.id} value={item.nome} />
                  ))}
                </datalist>
                <Span
                  className={`input_error${
                    erro.toString().includes("city") ? "-open" : ""
                  }`}
                  id="erroMessage-city"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input>
                <Label htmlFor="products">Selecione um produto:</Label>
                <input
                  value={product}
                  onChange={handleChangeProduct}
                  type="text"
                  id="products"
                  list="productsList"
                />
                <datalist id="productsList">
                  <option value="Monitores"></option>
                  <option value="Gestão de frota"></option>
                </datalist>
                <Span
                  className={`input_error${
                    erro.toString().includes("product") ? "-open" : ""
                  }`}
                  id="erroMessage-products"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input>
                <Label htmlFor="message">
                  Mensagem <Span>(Opcional)</Span>
                </Label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  rows="10"
                ></textarea>
              </Input>
              <Input>
                <div>
                  <Label htmlFor="newsLater">
                    Desejo receber mais informações sobre produtos e serviços da
                    New Holland
                  </Label>
                  <input
                    checked={newsLater}
                    onChange={(e) => setNewsLater(e.target.checked)}
                    id="newsLater"
                    type="checkbox"
                  />
                </div>
              </Input>
              <Input>
                <div>
                  <Label htmlFor="terms">
                    Li e concordo com a <b>Política de Privacidade</b> deste
                    site
                  </Label>
                  <input
                    checked={terms}
                    onChange={handleChangeTerms}
                    id="terms"
                    type="checkbox"
                  />
                </div>
                <Span
                  className={`input_error${
                    erro.toString().includes("terms") ? "-open" : ""
                  }`}
                  id="erroMessage-terms"
                >
                  Este campo é obrigatório
                </Span>
              </Input>
              <Input>
                <input type="submit" value="Enviar" />
              </Input>
            </Form>
          </Container>
          <Container>
            <Alert
              id="alert"
              className={isOpenAlert ? "alert-open" : "alert-disabled"}
            >
              <ButtonClose
                onClick={() => {
                  window.clearInterval(timeAlert);
                  setIsOpenAlert(!isOpenAlert);
                }}
              />
              <SubTitle theme={{ textColor: theme.colors.yellow }}>
                Obrigado pelo seu contato!
              </SubTitle>
              <Paragraph>
                Assim que um de nossos especialistas vizualizar sua mensagem,
                entraremos em contato.
              </Paragraph>
            </Alert>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await getStates();
  return {
    props: {
      data: data,
    },
  };
}

export default Home;
