export type ExpectedTechnicalSkill = {
  id: string;
  label: string;
  description: string;
};

export const expectedTechnicalSkills: ExpectedTechnicalSkill[] = [
  {
    id: "RAG",
    label: "RAG",
    description:
      "Generación Aumentada por Recuperación conectado a una base de conocimiento externo.",
  },
  {
    id: "multi-agentes",
    label: "Multi Agentes",
    description:
      "Múltiples inteligencias artificiales autónomas interactúan, colaboran o compiten para resolver problemas complejos.",
  },
  {
    id: "evaluación-observabilidad-y-operaciones ",
    label: "Evaluación, Observabilidad y Operaciones",
    description:
      "Llevar un LLM a producción requiere monitoreo constante para evitar costos excesivos o respuestas erróneas.",
  },
  {
    id: "cloud",
    label: "Cloud - Google/AWS",
    description:
      "Permitiendo que cualquiera acceda a sus datos, programas las 24/i.",
  },
  {
    id: "harnesses",
    label: "Harnesses",
    description:
      "Banco de pruebas automatizado. Es el conjunto de código, herramientas, datos y métricas diseñado para probar, evaluar y medir el rendimiento de un sistema bajo condiciones controladas.",
  },
  {
    id: "memoria-avanzada-para-gentes",
    label: "Memoria Avanzada para Agentes y LLMs",
    description:
      "Mantiene el hilo de la conversación actual optimizando la conversación sin perder ventanas de contexto.",
  },
];
