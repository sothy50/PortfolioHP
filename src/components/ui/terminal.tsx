interface TerminalProps {
    closeModal: () => void;
  }

export default function Terminal({closeModal}: TerminalProps) {
    return (
      <aside className="bg-gray-100 dark:bg-gray-800 text-white p-6 rounded-lg w-80% h-40% font-fira">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" onClick={closeModal} />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-sm dark:text-white text-gray-800">profile</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ My name is</p>
          <p className="dark:text-white text-gray-800">+ Mon@Sothy50</p>
          <p className="dark:text-white text-gray-800">Recent science master's graduate.</p>
          <p className="dark:text-white text-gray-800">Web Engineer</p>
          <p className="text-green-400">$Specialized in image processing and analysis.</p>
          <p className="text-blue-500">+ 幅広いことに挑戦し、その記録を残します。</p>
        </div>
      </aside>
    )
  }