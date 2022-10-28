import React from 'react';

import ReactDOM from 'react-dom';

import { Color, Margin, Select, Text } from '@mz-ds/react/lib';

import '@mz-ds/scss/lib/Utilities.css';
import '@mz-ds/scss/lib/Text.css';
import '@mz-ds/scss/lib/Margin.css';
import '@mz-ds/scss/lib/Select.css';
import '@mz-ds/scss/lib/global.css';

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

ReactDOM.render(
  <div style={{ padding: '40px' }}>
    <Margin>
      <Color hexCode="red" height={'xl'} width={'xl'} />
      <Text size={'lg'}>This is text</Text>
    </Margin>
  </div>,
  document.querySelector('#root')
);

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
