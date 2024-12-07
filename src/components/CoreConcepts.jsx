import { CORE_SKILLS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts({ selectedLanguage }) {
  return (
    <section id="core-concepts">
      <h2>
        {selectedLanguage === "pt-br" ? "Experiência com" : "Experience with"}
      </h2>
      <ul>
        {selectedLanguage === "pt-br"
          ? CORE_SKILLS["pt-br"].map((item) => (
              <CoreConcept
                title={item.title}
                description={item.description}
                img={item.image}
              ></CoreConcept>
            ))
          : CORE_SKILLS["en-us"].map((item) => (
              <CoreConcept
                title={item.title}
                description={item.description}
                img={item.image}
              ></CoreConcept>
            ))}
      </ul>
    </section>
  );
}
