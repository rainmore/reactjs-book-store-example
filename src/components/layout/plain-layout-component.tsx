import React from 'react';

interface Props {
  element: React.ReactNode;
}

export const PlainLayoutComponent: React.FC<Props> = (props) => {
  return (
    <>
      <section className="main-content columns is-fullheight">
        <div className="container column is-10 section">
          <section>
            {props.element}
          </section>
        </div>
      </section>
    </>
  );
};
