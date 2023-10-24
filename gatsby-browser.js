import './src/styles/global.css';
import '@fontsource/inclusive-sans';
import '@fontsource/habibi';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollToPlugin); // (or in the top-level file in your React app)
