import { ExperienceItem } from "../ExperienceItem";
import { Icon } from '@iconify/react';

const EXPERIENCIE = [
  {
    date: "Actualmente...",
    title: "Creador de Contenido",
    company: "Twitch",
    description:
      "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
    link: "https://twitch.tv/midudev",
  },
  {
    date: "Septiembre 2022",
    title: "Principal Frontend Engineer",
    company: "Adevinta Spain",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
  },
]

export const Experience = () => {
  return (
    <div className="experience">
      <div className="flex">
        <Icon icon='pajamas:work' width={35} color="#FFF" />
        <h2 className="text-white text-2xl font-bold text-center flex items-center ml-4">Experiencia Profesional</h2>
      </div>
      <ol className="relative mt-16">
        {EXPERIENCIE.map((experience, index) => (
          <li key={index}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </div>
  )
}