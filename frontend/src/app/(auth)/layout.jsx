function Layout({ children }) {
  return (
    <div className="h-screen flex items-center justify-center bg-neutral-50 dark:bg-black px-4 py-8">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

export default Layout;
