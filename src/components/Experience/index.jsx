import { ExperienceItem } from "../ExperienceItem";
import { Icon } from "@iconify/react";
import { Box } from "@chakra-ui/react";
import { TAGS } from "../../util";

const EXPERIENCIE = [
  {
    date: "Noviembre 2023 - Mayo 2024",
    modality: 'Modalidad - Presencial', 
    title: "Backend Developer",
    company: "SPE SAS.",
    description: `Lideré la creación de un módulo integral que permitió un
      control eficiente de todos los activos de la empresa,
      proporcionando una visión completa y un histórico
      detallado.
      Desarrollé servicios API REST que potenciaron la
      comunicación eficiente entre diversas partes del sistema,
      facilitando la integración y mejorando la interoperabilidad.`,
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.POSTGRES, TAGS.DOCKER, TAGS.JAVASCRIPT],
  },
  {
    date: "Enero 2023 - Agosto 2023",
    modality: 'Modalidad - Remoto',
    title: "Frontend Developer",
    company: "ITBLOBERS",
    description: `Contribuí al desarrollo y diseño de aplicaciones móviles de
      alta calidad para clientes utilizando tecnologías modernas
      de frontend.
      Realicé pruebas exhaustivas de las interfaces para
      identificar y solucionar problemas de usabilidad y
      visualización.`,
    tags: [
      TAGS.REACT_NATIVE,
      TAGS.TYPESCRIPT,
      TAGS.VTEX_IO,
      TAGS.GRAPHQL,
      TAGS.JIRA,
      TAGS.ANDROID,
      TAGS.IOS,
    ],
  }
];

export const Experience = () => {
  return (
    <Box className="my-16" id="experiencia">
      <Box className="flex">
        <Icon icon="pajamas:work" width={35} />
        <h2 className="text-2xl font-bold text-center flex items-center ml-4">
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
