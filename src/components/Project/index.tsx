import React, { useState, useEffect } from "react";
import { PROJECTS } from "./data";
import { Icon } from "@iconify/react";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import esTranslation from "../../langs/es/es.json";
import enTranslation from "../../langs/en/en.json";

export const Project = () => {
  const { t, i18n } = useTranslation();
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    i18n.language === "es" ? setTranslation("es") : setTranslation("en");
  }, [i18n.language]);

  let PROJECTSALL =
    translation === "es"
      ? esTranslation.projects.data
      : enTranslation.projects.data;

  const findTags = (index) => {
    if (PROJECTS[index] && PROJECTS[index].tags) {
      return PROJECTS[index].tags;
    } else {
      return [];
    }
  };

  const PROJECTS_CON_TAGS = PROJECTSALL.map((project, index) => ({
    ...project,
    tags: findTags(index),
  }));

  console.log(PROJECTS_CON_TAGS);
  return (
    <section className="my-16">
      <div>
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3">
          <Icon icon="ph:code-duotone" width={35} />
          {t("projects.title")}
        </h2>
      </div>
      <div className="flex flex-col gap-y-16">
        {PROJECTS_CON_TAGS.map(
          ({ image, title, description, tags, link, github }) => (
            <Zoom
              key={title}
              duration={2200}
              damping={2}
              cascade
              triggerOnce
              delay={300}
            >
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <img
                      alt={title}
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      src={image}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <div className="flex flex-wrap mt-2 flex-col">
                    <div className="mt-2">{description}</div>

                    <ul className="flex flex-row my-2 gap-x-2 flex-wrap">
                      {tags.map((tag) => (
                        <li key={tag.name} className="m-1">
                          <div
                            className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                          >
                            <Icon className="size-4" icon={tag.icon} />
                            {tag.name}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      {github && (
                        <a
                          target="_blank"
                          href={github}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                        >
                          <Icon icon="mingcute:github-fill" width={25} />
                          {t("projects.button")}
                        </a>
                      )}
                      {link && (
                        <a
                          target="_blank"
                          href={link}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                        >
                          <Icon icon="ph:link-bold" width={25} />
                          Demo
                        </a>
                      )}
                    </footer>
                  </div>
                </div>
              </article>
            </Zoom>
          ),
        )}
      </div>
    </section>
  );
};
