import React from 'react';
import { createRoot } from 'react-dom/client';
import { IconLab } from '../src/components/IconLab';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IconLab />
  </React.StrictMode>
);