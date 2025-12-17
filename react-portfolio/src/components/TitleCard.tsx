import { useContent } from "../hooks/useContent";

export const TitleCard = () => {
  const titleContent = useContent("title");

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="relative group">
        
        <div
          className="
            absolute inset-0
            rounded-[32px]
            bg-gradient-to-br
            from-cyan-400/30
            via-indigo-400/20
            to-purple-400/30
            blur-3xl
            opacity-80
          "
        />

        <div
          className="
            relative z-10
            flex flex-col items-center
            rounded-[32px]
            bg-white/10
            backdrop-blur-2xl
            border border-white/20
            px-16 py-14
            text-center
            shadow-[0_30px_80px_rgba(0,0,0,0.5)]
            transition-transform duration-500
            group-hover:-translate-y-1
          "
        >
          
          <h1
            className="
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-semibold
              tracking-tight
              leading-none
              text-white
            "
          >
            {titleContent.name}
          </h1>

         
          <p
            className="
              mt-6
              text-2xl md:text-3xl
              text-slate-300
            "
          >
            {titleContent.role}
            <span className="font-medium text-cyan-300">
              {" "}
              ({titleContent.roleStack})
            </span>
          </p>

          {/* Divider */}
          <div
            className="
              mx-auto mt-8
              h-[2px] w-[55%]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-indigo-400
              to-purple-400
              opacity-80
            "
          />
        </div>
      </div>
    </div>
  );
};
