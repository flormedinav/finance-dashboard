// Constante Título App
const TITLE_APP = "Finanseer";

// Constantes urls
const DASHBOARD_URL = "/";
const PREDICTIONS_URL = "/predictions";

// Constantes de escenas
const SCENE_NAMES = {
  DASHBOARD: "DASHBOARD",
  PREDICTIONS: "PREDICTIONS",
};

const SCENE_LABELS = {
  DASHBOARD: "Dashboard",
  PREDICTIONS: "Predictions",
};

// Constantes globales
const GLOBAL_CONSTANTS = {
  TITLE_FINANCE_APP: TITLE_APP,
  APP_URL: {
    DASHBOARD: DASHBOARD_URL,
    PREDICTIONS: PREDICTIONS_URL,
  },
  SCENES: {
    DASHBOARD: {
      NAME: SCENE_NAMES.DASHBOARD,
      LABEL: SCENE_LABELS.DASHBOARD,
    },
    PREDICTIONS: {
      NAME: SCENE_NAMES.PREDICTIONS,
      LABEL: SCENE_LABELS.PREDICTIONS,
    },
  },
};

export { GLOBAL_CONSTANTS };
