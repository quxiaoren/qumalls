import { DefaultTheme } from 'vitepress';
import { guide } from './config/guide';
import { currt } from './config/currt';
import { components } from './config/components';
export const sidebar: DefaultTheme.Sidebar = {
    '/guide/':guide,
    '/components/':components,
    '/': currt,
};