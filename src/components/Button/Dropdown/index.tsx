import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "../../../assets";
import { ICall } from "../../../services/eth/types";
import {
  Button,
  Container,
  Option,
  OptionButton,
  OptionsContainer,
} from "./styles";

interface IDropdown {
  label: string;
  disabled: boolean;
  onClickButton: () => void;
  optionDisabled?: boolean;
  calls: ICall[];
  changeCall: (call: ICall) => void;
  loading?: boolean;
}

const DropdownButton: React.FC<IDropdown> = ({
  label,
  disabled,
  onClickButton,
  optionDisabled,
  calls,
  changeCall,
  loading,
}) => {
  const [open, setOpen] = useState(false);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleOutSide = (event: any) => {
      //@ts-ignore
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSide);

    return () => {
      window.removeEventListener("mousedown", handleOutSide);
    };
  }, []);

  const handleArrow = () => {
    if (optionDisabled || disabled) return;
    setOpen(!open);
  };

  const handleOption = (call: ICall) => {
    changeCall(call);
    setOpen(false);
  };

  return (
    <Container loading={loading}>
      <Button onClick={onClickButton} disabled={disabled}>
        <span>{loading ? "Waiting response..." : label}</span>
      </Button>
      <OptionButton onClick={handleArrow} disabled={optionDisabled || disabled}>
        <img src={ArrowDown} alt="Arrow down" />
      </OptionButton>

      <OptionsContainer ref={optionRef} open={open}>
        {calls.map((call, index) => (
          <Option key={index} onClick={() => handleOption(call)}>
            {call.name}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default DropdownButton;
