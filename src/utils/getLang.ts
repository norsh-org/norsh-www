export const getLangFromPath = (pathname: string): string => {
    const parts = pathname.split("/"); // Divide a URL por "/"
    return parts[1] || "en"; // O idioma está sempre na primeira posição
  };
  