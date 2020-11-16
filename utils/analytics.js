// google analytics init
import ReactGA from "react-ga";

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize("UA-182549291-2");
};

export const logPageView = () => {
  console.log(
    `Logging pageview for ${window.location.pathname + window.location.search}`
  );
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logContactView = () => {
  console.log("Logging view of the contact form");
  ReactGA.modalview(`${window.location.pathname}/contact`);
  logEvent(
    "PRE_CONVERSION",
    `clicked contact button from ${window.location.pathname}`,
    "CONTACT BUTTON"
  );
};

export const logEvent = (category = "", action = "", label = "") => {
  console.log(
    `Logging event with category: ${category}, action: ${action}, label: ${label}`
  );
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
