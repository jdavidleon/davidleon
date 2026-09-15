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
  { id: "deepagents", label: "DeepAgents", mark: "DA" },
  { id: "fastmpc", label: "FastMPC", mark: "FMPC" },
  { id: "embeddings", label: "Embeddings", mark: "Em" },
];
