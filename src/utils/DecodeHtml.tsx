import React from "react";
import parse from "html-react-parser";

/**
 * decodeHtmlAndParse
 *
 * Recebe uma string que pode conter tags HTML codificadas (ex.: &lt;br&gt;) e retorna elementos React.
 *
 * @param htmlString - A string de tradução que contém os comandos HTML codificados.
 * @returns React.ReactNode - Os elementos React resultantes da conversão.
 */
export function decodeHtmlAndParse(htmlString: string): React.ReactNode {
  const decoded = htmlString.replace(/&lt;(.*?)&gt;/g, "<$1>");
  return parse(decoded);
}
