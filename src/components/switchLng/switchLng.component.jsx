import { useTranslation, Trans } from "react-i18next";

import usa from "lng/icon/usa.png";
import poland from "lng/icon/poland.png";

import { SwitchContainer, CountryIcon } from "./sitchLng.styles";

const lngs = [
  { nativeName: "English", code: "en", icon: usa },
  {
    nativeName: "Polski",
    code: "pl",
    icon: poland,
  },
];

export const SwitchLng = () => {
  const { i18n } = useTranslation();
  const { resolvedLanguage } = i18n;
  //   console.log(resolvedLanguage);
  return (
    <SwitchContainer>
      {lngs.map(
        ({ nativeName, code, icon }) =>
          code !== resolvedLanguage && (
            <CountryIcon
              key={nativeName}
              src={icon}
              alt={nativeName}
              onClick={() => i18n.changeLanguage(code)}
            />
          )
      )}
    </SwitchContainer>
  );
};
