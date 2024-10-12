// MessageBox component

const MessageBox = ({ message, name }) => {
  return (
    <div className="w-[400px] h-[300px] px-20 py-12 border-[10px] bg-white border-[#C73820] rounded-[40px]">
      <p>{JSON.stringify(message)}</p>
      <p>From. {JSON.stringify(name)}</p>
    </div>
  );
};

export default MessageBox;
