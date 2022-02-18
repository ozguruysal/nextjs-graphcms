import { FunctionComponent } from "react";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="text-base antialiased font-body bg-white text-gray-700">
      <main className="py-4 md:py-8 px-4 md:px-8 mx-auto max-w-screen-xl">
        {children}
      </main>
    </div>
  );
};
