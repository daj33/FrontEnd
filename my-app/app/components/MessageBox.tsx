// MessageBox component

const MessageBox = (children) => {
  return (
    <div className="w-[400px] h-[300px] border-[10px] bg-white border-[#C73820] rounded-[40px]">
      <div className="w-[350px] h-[250px]flex-col mx-[25px] my-[21px] gap-[2px]">
        <div className="w-[350px] h-[220px]">{children.message}</div>
        <div className="w-[135px] h-[36px] place-content-end text-end ">
          From. {children.name}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
