import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "es",
  messages: {
    en: {
      username: "User",
      clickme: "Click me!",
      calculator: "Calculator",
      "calculator-description":
        "Enter your notes and credits to calculate your weighted average.",
      "header-title": "Weighted Average Calculator",
      "header-en": "English",
      "header-es": "Spanish",
      "header-a": "Other calculators",
      "calculator-c1-title": "Notes",
      "calculator-c2-title": "Credits",
      note: "Note",
      "note-weight": "Note weight",
      "add-row": "Add row",
      "remove-row": "Remove row",
      calculate: "Calculate",
      result: "Result",
      "result-message": "Your weighted average is: ",
    },
    es: {
      username: "Usuario",
      clickme: "¡Haz click!",
      calculator: "Calculadora",
      "calculator-description":
        "Ingresa tus notas y créditos para calcular tu promedio ponderado.",
      "header-title": "Calculadora de Promedio Ponderado",
      "header-en": "Inglés",
      "header-es": "Español",
      "header-a": "Otras calculadoras",
      "calculator-c1-title": "Notas",
      "calculator-c2-title": "Créditos",
      note: "Nota",
      "note-weight": "Peso de la nota",
      "add-row": "Agregar fila",
      "remove-row": "Eliminar fila",
      calculate: "Calcular",
      result: "Resultado",
      "result-message": "Tu promedio ponderado es: ",
    },
  },
});

export default i18n;

//para usar = {{$t('username')}}
