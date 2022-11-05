import { HighlightSection } from "../../components/HighlightSection";
import { Quote } from "../../components/Quote";
import { SchoolNumbersResume } from "../../components/SchoolNumbersResume";
import "./styles.scss";

export function About() {
  return (
    <main className="about">
      <HighlightSection>
        <h1 className="text-center">Sobre</h1>
      </HighlightSection>
      <div className="container">
        <section className="two-column">
          <div>
            <h2>Escola Tecnológica Bezerra​</h2>
          </div>
          <div>
            <p>
              Como a instituição educacional mais antiga em funcionamento
              contínuo, a Escola Tecnológica Bezerra continua comprometida em
              fornecer uma educação academicamente rigorosa aos alunos que
              sairão da escola prontos para uma vida de liderança e serviço à
              comunidade. Da alfabetização à música e à arte, cada dia na
              Champions School é repleto de atividades enriquecedoras e
              divertidas.
            </p>
            <p>
              Nós nos esforçamos para estar comprometidos com os alunos que
              temos o privilégio de servir, em nossa associação de ex-alunos,
              nosso corpo docente e funcionários dedicados e talentosos. Também
              nos orgulhamos de ter o grupo mais ativo e útil de parceiros, pais
              visionários, simpatizantes, ex-alunos e amigos.
            </p>
          </div>
        </section>

        <section className="quotation">
          <img
            src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Quote
            quote="Todos os dias na Escola Tecnológica Bezerra são como uma bênção
                com os alunos ativos e funcionários talentosos ao redor."
            author="Anne Frank - Software Engineer"
          />
        </section>

        <SchoolNumbersResume />

        <section>
          <div className="two-column">
            <div>
              <h6>Lorem Ipsun</h6>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                neque assumenda error quasi aut delectus vel in repellat ex
                labore nesciunt molestias porro sequi voluptate facilis, libero
                quo laboriosam! Necessitatibus? porro sequi voluptate facilis,
                libero quo laboriosam! Necessitatibus?
              </p>
            </div>
          </div>

          <div className="two-column">
            <div>
              <h6>Lorem Ipsun</h6>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                neque assumenda error quasi aut delectus vel in repellat ex
                labore nesciunt molestias porro sequi voluptate facilis, libero
                quo laboriosam! Necessitatibus? porro sequi voluptate facilis,
                libero quo laboriosam! Necessitatibus?
              </p>
            </div>
          </div>

          <div className="two-column">
            <div>
              <h6>Lorem Ipsun</h6>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                neque assumenda error quasi aut delectus vel in repellat ex
                labore nesciunt molestias porro sequi voluptate facilis, libero
                quo laboriosam! Necessitatibus? porro sequi voluptate facilis,
                libero quo laboriosam! Necessitatibus?
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
