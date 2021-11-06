import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useLanguage = () => {
  const location = window.location.pathname;
  let language = location.split("/").filter((l) => l !== "");
  // if location is "/"
  if (language.length > 1) {
    language = language[0];
  } else {
    language = "en";
  }
  return language;
};

export const useCurrentPage = () => {
  const location = window.location.pathname;
  let page = location.split("/").filter((l) => l !== "");
  if (page.length > 1) {
    page = page[1];
  } else {
    page = "/";
  }
  return page;
};

export const useWidth = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
};
