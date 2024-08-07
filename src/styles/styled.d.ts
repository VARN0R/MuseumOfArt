import { ThemeProps } from '@/types/themeProps';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
