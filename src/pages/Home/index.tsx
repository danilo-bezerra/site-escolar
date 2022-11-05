import { Button } from "../../components/Button";
import { Quote } from "../../components/Quote";
import { SchoolNumbersResume } from "../../components/SchoolNumbersResume";
import "./styles.scss";

export function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="overlay"></div>
        <div className="container">
          <div>
            <h1>Escola Tecnológica Bezerra​</h1>
            <p>
              É aqui que ensinamos aos alunos as habilidades necessárias para
              transformar a si mesmos, aos outros e às nossas comunidades
              globais.
            </p>
            <Button>Saiba Mais</Button>
          </div>
        </div>
      </section>
      <div className="container">
        <section>
          <div className="two-column">
            <h2>O aprendizado começa conosco</h2>
          </div>
          <div className="two-column">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                tempora repudiandae nobis ea rem, magni porro pariatur quas
                suscipit in molestias nisi, ipsa laborum. Porro a obcaecati
                rerum recusandae officia. sit amet, consectetur adipisicing
                elit. Sunt tempora repudiandae nobis ea rem, magni porro
                pariatur quas suscipit in molestias nisi.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                tempora repudiandae nobis ea rem, magni porro pariatur quas
                suscipit in molestias nisi, ipsa laborum. Porro a obcaecati
                rerum recusandae officia. sit amet, consectetur adipisicing
                elit. Sunt tempora repudiandae nobis ea rem, magni porro
                pariatur quas suscipit in molestias nisi.
              </p>
              <Button>Saiba mais sobre nós</Button>
            </div>
          </div>
        </section>

        <SchoolNumbersResume />

        <iframe
          src="https://www.youtube.com/embed/1MILPY1bPVY"
          title="YouTube video player"
          controls="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Quote
          quote="Todos os dias na Escola Tecnológica Bezerra são como uma bênção
                com os alunos ativos e funcionários talentosos ao redor."
          author="Anne Frank - Software Engineer"
        />
      </div>
    </main>
  );
}
