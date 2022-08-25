import { useState } from "react";
import { Container, Option } from "./styles";

interface IMenu {
  disabled?: boolean;
}

const Menu: React.FC<IMenu> = ({ disabled }) => {
  const options = ["Battle", "Store", "Marketplace"];

  const [selected, setSelected] = useState(options[0]);

  const handleClick = (index: number) => {
    if (disabled) return;

    setSelected(options[index]);
  };

  return (
    <Container disabled={disabled}>
      {options.map((option, index) => (
        <Option
          selected={options[index] === selected}
          key={index}
          onClick={() => handleClick(index)}
          disabled={disabled}
        >
          <span>{option}</span>
        </Option>
      ))}
    </Container>
  );
};

export default Menu;
