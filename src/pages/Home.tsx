import SkillCard from '../components/SkillCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center w-full 
                         px-4 sm:px-6 lg:px-8 xl:px-12 
                         py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                        font-bold mb-4 text-blue-300 text-center">
            Olá, eu sou{' '}
            <span className="block mt-2 sm:inline sm:mt-0 text-blue-600">
              Renan Naves
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                       text-gray-600 mb-6 sm:mb-8 lg:mb-10 
                       text-center">
            Desenvolvedor Front-end apaixonado por criar experiências web incríveis
          </p>
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-block text-sm sm:text-base md:text-lg lg:text-xl
                       px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4
                       bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                       transition-all duration-300 hover:scale-105"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                        font-bold text-blue-600 text-center mb-8 sm:mb-12 lg:mb-16">
            Minhas Habilidades
          </h2>
          <div className="grid grid-cols-1 text-blue-400 sm:grid-cols-2 lg:grid-cols-4 
                         gap-4 sm:gap-6 md:gap-8 lg:gap-10 
                         w-full max-w-[90%] mx-auto">
            <SkillCard name="HTML" level="Júnior" />
            <SkillCard name="CSS" level="Júnior" />
            <SkillCard name="JavaScript" level="Júnior" />
            <SkillCard name="React" level="Júnior" />
            <SkillCard name="Tailwind" level="Júnior" />
            <SkillCard name="TypeScript" level="Júnior" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
