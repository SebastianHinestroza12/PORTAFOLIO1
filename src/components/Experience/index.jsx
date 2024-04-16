// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { ExperienceItem } from "../ExperienceItem";
import { Icon } from "@iconify/react";
import { Box } from "@chakra-ui/react";
import { TAGS } from "../../util";
import { useTranslation } from "react-i18next";
import esTranslation from '../../langs/es/es.json';
import enTranslation from '../../langs/en/en.json';

const EXPERIENCES = [
  {
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.POSTGRES, TAGS.DOCKER, TAGS.JAVASCRIPT],
  },
  {
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
  const { t, i18n } = useTranslation();
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    i18n.language === "es" ? setTranslation('es') : setTranslation('en');
  }, [i18n.language])

  let EXPERIENCIE = translation === 'es' ? esTranslation.experience.data_experience : enTranslation.experience.data_experience;

  const findTags = (index) => {
    if (EXPERIENCES[index] && EXPERIENCES[index].tags) {
      return EXPERIENCES[index].tags;
    } else {
      return [];
    }
  };

  const EXPERIENCE_CON_TAGS = EXPERIENCIE.map((experience, index) => ({
    ...experience,
    tags: findTags(index),
  }));

  return (
    <Box className="my-16" id="experiencia">
      <Box className="flex">
        <Icon icon="pajamas:work" width={35} />
        <h2 className="text-2xl font-bold text-center flex items-center ml-4">
          {t('experience.title')}
        </h2>
      </Box>
      <ol className="relative mt-16">
        {EXPERIENCE_CON_TAGS.map((experience, index) => (
          <li key={index}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </Box>
  );
};
