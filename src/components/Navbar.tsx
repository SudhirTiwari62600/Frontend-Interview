import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-white">
      
      <div className="flex items-center gap-2 cursor-pointer group">
  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
    CA
  </div>
  <span className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:tracking-widest transition-all duration-300">
    MONK
  </span>
</div>


      <div className="hidden md:flex gap-6 text-gray-600 bg-repeat-round">
        
        <a className="relative px-2 py-1 text-gray-600 transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
  Tools
</a>

<a className="relative px-2 py-1 text-gray-600 transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
  Practice
</a>

<a className="relative px-2 py-1 text-gray-600 transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
  Events
</a>

<a className="relative px-2 py-1 text-gray-600 transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
  Job Board
</a>

<a className="relative px-2 py-1 text-gray-600 transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
  Points
</a>

      </div>
      <Button
  className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95"
>
  <span className="relative z-10">Profile</span>
  <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
</Button>
    </nav>
  )
}
