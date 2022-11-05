import CountUp from "react-countup";
import "./styles.scss";

export function SchoolNumbersResume() {
  return (
    <section className="school-numbers-resume">
      <h6>Escola Campeã em resumo</h6>
      <div className="count-up-container">
        <div className="count-up">
          <span className="counter">
            <CountUp end={2} duration={3} />
            K+
          </span>
          <span>Inscrições atuais</span>
        </div>

        <div className="count-up">
          <span className="counter">
            <CountUp end={90} duration={3} />+
          </span>
          <span>Colaboradores</span>
        </div>

        <div className="count-up">
          <span className="counter">
            <CountUp end={80} duration={3} />+
          </span>
          <span>Inscrições atuais</span>
        </div>

        <div className="count-up">
          <span className="counter">
            <CountUp end={100} duration={3} />+
          </span>
          <span>Membros ativos da PTFA</span>
        </div>
      </div>
    </section>
  );
}
