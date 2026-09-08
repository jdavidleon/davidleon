export type AiEngineeringTechnology = {
  id: string;
  label: string;
  mark: string;
};

export const aiEngineeringTechnologies: AiEngineeringTechnology[] = [
  { id: "python", label: "Python", mark: "Py" },
  { id: "typescript", label: "TypeScript", mark: "TS" },
  { id: "langchain", label: "LangChain", mark: "LC" },
  { id: "langgraph", label: "LangGraph", mark: "LG" },
  { id: "langsmith", label: "LangSmith", mark: "LS" },
  { id: "rag", label: "RAG", mark: "RAG" },
  { id: "fine-tuning", label: "Fine-Tuning", mark: "FT" },
  { id: "harness", label: "Harness", mark: "H" },
  { id: "mpc", label: "MPC", mark: "MPC" },
];
