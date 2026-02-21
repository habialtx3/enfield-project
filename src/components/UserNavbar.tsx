import Link from 'next/link'

export default function UserNavbar() {

    return (
        <>
            <header className="glass-nav fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-6">
                    <div className="font-display font-bold text-3xl tracking-tighter text-gray-900 uppercase flex flex-col leading-none select-none">
                        <span>END</span>
                        <span className="text-yellow-500">FIELD</span>
                    </div>
                    <div className="h-8 w-[1px] bg-gray-300 hidden md:block" />
                    <div className="hidden md:flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                            System: Online
                        </span>
                    </div>
                </div>
                <nav className="hidden lg:flex items-center space-x-12 text-sm font-bold uppercase tracking-widest text-gray-600">
                    <Link
                        className="text-black relative hover:text-yellow-600 transition-colors"
                        href="/"
                    >
                        Overview
                    </Link>
                    <Link
                        className="hover:text-black hover:text-yellow-600 transition-colors"
                        href="/operator"
                    >
                        Operators
                    </Link>
                    <Link
                        className="hover:text-black hover:text-yellow-600 transition-colors"
                        href="#"
                    >
                        World
                    </Link>
                    <Link
                        className="hover:text-black hover:text-yellow-600 transition-colors"
                        href="#"
                    >
                        Media
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex btn-primary px-6 py-2 text-xs border border-black cut-corner">
                        Contact Us
                    </button>
                    <button className="lg:hidden text-gray-800">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </header>
        </>
    )
}
