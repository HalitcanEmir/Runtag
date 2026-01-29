import Navbar from "@/components/home/Navbar";
import Crews from "@/components/home/Crews";
import Footer from "@/components/home/Footer";

export default function EkipPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background nebula effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
        <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
        <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <Crews />
      </main>

      <Footer />
    </div>
  );
}
