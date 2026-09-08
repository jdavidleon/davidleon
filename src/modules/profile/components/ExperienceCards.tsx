import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/core/alert-dialog";
import type { ExperienceProject } from "../data/experience-projects";

type ExperienceCardsProps = {
  projects: ExperienceProject[];
};

export function ExperienceCards({ projects }: ExperienceCardsProps) {
  return (
    <div className="experience__grid">
      {projects.map((project, index) => (
        <AlertDialog key={project.id}>
          <AlertDialogTrigger className={`experience-card experience-card--${(index % 2) + 1}`}>
            <span className="experience-card__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="experience-card__category">{project.category}</span>
            <span className="experience-card__name">{project.name}</span>
            <span className="experience-card__summary">{project.summary}</span>
            <span className="experience-card__hint">Ver enfoque</span>
          </AlertDialogTrigger>
          <AlertDialogContent className="experience-dialog" size="default" variant="paper">
            <AlertDialogHeader>
              <p className="experience-dialog__category">{project.category}</p>
              <AlertDialogTitle>{project.name}</AlertDialogTitle>
              <AlertDialogDescription>{project.detail}</AlertDialogDescription>
            </AlertDialogHeader>
            <ul className="experience-dialog__technologies" aria-label="Tecnologías relacionadas">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <AlertDialogFooter>
              <AlertDialogCancel>Cerrar</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
}
