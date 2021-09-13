export const theme = {
  black: '#111111',
  purple: '#511972',
  lightPurple: '#F5E8FF',
  white: '#FFFFFF',
  radius: '8px',
  font: {
    size: {
      xxs: '.9rem',
      xs: '1.1rem',
      s: ' 1.3rem',
      m: '1.8rem',
      l: '2.4rem',
      xl: '3rem',
      xxl: '3.8rem',
      xxxl: '4.5rem',
      xxxxl: '6rem',
    },
  },
  mq: {
    tablet: `@media (min-width: 668px)`,
    desktop: `@media (min-width: 1024px)`,
    large: `@media (min-width: 1440px)`,
  },
  underlinePurple: () => `
      &::before {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e3bfff;
        height:2px;
        width:45%;
      }
    `,
  boxShadow:
    // 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
    '0 10px 10px rgb(0 0 0 / 0.3)',
};

export default theme;
