import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

import {
  faClock,
  faCircleNotch,
  faTimes,
  faHome,
  faTh,
  faCircle,
  faWindowMaximize,
  faBars,
  faTag,
  faPlus,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faClock,
  faCircleNotch,
  faTimes,
  faHome,
  faTh,
  faCircle,
  faWindowMaximize,
  faBars,
  faTag,
  faPlus,
  faGlobe,
  faGithub,
  faLinkedin,
  faAngellist,
);

export const Icon = (props) => {
  const { icon, variant = 'fas', ...rest } = props;
  return <FontAwesomeIcon icon={[variant, icon]} {...rest} />;
};

export const IconBrand = (props) => {
  const { icon, variant = 'fab', ...rest } = props;
  return <FontAwesomeIcon icon={[variant, icon]} {...rest} />;
};
