import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      username: "User",
      clickme: "Click me!",
      "header-title": "Weighted Average Calculator",
      "header-en": "English",
      "header-es": "Spanish",
      "header-a": "Other calculators",
    },
    es: {
      username: "Usuario",
      clickme: "¡Haz click!",
      "header-title": "Calculadora de Promedio Ponderado",
      "header-en": "Inglés",
      "header-es": "Español",
      "header-a": "Otras calculadoras",
    },
  },
});

export default i18n;

//para usar = {{$t('username')}}
