import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainDashboard({ children }: Props) {
  return (
    <main className="p-6 bg-blue-50 min-h-screen">
      {children}
    </main>
  );
}
