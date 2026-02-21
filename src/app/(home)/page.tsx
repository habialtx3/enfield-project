import React from 'react'

export default function page() {
    
    return (
        <>
            <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Gameplay Background"
                        className="w-full h-full object-cover object-center filter saturate-[0.8] brightness-[0.9]"
                        src="assets/home/main.jpg"
                    />
                </div>
                <div className="absolute inset-0 z-10 hero-overlay" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-30" />
                <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                    <div className="max-w-2xl mt-20">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-12 bg-yellow-500" />
                            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-gray-800">
                                Protocol: Frontier_V2
                            </span>
                        </div>
                        <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-gray-900 leading-[0.9] mb-6 drop-shadow-sm">
                            Reclaim
                            <br />
                            The{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                                Frontier
                            </span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 font-medium leading-relaxed glass-panel p-4 border-l-4 border-yellow-500">
                            Join the Endfield Industries team. Explore the uncharted territories
                            of Talos-II. Secure the future of civilization through industry and
                            combat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary px-10 py-4 text-sm tracking-widest border border-black shadow-lg flex items-center justify-center gap-2 cut-corner">
                                <span className="material-symbols-outlined">play_arrow</span>
                                Watch Trailer
                            </button>
                            <button className="px-10 py-4 text-sm tracking-widest border-2 border-gray-900 text-gray-900 font-bold uppercase hover:bg-gray-900 hover:text-white transition-colors cut-corner">
                                Pre-Register
                            </button>
                        </div>
                    </div>
                    <div className="absolute right-6 bottom-24 hidden md:block">
                        <div className="glass-panel p-4 w-64 border-t-2 border-yellow-500">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-mono text-gray-500">
                                    SERVER_STATUS
                                </span>
                                <span className="text-green-600 font-bold text-xs animate-pulse">
                                    OPTIMAL
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 h-1 mb-2">
                                <div className="bg-yellow-500 h-1 w-[85%]" />
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-600">
                                <div>PING: 12ms</div>
                                <div>PKT_LOSS: 0%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 hazard-stripe z-30" />
            </section>
            <section className="py-20 bg-gray-100 relative">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end border-b border-gray-300 pb-4">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-gray-900">
                            Scenery Log
                        </h2>
                        <span className="text-xs font-mono text-yellow-600 tracking-widest block mt-1">
          {`/// ENVIRONMENTAL_DATA_ARCHIVE`}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            Scroll to Explore
                        </span>
                        <span className="material-symbols-outlined text-gray-400">
                            arrow_downward
                        </span>
                    </div>
                </div>
                <div className="space-y-16 max-w-7xl mx-auto px-0 md:px-6">
                    <div className="relative group w-full h-[400px] md:h-[500px] overflow-hidden border-y-2 border-yellow-500 md:border-none md:rounded-sm">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('assets/home/image_1.webp')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-8 left-8 chip px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm shadow-lg">
                            Sector: 04 // The Dunes
                        </div>
                        <div className="absolute bottom-8 right-8 glass-panel px-6 py-4 max-w-md border-l-4 border-yellow-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="font-display text-xl font-bold uppercase text-gray-900">
                                Arid Zone Alpha
                            </h3>
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                High-temperature operating environment. Recommended protective gear
                                class: IV. Geological stability is compromised by frequent
                                sandstorms.
                            </p>
                        </div>
                        <div
                            className="absolute top-0 right-0 w-12 h-12 hazard-stripe"
                            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                        />
                    </div>
                    <div className="relative group w-full h-[400px] md:h-[500px] overflow-hidden border-y-2 border-yellow-500 md:border-none md:rounded-sm">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('assets/home/image_2.webp')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-8 right-8 chip px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm shadow-lg">
                            Sector: 09 // Production Plant
                        </div>
                        <div className="absolute bottom-8 left-8 glass-panel px-6 py-4 max-w-md border-r-4 border-yellow-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="font-display text-xl font-bold uppercase text-gray-900">
                                Automated Factory
                            </h3>
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                Core industrial complex. Output efficiency at 94%. Automated defense
                                turrets active. Authorized personnel only.
                            </p>
                        </div>
                        <div
                            className="absolute bottom-0 left-0 w-12 h-12 hazard-stripe"
                            style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                        />
                    </div>
                    <div className="relative group w-full h-[400px] md:h-[500px] overflow-hidden border-y-2 border-yellow-500 md:border-none md:rounded-sm">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                "url('assets/home/image_3.jpeg')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 chip px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm shadow-lg flex gap-2">
                            <span>Stability: Low</span>
                            <span className="text-white">|</span>
                            <span>Originium: Detected</span>
                        </div>
                        <div className="absolute bottom-8 right-8 glass-panel px-6 py-4 max-w-md border-t-4 border-yellow-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="font-display text-xl font-bold uppercase text-gray-900">
                                Research Lab
                            </h3>
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                Advanced energy research facility. Containment protocols in effect.
                                Caution: Reality distortion field nearby.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-200/50 skew-x-12 -z-10" />
                <div className="absolute top-20 left-10 text-[200px] leading-none font-display font-bold text-gray-200 select-none -z-10 opacity-40">
                    CORE
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="bg-yellow-400 text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
                            Gameplay Overview
                        </span>
                        <h2 className="font-display text-5xl font-bold uppercase text-gray-900 mb-2">
                            Core Mechanics
                        </h2>
                        <div className="h-1 w-24 hazard-stripe" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group tech-border glass-panel p-1 transition-transform duration-300 hover:-translate-y-2">
                            <div className="h-full bg-white/50 p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-full -mr-12 -mt-12 group-hover:from-yellow-300 transition-colors" />
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center mb-6 shadow-md group-hover:bg-yellow-500 transition-colors">
                                    <span className="material-symbols-outlined text-white group-hover:text-black">
                                        precision_manufacturing
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold uppercase text-gray-900 mb-4">
                                    Industrial Base
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                                    Construct complex automated assembly lines. Gather resources from
                                    the wild and process them into essential equipment for your
                                    operators.
                                </p>
                                <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                                    <span className="text-[10px] font-mono uppercase text-gray-400">
                                        SYS.BUILD
                                    </span>
                                    <span className="material-symbols-outlined text-yellow-600">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-1 h-full hazard-stripe-vertical opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="group tech-border glass-panel p-1 transition-transform duration-300 hover:-translate-y-2">
                            <div className="h-full bg-white/50 p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-full -mr-12 -mt-12 group-hover:from-yellow-300 transition-colors" />
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center mb-6 shadow-md group-hover:bg-yellow-500 transition-colors">
                                    <span className="material-symbols-outlined text-white group-hover:text-black">
                                        swords
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold uppercase text-gray-900 mb-4">
                                    Strategic Combat
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                                    Real-time combat with tactical pause. Control a squad of 4
                                    operators, utilizing elemental reactions and combo skills to
                                    neutralize threats.
                                </p>
                                <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                                    <span className="text-[10px] font-mono uppercase text-gray-400">
                                        SYS.COMBAT
                                    </span>
                                    <span className="material-symbols-outlined text-yellow-600">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-1 h-full hazard-stripe-vertical opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="group tech-border glass-panel p-1 transition-transform duration-300 hover:-translate-y-2">
                            <div className="h-full bg-white/50 p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-full -mr-12 -mt-12 group-hover:from-yellow-300 transition-colors" />
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center mb-6 shadow-md group-hover:bg-yellow-500 transition-colors">
                                    <span className="material-symbols-outlined text-white group-hover:text-black">
                                        explore
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold uppercase text-gray-900 mb-4">
                                    Exploration
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                                    Traverse vast seamless environments. Discover ruins of the old
                                    era, unlock fast-travel ziplines, and uncover the secrets of
                                    Talos-II.
                                </p>
                                <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                                    <span className="text-[10px] font-mono uppercase text-gray-400">
                                        SYS.EXPLORE
                                    </span>
                                    <span className="material-symbols-outlined text-yellow-600">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-1 h-full hazard-stripe-vertical opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-yellow-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="font-display font-bold text-4xl mb-6 uppercase tracking-tighter">
                                End<span className="text-yellow-500">field</span>
                            </div>
                            <p className="text-gray-400 text-sm max-w-sm mb-6">
                                Endfield Industries is dedicated to the reclamation and development
                                of Talos-II. Join us in building a new future.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="font-bold text-xs">TW</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="font-bold text-xs">YT</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="font-bold text-xs">DC</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-xs">
                                Navigation
                            </h4>
                            <ul className="space-y-3 text-sm font-medium">
                                <li>
                                    <a className="hover:text-yellow-500 transition-colors" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-yellow-500 transition-colors" href="#">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-yellow-500 transition-colors" href="#">
                                        Operators
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-yellow-500 transition-colors" href="#">
                                        Systems
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-xs">
                                Legal
                            </h4>
                            <ul className="space-y-3 text-sm font-medium text-gray-400">
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-gray-600 uppercase tracking-wider">
                            © 2024 Endfield Industries. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-[10px] text-gray-500 font-mono">
                                STATUS: OPERATIONAL
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
