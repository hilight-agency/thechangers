import './src/styles/global.css';
import '@fontsource-variable/gabarito';
import '@fontsource/habibi';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Flip } from 'gsap/Flip';
import { gsap } from 'gsap';
gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollToPlugin); // (or in the top-level file in your React app)
