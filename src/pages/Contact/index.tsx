import { HighlightSection } from "../../components/HighlightSection";
import { InfoBox } from "../../components/InfoBox";
import "./styles.scss";

import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function Contact() {
  return (
    <main className="contact">
      <HighlightSection className="two-column">
        <div>
          <h1>Contato</h1>
          <p>
            Quer saber sobre admissões, programa de estudos ou qualquer outra
            coisa? Você pode fazer login durante o horário comercial, ligar para
            nós ou simplesmente enviar o formulário aqui.
          </p>

          <InfoBox
            icon={<GoLocation size={20} />}
            title="Endereço"
            description="9999 lorem ipsum, dolor, ETC 9898 Brasil"
          />
          <InfoBox
            icon={<BsTelephone size={20} />}
            title="Telefone"
            description="+55 (88) 9 9999-9999"
          />
          <InfoBox
            icon={<AiOutlineMail size={20} color="#fff  " />}
            title="E-mail"
            description="email@example.com"
          />
        </div>
        <div className="form-container">
          <h6>Nos envie uma mensagem</h6>
          <form>
            <Input placeholder="Nome Completo" required />
            <Input placeholder="E-mail" required />
            <Input placeholder="Assunto" required />
            <TextArea placeholder="Mensagem" required />
            <Button>Enviar</Button>
          </form>
        </div>
      </HighlightSection>
    </main>
  );
}
