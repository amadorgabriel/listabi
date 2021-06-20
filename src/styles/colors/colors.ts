const colors = {
  blue: "#30837F",
  gray: "#767676",
  ligth_gray: "#8F9391",
  dark_gray: '#52665A',

  pink: "#F56960",
  water_green: "#09BCBA",
  green: "#10BD8D",
  dark_purple: "#1A1423",

  white: "#FFFFFF",
  white_secondary: '#FBFFFE',
  transparent: "transparent",
};

export const themeColors = {
  white: colors.white,
  background: colors.white_secondary,
  transparent: colors.transparent,

  button: {
    primary: colors.green,
    secondary: colors.pink,
    white: colors.white,
    text: colors.dark_gray
  },
  bottomTab: {
    background: colors.blue,
    backgroundCustomButtom: colors.green,
    activeTintColor: colors.white,
    inactiveTintColor: colors.white,
  },
  cards: {
    primary: colors.pink,
    secondary: colors.blue,
    tertiary: colors.green
  },
  typografy: {
    display: {
      primary: colors.dark_purple
    },
    title: {
      primary: colors.blue,
      secondary: colors.pink
    },
    paragraph: {
      primary: colors.gray,
      secondary: colors.ligth_gray,
      tertiary: colors.dark_purple,
      quartenary: colors.green
    },
  },
};

