export type ExperienceProject = {
  id: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  technologies: string[];
};

export const experienceProjects: ExperienceProject[] = [
  {
    id: "agentic-architecture",
    name: "Agentes con herramientas",
    category: "IA agéntica",
    summary: "Tool calling, gestión de contexto y ejecución de múltiples pasos.",
    detail:
      "Desarrollo de agentes que utilizan herramientas y convierten diseños arquitectónicos en código funcional y mantenible.",
    technologies: ["IA agéntica", "Tool calling", "Prompt engineering"],
  },
  {
    id: "planner-executor-validator",
    name: "Planner / Executor / Validator",
    category: "Arquitectura de IA",
    summary: "Flujos acotados, predecibles y alineados con la intención del sistema.",
    detail:
      "Implementación de patrones de agentes para planificar, ejecutar y validar tareas con memoria, contexto y controles de comportamiento.",
    technologies: ["Planner", "Executor", "Validator"],
  },
  {
    id: "enterprise-rpa",
    name: "Automatización RPA empresarial",
    category: "Automatización",
    summary: "Procesos operativos conectados con UiPath y plataformas empresariales.",
    detail:
      "Implementación de automatizaciones con UiPath y Power Automate, incluyendo arquitectura de componentes, despliegue y administración de UiPath Orchestrator.",
    technologies: ["UiPath", "Orchestrator", "Power Automate"],
  },
  {
    id: "knowledge-rag",
    name: "RAG y gestión de contexto",
    category: "Datos e IA",
    summary: "Recuperación de conocimiento y respuestas basadas en contexto relevante.",
    detail:
      "Implementación de RAG, memoria y gestión de contexto para apoyar respuestas más pertinentes y detectar alucinaciones en sistemas LLM.",
    technologies: ["RAG", "LLMs", "Gestión de contexto"],
  },
  {
    id: "cloud-backend-operations",
    name: "Servicios backend y cloud",
    category: "Ingeniería y entrega",
    summary: "APIs, despliegue en producción, DevOps y operaciones.",
    detail:
      "Diseño y despliegue de APIs y servicios backend en AWS, Azure y GCP, con administración de servidores Windows y Linux.",
    technologies: ["AWS", "Azure", "GCP"],
  },
  {
    id: "business-data",
    name: "Datos e informes operativos",
    category: "Datos empresariales",
    summary: "Análisis, informes y administración de información para apoyar decisiones.",
    detail:
      "Análisis de datos e informes con Microsoft Power BI, junto con administración de bases de datos SQL Server y Oracle.",
    technologies: ["Power BI", "SQL Server", "Oracle"],
  },
  {
    id: "llm-quality",
    name: "Calidad de sistemas LLM",
    category: "Operaciones de IA",
    summary: "Evaluación, testing y monitorización para sostener la calidad en producción.",
    detail:
      "Evaluación y testing de LLMs, detección de alucinaciones y monitorización de drift para impulsar la mejora continua del sistema.",
    technologies: ["Testing de LLMs", "Detección de drift", "Monitorización"],
  },
];
