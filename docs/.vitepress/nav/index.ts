import { DefaultTheme } from 'vitepress';
import { docs } from './config/docs';
import { online } from './config/online';
import { support } from './config/support';
import { ecosphere } from './config/ecosphere';
import { download } from './config/download';
export const nav: DefaultTheme.NavItem[] = [
    docs,online,support,ecosphere,download,
];
