function Button(props) {
  {
    {
      props.children;
    }
  }
  return (
    <button
      //onClick={props.onClick}
      {...props}
      className="generic-button p-5 bg-slate-500 text-black"
    ></button>
  );
}

export default Button;
