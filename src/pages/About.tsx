const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Sobre Mim</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces 
            intuitivas e responsivas. Minha jornada na programação começou com 
            HTML, CSS e JavaScript, e desde então venho me aprofundando em 
            tecnologias modernas como React, TypeScript e Tailwind.
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades em 
            desenvolvimento web e buscando oportunidades para criar projetos 
            impactantes.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Educação</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Analise de desenvolvimento de sistemas</h3>
            <p className="text-gray-600">Unip</p>
            <p className="text-gray-500">Primeiro período</p>
          </div>
          {/* Adicione mais formações conforme necessário */}
        </div>
      </section>
    </div>
  );
};

export default About;
