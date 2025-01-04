interface SkillCardProps {
  name: string;
  level: string;
}

const SkillCard = ({ name, level }: SkillCardProps) => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10
                    rounded-lg shadow-md hover:shadow-lg 
                    transition-all duration-300
                    hover:scale-105 hover:bg-blue-50
                    cursor-pointer">
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 
                    font-bold mb-2 md:mb-3 lg:mb-4">
        {name}
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                    text-gray-600">
        {level}
      </p>
    </div>
  );
};

export default SkillCard; 