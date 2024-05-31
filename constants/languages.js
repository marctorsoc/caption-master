import { Image } from "react-native";
import { IconStyle } from "./styles";

export const logos = {
  en: require("../assets/flags/en.svg.png"),
  lt: require("../assets/flags/lt.svg.png"),
  es: require("../assets/flags/es.svg.png"),
  ca: require("../assets/flags/ca.svg.png"),
};

export const languageOptions = [
  {
    label: "🇬🇧 (EN)",
    value: "en",
    title: "🇬🇧",
    longName: "English",
    icon: () => <Image source={logos["en"]} style={IconStyle} />,
  },
  {
    label: "🇱🇹 (LT)",
    value: "lt",
    title: "🇱🇹",
    longName: "Lietuvių",
    icon: () => <Image source={logos["lt"]} style={IconStyle} />,
  },
  // { label: "🇵🇹 (PT)", value: "pt", logo: "https://seeklogo.com/images/F/flag___bandeira_Portugal-logo-34D2D6FC45-seeklogo.com.png" },
  {
    label: "🇪🇸 (ES)",
    value: "es",
    title: "🇪🇸",
    longName: "Español",
    icon: () => <Image source={logos["es"]} style={IconStyle} />,
  },
  {
    label: "🏴‍☠️ (CA)",
    value: "ca",
    title: "CAT",
    longName: "Català",
    icon: () => <Image source={logos["ca"]} style={IconStyle} />,
  },
  // {
  //   label: "italia",
  //   value: "it",
  //   longName: "Italiano",
  // },
  // {
  //   label: "france",
  //   value: "fr",
  //   longName: "Français",
  // },
  // {
  //   label: "german",
  //   value: "de",
  //   longName: "Deutsch",
  // },
  // {
  //   label: "dutch",
  //   value: "nl",
  //   longName: "dutch",
  // },
];

export const findPropertyByKey = (key, keyValue, property) => {
  const option = languageOptions.find(
    (option) => option[key] === keyValue,
  );
  return option ? option[property] : undefined;
};

export const langLabelToValue = (label) =>
  findPropertyByKey("label", label, "value");
export const langValueToLabel = (value) =>
  findPropertyByKey("value", value, "label");
export const langValueToLongName = (value) =>
  findPropertyByKey("value", value, "longName");
