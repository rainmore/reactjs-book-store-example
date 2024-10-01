import React from 'react';

interface Props {
  children: React.ReactNode
}

export const PlainLayoutComponent: React.FC<Props> = ({ children }) => {
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
