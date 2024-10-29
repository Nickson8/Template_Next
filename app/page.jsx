import Link from "next/link"

export default function Home() {
  return (

    <div className='overflow-hidden relative inset-x-0 top-0 z-30 w-screen h-screen transition-all flex flex-row space-x-4 items-center'>
      <h1 className="pl-20 text-7xl absolute top-5 text-indigo-900">Titulo</h1>

      <div className='absolute top-8 right-40 space-x-16 flex flex-row'>
        <div className='pt-5'>
          <Link href={'/home'}
          className='p-2 w-32 text-xl text-center rounded group text-indigo-800 transition duration-300 hover:text-indigo-950'>
          Cadastre-se
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-950"></span>
          </Link>
        </div>

        <div className='pt-5'>
          <Link href={'/home'}
          className='p-2 w-32 text-xl text-center rounded group text-indigo-800 transition duration-300 hover:text-indigo-950'>
          Entrar
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-950"></span>
          </Link>
        </div>

      </div>

      
    </div>

  )
}
