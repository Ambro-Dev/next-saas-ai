const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] flex items-center justify-center min-h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
