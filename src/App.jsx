import Navbar from './components/navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]"> {/* El color crema de fondo de tu diseño */}
      <Navbar />
      
      {/* Aquí irá el Hero Section después */}
      <main className="max-w-7xl mx-auto p-10 text-center">
        <h1 className="text-6xl font-black text-cyan-400 mt-20">
          Rodar Academia
        </h1>
        <p className="text-xl text-gray-600 mt-4 italic">Pasión sobre ruedas</p>
      </main>
    </div>
  )
}

export default App