import React from 'react';
import { LineWave } from 'react-loader-spinner';

export default function Loader() {
  return (
    <LineWave
      height="200"
      width="200"
      color="red"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      position="fixed"
      bottom="100px"
    />
  );
}
