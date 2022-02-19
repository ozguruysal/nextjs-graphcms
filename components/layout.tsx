import { FunctionComponent } from "react";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <main className="py-12 px-5 md:px-8 mx-auto max-w-screen-lg">
        {children}
      </main>
    </div>
  );
};
