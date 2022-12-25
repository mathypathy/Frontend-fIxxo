import React from 'react';
import { FC } from 'react';

interface ExternalLinkIcon{
  link: string; 
  icon: string;
}
const ExternalLinkIcon: FC<ExternalLinkIcon>= ({link,icon}) => {
  return (
    <>
      <a href ={link} target="blank">
        <i className={icon}></i>
      </a>
    </>
  )
}

export default ExternalLinkIcon;