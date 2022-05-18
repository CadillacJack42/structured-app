export const Message = ({ message }) => {
  return (
    <div>
      <span>{`${message.sender} said ${message.message}  `}</span>
      <span>{new Date(message.timestamp).toDateString()}</span>
    </div>
  );
};
