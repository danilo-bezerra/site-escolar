import { HighlightSection } from "../../components/HighlightSection";
import ImageCoding from "../../assets/coding.jpg";
import ImageDesign from "../../assets/design.jpg";
import ImageRobotics from "../../assets/robotic.jpg";

import "./styles.scss";

export function Activities() {
  return (
    <>
      <main className="about">
        <HighlightSection>
          <h1 className="text-center">Atividades extracurriculares</h1>
        </HighlightSection>
        <section className="container">
          <div className="activity">
            <img src={ImageCoding} alt="" />
            <div>
              <h3>Programação</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quisquam commodi, ducimus quaerat eaque ea accusantium
                facere similique hic perspiciatis blanditiis sequi quo. Dolor,
                sunt blanditiis expedita repellat saepe.
              </p>
            </div>
          </div>
          <div className="activity two-column">
            <div>
              <h3>Robótica</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quisquam commodi, ducimus quaerat eaque ea accusantium
                facere similique hic perspiciatis blanditiis sequi quo. Dolor,
                sunt blanditiis expedita repellat saepe.
              </p>
            </div>
            <img src={ImageRobotics} alt="" />
          </div>
          <div className="activity">
            <img src={ImageDesign} alt="" />
            <div>
              <h3>Design Gráfico</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quisquam commodi, ducimus quaerat eaque ea accusantium
                facere similique hic perspiciatis blanditiis sequi quo. Dolor,
                sunt blanditiis expedita repellat saepe.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
