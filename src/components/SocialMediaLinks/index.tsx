import "./styles.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export function SocialMediaLinks() {
  return (
    <ul className="social-media-links">
      <li>
        <a href="https://facebook.com">
          <AiOutlineFacebook size={24} color="#4747d7" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <AiOutlineInstagram size={24} color="#4747d7" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <AiOutlineTwitter size={24} color="#4747d7" />
        </a>
      </li>
    </ul>
  );
}
