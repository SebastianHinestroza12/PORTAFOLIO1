import React from 'react'
import './tecnologies.css'
import { Icon } from '@iconify/react';
import { Zoom } from "react-awesome-reveal";


export const Tecnologies = ({ tecnologies, title }) => {
  return (

      <div className='gradient-tecno'>
        <div className='container-tecno'>
          <div>
            <p className='title-tecno'>{title}</p>
          </div>
          <div className='tecno'>
            {tecnologies.map((tech, index) => (
              <Zoom triggerOnce duration={2500}>
                <div className='icon-tecno' key={index}>
                  <div className='imagen-tecno'>
                    <Icon icon={tech.icon} width={40} />
                  </div>
                  <p className='tecno-text'>{tech.name}</p>
                </div>

              </Zoom>
            ))}
          </div>
        </div>
    </div>
  )
}
