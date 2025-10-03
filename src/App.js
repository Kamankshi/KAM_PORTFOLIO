import SavePDFButton from "./components/SavePDFButton";
// ...
function App() {
  useSEO();
  return (
    <div className="font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <DarkModeToggle />
      <SavePDFButton />
      <main>
        {/* ...sections... */}
      </main>
      <Footer />
    </div>
  );
}