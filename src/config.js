module.exports = {
  siteTitle: 'Malo Le Goff | Software Engineer',
  siteDescription:
    'I am a software engineering student, who loves learning new things and undertaking projects.',
  siteKeywords:
    'Malo Le Goff, Malo, Le Goff, Malo10LeGoff, software engineer, Data Engineer, Data Scientisy, web developer',
  siteUrl: 'https://malo10legoff.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Malo Le Goff',
  location: 'Brest, France',
  email: 'malolegoff@gmail.com',
  github: 'https://github.com/Malo10LeGoff',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/malo10legoff',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/malo-le-goff/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
