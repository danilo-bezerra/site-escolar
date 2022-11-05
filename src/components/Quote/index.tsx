import { FaQuoteLeft } from "react-icons/fa";
import "./styles.scss";

type Props = {
  quote: string;
  author: string;
};

export function Quote({ quote, author }: Props) {
  return (
    <div className="quote">
      <FaQuoteLeft size={42} />
      <blockquote>{quote}</blockquote>
      <h5>{author}</h5>
    </div>
  );
}
