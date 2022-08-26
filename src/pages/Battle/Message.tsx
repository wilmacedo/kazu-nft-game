import React, { useEffect, useState } from "react";

export interface IMessage {
  message: string;
}

const Message: React.FC<IMessage> = ({ message }) => {
  return (
    <React.Fragment>
      <div style={{ color: 'white' }}>
        {message}
      </div>
    </React.Fragment>
  );
};

export default Message;
