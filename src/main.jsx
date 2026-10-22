import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowerRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(<BrowerRouter><App /></BrowerRouter>);
