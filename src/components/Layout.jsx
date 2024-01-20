import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
    const location = useLocation()

    return (
    <>
        <div className='md:flex md:min-h-screen '> 
            <aside className="md:w-1/4 bg-blue-700 px-5 py-10">
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
                <h4 className='text-xs font-bold text-white text-center'>Creado con React Router DOM, Vite y Tailwind CSS</h4>

                <nav className="mt-10">
                    <Link 
                    className={`${location.pathname === '/' ? 'text-yellow-300' : 'text-white'} text-2xl block mt-2 hover:text-yellow-300 text-white 
                    font-medium`} to="/">Clientes</Link>
                    <Link 
                    className={`${location.pathname === '/clientes/nuevo' ? 'text-yellow-300' : 'text-white'} text-2xl block mt-2 hover:text-yellow-300 text-white  font-medium`} to="/clientes/nuevo">Añadir Cliente</Link>
                </nav>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div> 
    </>
  )
}

export default Layout