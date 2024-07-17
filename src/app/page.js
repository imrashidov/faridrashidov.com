import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  return (
    <main>
      <div className="home">
        <h1>soon</h1>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/imrashidov">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/frashidov/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:frashidov@gmail.com">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
