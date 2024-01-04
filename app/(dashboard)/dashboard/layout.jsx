export default function RootLayout({ children }) {
  // offset navbar height
  return (
    <section className="py-40 h-full min-h-screen">
      <p>db lay</p>
      {children}
    </section>
  );
}
