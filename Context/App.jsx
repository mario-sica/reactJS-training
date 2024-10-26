import { useContext } from "react";
import { Clock } from "./Clock";
import { LanguageContext, LanguageProvider } from "./LanguageContext";

export function App() {
  const LanguageSelect = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
      <select
        onChange={(event) => setLanguage(event.target.value)}
        value={language}
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
    );
  };

  return (
    <LanguageProvider>
      <LanguageSelect />
      <Clock />
    </LanguageProvider>
  );
}
