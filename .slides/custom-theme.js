export default function (theme) {
  return {
    ...theme,
    googleFont:
      'https://fonts.googleapis.com/css?family=Fira+Code|Josefin+Sans:400,700,700i|Josefin+Slab:400,700&display=swap',
    fonts: {
      ...theme.fonts,
      heading: "'Josefin Sans', sans-serif",
      body: "'Josefin Slab', serif",
      monospace: '"Fira Code", monospace',
      code: '"Fira Code", monospace',
    },
    styles: {
      ...theme.styles,
      CodeSurfer: {
        ...theme.styles.CodeSurfer,
        code: {
          fontFamily: '"Fira Code", monospace',
          div: {
            height: '1.2em',
          },
        },
      },
      h1: {
        textTransform: 'uppercase',
        fontSize: '6rem',
        fontWeight: 'bold',
        wordWrap: 'wrap',
        maxWidth: '100%',
        hyphens: 'auto',
        lineHeight: 0.9,
        textAlign: 'center',
      },
      Slide: {
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
      },
      li: {
        lineHeight: 1.5,
      },
      h2: {
        textTransform: 'uppercase',
        fontSize: '4vw',
        lineHeight: 0.9,
        fontWeight: 'bold',
        margin: 0,
        textAlign: 'center',
      },
      h3: {
        lineHeight: 1.2,
        margin: 0,
      },
      p: {
        padding: '0 1rem',
      },
      // div: {
      //   margin: "auto",
      // },
      // ul: {
      //   margin: "auto",
      // },
      // ol: {
      //   margin: "auto",
      // },
    },
  };
}
