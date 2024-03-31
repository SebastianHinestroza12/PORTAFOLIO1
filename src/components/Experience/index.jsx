import { ExperienceItem } from "../ExperienceItem";
import { Icon } from "@iconify/react";
import { Box } from "@chakra-ui/react";
import { TAGS } from "../../util";

const EXPERIENCIE = [
  {
    date: "Enero 2023 - Agosto 2023",
    title: "Frontend Developer",
    company: "ITBLOBER",
    description: `Contribuí al desarrollo y diseño de aplicaciones
      móviles de alta calidad para clientes utilizando
      tecnologías modernas de frontend.
      Realicé pruebas exhaustivas de las interfaces
      para identificar y solucionar problemas de
      usabilidad y visualización.`,
    tags: [
      TAGS.REACT_NATIVE,
      TAGS.TYPESCRIPT,
      TAGS.VTEX_IO,
      TAGS.GRAPHQL,
      TAGS.JIRA,
      TAGS.ANDROID,
      TAGS.IOS,
    ],
  },
  {
    date: "Enero 2023 - Agosto 2023",
    title: "Backend Developer",
    company: "SPE ESPECIAL",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.POSTGRES, TAGS.DOCKER, TAGS.JAVASCRIPT],
  },
];

export const Experience = () => {
  return (
    <Box className="my-16" id="experiencia">
      <Box className="flex">
        <Icon icon="pajamas:work" width={35} color="#FFF" />
        <h2 className="text-white text-2xl font-bold text-center flex items-center ml-4">
          Experiencia Profesional
        </h2>
      </Box>
      <ol className="relative mt-16">
        {EXPERIENCIE.map((experience, index) => (
          <li key={index}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </Box>
  );
};
