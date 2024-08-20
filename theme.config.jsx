export default {
  logo: (
    <>
      <svg width="35" height="35" viewBox="0 0 25 25">
        <path
          fill="#7A7DFF"
          d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"
        ></path>

        <style jsx>{`
          svg {
            mask-image: linear-gradient(
              60deg,
              black 25%,
              rgba(0, 0, 0, 0.2) 50%,
              black 75%
            );
            mask-size: 400%;
            mask-position: 0%;
          }
          svg:hover {
            mask-position: 100%;
            transition: mask-position 1s ease, -webkit-mask-position 1s ease;
          }
        `}</style>
      </svg>
      <span
        style={{
          marginLeft: ".4em",
          fontWeight: 800,
          color: "#7A7DFF",
          fontSize: "30px",
        }}
      >
        Sonia
      </span>
    </>
  ),
  project: {
    link: "https://github.com/alejo170",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "Sonia | %s",
    };
  },
  footer: {
    text: `Sonia ${new Date().getFullYear()} © Alejandro López.`,
  },
  editLink: {
    text: "Editar página",
  },
  search: {
    placeholder: "Buscar",
  },
  toc: true,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta property="og:title" content="Sonia" />
      <meta property="og:site_name" content="Sonia" />
      <meta property="og:url" content="https://guidelines.pr1mer.tech/" />
      <meta
        property="og:description"
        content="Sistema Optimizado para Notas e Información Académica"
      />
    </>
  ),
};
