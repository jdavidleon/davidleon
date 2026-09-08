export type ExpectedTechnicalSkill = {
  id: string;
  label: string;
  description: string;
};

export const expectedTechnicalSkills: ExpectedTechnicalSkill[] = [
  {
    id: "uipath",
    label: "UiPath",
    description: "Arquitectura y componentes de UiPath.",
  },
  {
    id: "orchestrator",
    label: "Orchestrator",
    description: "Despliegue y administración de UiPath Orchestrator.",
  },
  {
    id: "servers",
    label: "Windows / Linux",
    description: "Administración de servidores Windows y Linux.",
  },
  {
    id: "cloud",
    label: "Azure / AWS / GCP",
    description: "Entornos y plataformas cloud: Azure, AWS y GCP.",
  },
  {
    id: "power-bi",
    label: "Power BI",
    description: "Análisis de datos e informes con Microsoft Power BI.",
  },
  {
    id: "databases",
    label: "SQL Server / Oracle",
    description: "Administración de bases de datos: SQL Server y Oracle.",
  },
];
