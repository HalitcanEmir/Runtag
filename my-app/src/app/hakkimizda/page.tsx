import Navbar from "@/components/home/Navbar";
import Process from "@/components/home/Process";
import Footer from "@/components/home/Footer";

export default function HakkimzdaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none">
        <div className="nebula nebula--purple -top-40 -left-32 h-80 w-80" />
        <div className="nebula nebula--blue top-40 -right-40 h-96 w-96" />
        <div className="nebula nebula--purple -bottom-40 right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hakkımızda
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Yenilikçi çözümler sunmak ve müşterilerimiz ile birlikte başarı hikayesi yazmak için dedikedir.
          </p>
        </div>

        <Process />
      </main>

      <Footer />
    </div>
  );
}
