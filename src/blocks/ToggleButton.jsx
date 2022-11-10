import styled from "styled-components";
import {SecondaryButton} from "../elements/Buttons";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { useContext } from "react";
const ToggleButton = ({ className }) => {
  const { userName, setUser } = useContext(ArticlesContext);
  const switcher = () => {
    if (userName == "uriel_hedz") {
      setUser("microsoft");
    } else {
      setUser("uriel_hedz");
    }
  };
  return (
    <p className={className}>
      {userName == "uriel_hedz"
        ? "También puedes de los de mi empresa"
        : "Regresar a los mios"}
      <SecondaryButton onClick={(e) => switcher(e)}>
        Cambiar
      </SecondaryButton>
    </p>
  );
};
export default styled(ToggleButton)`
  display: flex;
  gap: 1em;
  align-items: center;
`;
