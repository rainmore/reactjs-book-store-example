export const PlainLayoutComponent = ({children}: { children: React.ReactNode }) => {
  return (
    <>
      <section className="main-content columns is-fullheight">
        <div className="container column is-10 section">
          <section>{children}</section>
        </div>
      </section>
    </>
  );
};
