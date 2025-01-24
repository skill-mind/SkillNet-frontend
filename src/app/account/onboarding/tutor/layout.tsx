export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative w-full bg-[#0E0F0E] bg-cover bg-center bg-no-repeat">
        {children}
      </div>
    );
  }