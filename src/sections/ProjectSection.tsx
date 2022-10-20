import "../styles/project-section.scss"
import { Carousel } from "../components/carousel";

export const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2>Proyectos</h2>
      <div>
        <Carousel items={["#2a9d8f", "#e72251", "#ffc8dd", "#999999", "#111111"]}/>
      </div>
    </section>
  )
}
