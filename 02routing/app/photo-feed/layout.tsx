import "./styles.css"

export default function Layout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <>
      {model}
      {children}
    </>
  );
}