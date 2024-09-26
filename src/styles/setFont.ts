import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const styreneAWebFont: NextFontWithVariable = localFont({
  src: [
    {
      path: '../fonts/StyreneAWeb-Light.woff2',
      weight: '300',
    },
    {
      path: '../fonts/StyreneAWeb-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/StyreneAWeb-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-styrene-aweb',
});
 