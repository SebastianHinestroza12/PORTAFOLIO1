/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Icon } from "@iconify/react";

// eslint-disable-next-line react/prop-types
export const ExperienceItem = ({ title, company, description, link, date, tags }) => {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-[#FFA500] -left-[42px] absolute rounded-full text-5xl">
            &bull;
          </span>
          <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
          <h4 className="font-semibold text-xl text-white">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600">{date}</time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-white md:col-span-3">
        <p>{description}</p>
        <ul className="flex flex-row mb-2 gap-x-2 flex-wrap">
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
        {link && (
          <a href={link} className="text-[#FFA500] hover:underline">
            Read More
          </a>
        )}
      </div>
    </div>
  );
};
