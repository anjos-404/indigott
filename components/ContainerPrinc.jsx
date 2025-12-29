export default function ContainerPrinc({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-stretch">
      {children}
    </div>
  );
}
