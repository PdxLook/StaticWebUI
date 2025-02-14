
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-items-center', 'flex items-center'],
    ['flex-justify-center', 'flex justify-center'],
    ['wh-fluid', 'w-full h-full'],
  ],
  rules: [
    [
      /^ratios-(\d+)(?:-(\d+))?$/,
      ([, w, h]) => ({
        'aspect-ratio': h ? `${w}/${h}` : `${w}`,
        display: 'block',
      }),
    ],
    [
      'dw-center',
      {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    ],

    // top居中 start
    [
      'top-center',
      {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    ],
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '1.25rem',
        // sm: '1.25rem',
        DEFAULT: '1rem',
        sm: '0rem',
        md: '0rem',
        lg: '0rem',
        xl: '0rem',
      },
    },

    breakpoints: {
      sm: '100%', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1224px', // => @media (min-width: 1200px) { ... }
      '2xl': '1820px', // => @media (min-width: 1320px) { ... }
    },
    // 颜色
    colors: {
      black: {
        '900': '#0D0D0D',
        '800': '#333333',
        '700': '#737373',
        '600': '#A6A6A6',
        '500': '#D9D9D9',
        '400': '#E6E6E6',
        '300': '#F0F0F0',
        '200': '#F5F6F7',
        '100': '#FAFAFA',
      },
      primary: {
        '900': '#1345BA',
        '800': '#3370FF',
        '700': '#749DFC',
        '200': '#AFC5FA',
        '100': '#EDF1FA',
      },
    },
    boxShadow: {
      lg: '0px 0px 16px 0px rgba(13,13,13,0.06)',
    },
  },
  preflights: [
    {
      // 生成root变量
      getCSS: ({ theme }) => {
        // 遍历指定的 'black', 'white', 'primary' 并生成CSS变量声明
        const cssVariables = Object.entries(theme.colors)
          .filter(([key]) => ['black', 'white', 'primary'].includes(key))
          .flatMap(([colorName, colorValues]) => {
            if (typeof colorValues === 'string') { // 如果是单一颜色值（如 white）
              return [`--${colorName}: ${colorValues};`];
            } else { // 如果是包含多个深浅级别的对象
              return Object.entries(colorValues).map(([variableName, colorValue]) =>
                `--${colorName}-${variableName}: ${colorValue};`
              );
            }
          });
        // 将CSS变量声明合并成一个字符串放入`:root`选择器的样式中
        const cssString = `:root{ ${cssVariables.join(' ')} }`;
        return cssString
      },
    },
  ],
  presets: [
    presetUno(),
  ],
  // ...
})

