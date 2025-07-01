interface InfoErroProps {
  aoTentarNovamente?: () => void;
}

export default function InfoErro({ aoTentarNovamente }: InfoErroProps) {
  return (
    <div className="flex flex-col items-center justify-center  bg-red-100 text-red-800 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <svg
        className="w-16 h-16 mb-4 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.658-1.14 1.105-2.054L13.105 4.946c-.526-.874-1.684-.874-2.21 0L3.977 16.946c-.553.914.051 2.054 1.105 2.054z"
        />
      </svg>

      <h2 className="text-xl font-semibold mb-2 font-['Poppins']">Oops! Algo deu errado</h2>

      <p className="text-center text-sm mb-4 font-['Poppins']">
        Não conseguimos acessar os dados agora. Verifique sua conexão ou tente novamente.
      </p>

      <button
        onClick={aoTentarNovamente}
        className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200 mb-2 font-['Poppins'] cursor-pointer"
      >
        Tentar novamente
      </button>
    </div>
  );
}
