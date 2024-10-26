export function Container({ title, children }) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
