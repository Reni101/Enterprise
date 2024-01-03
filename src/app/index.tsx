import {createRoot} from 'react-dom/client';
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../shared/styles/index.scss'
import {ThemeProvider} from "@/app/providers/theme-provider";
import {Router} from "@/app/providers/router";

import '../shared/config/i18n/i18n'

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <Router/>
    </ThemeProvider>
);