const Inline = ({ text }: { text: string }) => {
  return (
    <span className="items-center p-1 text-sm leading-4 text-blue-300 no-underline border rounded cursor-pointer select-none w-fit border-neutral-700 bg-neutral-800">
      {text}
    </span>
  );
};

export default Inline;
