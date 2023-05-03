import React from "react";

import Icon from "../../pb_icon/_icon";
import Flex from "../../pb_flex/_flex";
import Tooltip from "../../pb_tooltip/_tooltip";


type EditorButtonProps = {
  classname?: string,
  onclick?: () => {} | void,
  icon?: string;
  text?: string;
  disable?: boolean
};

const EditorButton = ({
  classname,
  disable,
  onclick,
  icon,
  text,
}: EditorButtonProps) => {
  return (
    <Tooltip 
      delay={{
        open: 2000
      }}
      interaction 
      placement="top" 
      text={text}
    >
      <button
        className={classname}
        onClick={onclick}
        disabled={disable}
      >
        <Flex 
          align="center"
          className="toolbar_button_icon"
          justify="center"
        >
          <Icon icon={icon} size="lg" />
        </Flex>
      </button>
    </Tooltip>
  );
};

export default EditorButton