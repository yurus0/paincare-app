const Button = ({ message } : {
    message: string;
}) => {
    return (
      <button className="h-12 rounded-full font-bold px-8 hover:bg-black hover:text-white">{message}</button>
    );
  };
  export default Button;