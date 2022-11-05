import { HighlightSection } from "../../components/HighlightSection";
import "./styles.scss";

import cS from "../../assets/sc.jpg";
import math from "../../assets/math.jpg";
import electric from "../../assets/eletrica.jpg";
import electronic from "../../assets/eletronica.jpg";

export function Academics() {
  return (
    <main className="academics">
      <HighlightSection>
        <h1 className="text-center">Académico</h1>
      </HighlightSection>
      <div className="container">
        <section>
          <h6>Visão geral do nosso currículo</h6>
          <h2>Um compromisso com a excelência</h2>
          <div className="two-column">
            <p>
              A Escola Tecnológica Bezerra visa oferecer a todos os nossos
              alunos um currículo amplo e equilibrado que proporcione atividades
              gratificantes e estimulantes para prepará-los para o melhor da
              vida social e cultural.
            </p>
            <p>
              Seja em nossos livros ou treinamento prático, garantimos que cada
              aluno receba atenção pessoal para lidar e prosperar em todas as
              disciplinas para obter melhores pontuações e um futuro melhor.
            </p>
          </div>
        </section>
        <section className="knowledge-areas">
          <div className="two-column c1-2">
            <img src={cS} alt="" />
            <div className="texts">
              <h3>Ciência da computação</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                voluptates temporibus harum totam tempora sed eos beatae?
                Mollitia alias at aperiam molestiae reprehenderit est, sapiente
                amet temporibus, recusandae doloribus cum.
              </p>
            </div>
          </div>
          <div className="two-column c1-2">
            <img src={electronic} alt="" />
            <div className="texts">
              <h3>Eletrónica</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                voluptates temporibus harum totam tempora sed eos beatae?
                Mollitia alias at aperiam molestiae reprehenderit est, sapiente
                amet temporibus, recusandae doloribus cum.
              </p>
            </div>
          </div>
          <div className="two-column c1-2">
            <img src={electric} alt="" />
            <div className="texts">
              <h3>Elétrica</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                voluptates temporibus harum totam tempora sed eos beatae?
                Mollitia alias at aperiam molestiae reprehenderit est, sapiente
                amet temporibus, recusandae doloribus cum.
              </p>
            </div>
          </div>
          <div className="two-column c1-2">
            <img src={math} alt="" />
            <div className="texts">
              <h3>Matemática</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                voluptates temporibus harum totam tempora sed eos beatae?
                Mollitia alias at aperiam molestiae reprehenderit est, sapiente
                amet temporibus, recusandae doloribus cum.
              </p>
            </div>
          </div>
        </section>

        <section className="college-opportunities">
          <section>
            <h6>Oportunidades de faculdade</h6>

            <div className="three-column">
              <img
                src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-1.png"
                alt=""
              />
              <img
                src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao2_vertical_cor_300dpi.png"
                alt=""
              />
              <img
                src="https://www.ufca.edu.br/portal/wp-content/uploads/2019/10/Assinatura-Vertical-Principal_Prancheta-1.png"
                alt=""
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
