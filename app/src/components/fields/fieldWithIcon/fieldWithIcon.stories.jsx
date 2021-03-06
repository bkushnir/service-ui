/*
 * Copyright 2017 EPAM Systems
 *
 *
 * This file is part of EPAM Report Portal.
 * https://github.com/reportportal/service-ui
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */

import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import { FieldWithIcon } from './fieldWithIcon';
import TestIcon from './img/test-stories-icon.svg';
import README from './README.md';

storiesOf('Components/Fields/fieldWithIcon', module)
  .addDecorator(host({
    title: 'Field with icon',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#ffffff',
    height: 42,
    width: 382,
  }))
  .addDecorator(withReadme(README))
  .add('default state', () => (
    <FieldWithIcon />
  ))
  .add('default state with icon', () => (
    <FieldWithIcon icon={TestIcon} />
  ))
  .add('valid state', () => (
    <FieldWithIcon formField={{ isValid: true }} />
  ))
  .add('valid state with icon', () => (
    <FieldWithIcon formField={{ isValid: true }} icon={TestIcon} />
  ));
