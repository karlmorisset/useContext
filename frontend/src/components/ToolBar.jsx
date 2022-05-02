/* eslint-disable react/prop-types */
import ThemeChoice from "./ThemeChoice";
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à faire il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
export default function ToolBar({ theme, updateTheme }) {
  return (
    <div>
      <button type="button">Zoomer</button>
      <button type="button">Dezoomer</button>
      <ThemeChoice theme={theme} updateTheme={updateTheme} />
    </div>
  );
}
