"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value)}
      className="border p-1 rounded"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
