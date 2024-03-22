interface btnValue {
  title: string;
  className: string;
}

function Button({ title, className }: btnValue) {
  return (
    <>
      <button type="button" className={className}>
        {title}
      </button>
    </>
  );
}

export default Button;
