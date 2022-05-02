/* eslint-disable react/prop-types */
// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
export default function ThemeChoice({ theme, updateTheme }) {
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}
