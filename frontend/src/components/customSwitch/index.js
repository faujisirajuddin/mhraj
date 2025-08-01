import { useState } from "react";
import ConfirmationModal from "../confirmationModal/index";
import Switch from "@mui/material/Switch";
import { STATIC_VALUES } from "../../constant/common";

const CustomSwitch = ({
  checked,
  onChange = () => {},
  name,
  requiresConfirmation = false,
  confirmationTitle,
  disabled,
  messageContent = "",
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = () => {
    onChange(!checked);
    setIsModalVisible(false);
  };

  const handleSwitchClick = () => {
    if (disabled) return;

    if (requiresConfirmation) {
      setIsModalVisible(true);
    } else {
      handleToggle();
    }
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleSwitchClick}
        disabled={disabled}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#FF0000",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#FF0000" + " !important",
          },
          "& .MuiSwitch-switchBase.Mui-disabled": {
            color: "#cccccc",
          },
          "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
            backgroundColor: "#cccccc !important",
          },
          "& .MuiSwitch-switchBase.Mui-checked.Mui-disabled": {
            color: "#FF0000" + "80 !important",
          },
        }}
      />
      {requiresConfirmation ? (
        <ConfirmationModal
          title={confirmationTitle}
          isOpen={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onConfirm={handleToggle}
          modalInnerContent={
            messageContent
              ? messageContent
              : `${STATIC_VALUES.COMMON.DISABLE_RECORD_TITLE} ${
                  !checked
                    ? STATIC_VALUES.COMMON.BUTTONS.ACTIVATE_TITLE
                    : STATIC_VALUES.COMMON.BUTTONS.DEACTIVATE_TITLE
                } the ${name}?`
          }
        />
      ) : null}
    </div>
  );
};

export default CustomSwitch;
