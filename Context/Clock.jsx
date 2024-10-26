import { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.scss";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const { language } = useContext(LanguageContext);

  const textLang = {
    en: "Current time:",
    it: "Ora attuale:",
    es: "Hora actual:",
    fr: "Heure actuelle:",
    de: "Aktuelle Uhrzeit:",
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div className={classes.clock}>
      <h2>{textLang[language]}<span className={classes.time}>{date.toLocaleTimeString()}</span></h2>
    </div>
  );
}
