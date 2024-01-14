import { Control, useWatch } from "react-hook-form";
import { FormData } from "../FormCheckout/validator";
import { StyledTotal } from "./styled";

interface TotalProps {
  control: Control<FormData>;
}

export const Total: React.FC<TotalProps> = ({ control }) => {
  const children = useWatch({
    control,
    name: "childPassenger",
  });

  const adults = useWatch({
    control,
    name: "adultPassenger",
  });

  const total = children + adults;

  return (
    <StyledTotal >
      <h2>Total</h2>
      <h5>{total}</h5>
      <div className="passengers-value">
        <img src="../src/assets/Ellipse.svg" alt="" /><p>{adults}</p> <span>adultos</span>
      </div>
      <div className="passengers-value">
      <img src="../src/assets/Ellipse.svg" alt="" /> <p>{children}</p> <span>Crianças</span>
      </div>
    </StyledTotal>
  );
};
