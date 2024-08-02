/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Text } from "@chakra-ui/react";
import pdf from './CV_Sebastian Mena - Software Developer.pdf';
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

export const Job = () => {
  const { t } = useTranslation();
  return (
    <section className='h-auto justify-between my-16'>
      <Text className='text-2xl mb-3'>{t('job.greeting')} <span style={{ color: '#FFA500' }}>{t('job.name')}</span></Text>
      <Text className='text-3xl mb-3'>{t('job.position')}</Text>
      <a download href={pdf}>
        <Button
          variant={"solid"}
          paddingX={'6'}
          bg={'#FFA500'}
          size={"md"}
          rounded={'3xl'}
          color={'#000'}
          _hover={{
            textDecoration: "none",
            bg: '#C21500',
            color: '#FFF'
          }}
        >
          <Icon icon="material-symbols-light:download" width={30} />
          {t('job.download')}
        </Button>
      </a>
    </section>
  )
}
