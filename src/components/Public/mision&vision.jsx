function MisionVision() {
  return (
    <div className="flex flex-col gap-1 md:gap-2 max-w-3xl mx-auto">
      {/* Bloque de Misión */}
      <div className="bg-[#07E1FF] text-white p-6 md:p-8 rounded-r-3xl rounded-bl-3xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-md">
        <div className="md:w-1/4">
          <h2 className="text-3xl md:text-4xl text-[#5EFFF8] font-extrabold tracking-wide opacity-90">
            Misión
          </h2>
        </div>
        <div className="md:w-3/4">
          <p className="text-sm md:text-base font-medium leading-relaxed max-w-xl">
            Formar patinadores integrales mediante un entrenamiento técnico,
            seguro y divertido, fomentando valores como la disciplina, el
            respeto y el trabajo en equipo, mientras promovemos el desarrollo
            físico y personal de cada estudiante.
          </p>
        </div>
      </div>

      {/* Bloque de Visión */}
      <div className="bg-cyan-300 text-white p-6 md:p-8 rounded-l-3xl rounded-br-3xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-md md:-translate-x-6 w-full">
        <div className="md:w-1/4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide opacity-90">
            Visión
          </h2>
        </div>
        <div className="md:w-3/4">
          <p className="text-sm md:text-base font-medium leading-relaxed max-w-xl">
            Ser una academia de patinaje reconocida por la excelencia en la
            formación de deportistas, impulsando el talento y la pasión por el
            patinaje, y convirtiéndonos en un referente en el desarrollo
            deportivo y humano de nuestros estudiantes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MisionVision;