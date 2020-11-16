// google analytics init
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-182549291-2");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logContactView = () => {
  ReactGA.modalview(`${window.location.pathname}/contact`);
  logEvent(
    "PRE_CONVERSION",
    `clicked contact button from ${window.location.pathname}`,
    "CONTACT BUTTON"
  );
};

export const logEvent = (category = "", action = "", label = "") => {
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
