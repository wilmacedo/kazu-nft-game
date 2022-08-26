import { useNavigate } from "react-router-dom";
import { Container, Option } from "./styles";

interface IMenu {
  disabled?: boolean;
}

const Menu: React.FC<IMenu> = ({ disabled }) => {
  const navigate = useNavigate();
  const options = ["Battle", "Store", "Marketplace"];

  const handleClick = (index: number) => {
    if (disabled) return;
    navigate('/' + options[index].toLowerCase());
  };

  return (
    <Container disabled={disabled}>
      {options.map((option, index) => (
        <Option
          selected={window.location.pathname.includes(option.toLowerCase())}
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
