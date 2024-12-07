import profile from "../assets/profile.jpg";
import SelectLanguage from "./SelectLanguage";

export default function Header({ selectedLanguage, setSelectedLanguage }) {
  return (
    <header>
      <div className="select-parent">
        <SelectLanguage
          setSelectedLanguage={setSelectedLanguage}
          language={selectedLanguage}
        />
      </div>
      <img src={profile} alt="profile picture" />

      <h1>Vinícius Costa</h1>
      {selectedLanguage === "pt-br" ? (
        <p>Desenvolvedor Backend Python</p>
      ) : (
        <p>Backend Python Developer</p>
      )}
    </header>
  );
}
