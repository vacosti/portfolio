import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";

import "./Footer.css";

const projectsTexts = {
  "pt-br": {
    webapp: {
      bullets: [
        "Web App com full-text search e autocomplete (usando elasticsearch) para listar os mesmos produtos (ou similares) em diferentes mercados com seus respectivos preços",
        "Backend em Python (Flask), PostgreSQL (SQLAlchemy as ORM) e Elasticsearch e front-end em React",
      ],
      link: "https://verbarato.online/",
      link_text: "veja a aplicação web!",
    },
    perceptron: {
      bullets: ["Rede Neural simples (MLP) utilizando perceptrons em Python."],
      link: "https://github.com/vacosti/perceptrons",
      link_text: "Link para o github",
    },
    automation: {
      bullets: [
        "Web-crawler utilizando Selenium, e Celery (Python) para orquestrar todo o processo de obtenção e posterior estruturação dos dados.",
      ],
    },
  },
  "en-us": {
    webapp: {
      bullets: [
        "Web App with full-text search functionality and autocomplete (using elasticsearch) to show a list of the same product (or similar products) from different grocery stores and their respective prices;",
        "Backend in Python (Flask microframework), PostgreSQL Database (SQLAlchemy as ORM) and front-end using React",
      ],
      link: "https://verbarato.online/",
      link_text: "take a look at the webapp!",
    },
    perceptron: {
      bullets: ["Simple Neural Network using perceptrons model in Python"],
      link: "https://github.com/vacosti/perceptrons",
      link_text: "github link",
    },
    automation: {
      bullets: [
        "Web-crawler (for obtaining products data from grocery ecommerces) using Python with Selenium, and Celery (Python) for orchestrating the whole process of obtaining and structuring products data: web-crawling, products parsing and categorization, and database and elasticsearch update process.",
      ],
    },
  },
};

export default function Examples({ selectedLanguage }) {
  const [currentConcept, setCurrentConcept] = useState("webapp");

  function onSelect(concept) {
    setCurrentConcept(concept);
  }

  return (
    <Section
      id="examples"
      title={
        selectedLanguage === "pt-br"
          ? "Exemplos de Projetos"
          : "Projects Examples"
      }
    >
      <menu>
        <TabButton
          isSelected={currentConcept === "webapp"}
          onSelect={() => onSelect("webapp")}
        >
          {selectedLanguage === "pt-br"
            ? "WebApp de comparar preços de mercados"
            : "Webapp for comparing prices of groceries"}
        </TabButton>
        <TabButton
          isSelected={currentConcept === "perceptron"}
          onSelect={() => onSelect("perceptron")}
        >
          {selectedLanguage === "pt-br"
            ? "Inteligência Artificial"
            : "Artificial Inteligence"}
        </TabButton>
        <TabButton
          isSelected={currentConcept === "automation"}
          onSelect={() => onSelect("automation")}
        >
          {selectedLanguage === "pt-br" ? "Automação" : "Automation"}
        </TabButton>
      </menu>
      <div id="tab-content">
        <ul>
          {selectedLanguage === "pt-br"
            ? projectsTexts["pt-br"][currentConcept]["bullets"].map(
                (bullet) => <li>{bullet}</li>
              )
            : projectsTexts["en-us"][currentConcept]["bullets"].map(
                (bullet) => <li>{bullet}</li>
              )}
          {selectedLanguage === "pt-br"
            ? projectsTexts["pt-br"][currentConcept]["link"] && (
                <a
                  className="link"
                  href={projectsTexts["pt-br"][currentConcept]["link"]}
                >
                  {projectsTexts["pt-br"][currentConcept]["link_text"]}
                </a>
              )
            : projectsTexts["en-us"][currentConcept]["link"] && (
                <a
                  className="link"
                  href={projectsTexts["en-us"][currentConcept]["link"]}
                >
                  {projectsTexts["en-us"][currentConcept]["link_text"]}
                </a>
              )}
        </ul>
      </div>
      <div className="footer">
        <div className="col-1">
          <h3>{selectedLanguage === "pt-br" ? "LINKS ÚTEIS" : "LINKS"}</h3>

          <a href="https://github.com/vacosti">
            Github <i class="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="col-3">
          <h3>{selectedLanguage === "pt-br" ? "CONTATO" : "CONTACT"}</h3>

          <a href="https://www.linkedin.com/in/vinicius-costa-620693158/">
            Linkedin <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </Section>
  );
}
