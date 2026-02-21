import React from 'react'

export default function page() {
    return (
        <>
            <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 mt-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-gray-900 drop-shadow-sm">
                            Directory<span className="text-yellow-500 animate-pulse">_</span>
                        </h1>
                        <p className="text-gray-500 text-xs mt-2 font-mono flex items-center gap-2 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            SYSTEM.ROOT.ACCESS_GRANTED // OVERRIDE ACTIVE
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-[10px] font-mono text-gray-400 mb-1">
                            DATA_STREAM_001.04
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] w-24 bg-gray-300" />
                            <div className="px-3 py-1 bg-white border border-gray-200 shadow-sm text-[10px] font-mono text-green-600 font-bold uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                stable connection
                            </div>
                        </div>
                    </div>
                </div>
                <section className="glass-module p-1 mb-12 relative overflow-hidden">
                    <div
                        className="absolute top-0 right-0 w-16 h-16 hazard-stripe opacity-20"
                        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    />
                    <div className="p-6 md:p-8 bg-white/40">
                        <div className="grid gap-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-grow group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined group-focus-within:text-yellow-600 transition-colors">
                                        search
                                    </span>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-none pl-12 pr-4 py-4 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-gray-900 placeholder-gray-400 font-mono text-sm shadow-inner transition-all"
                                        placeholder="ID.SEARCH_ARCHIVE..."
                                        type="text"
                                    />
                                </div>
                                <button className="glow-button py-4 px-10 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                                    <span>Execute</span>
                                    <span className="material-symbols-outlined text-lg">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative group">
                                    <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-none focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer hover:bg-gray-50">
                                        <option>Combat Roles</option>
                                        <option>Vanguard</option>
                                        <option>Guard</option>
                                    </select>
                                </div>
                                <div className="relative group">
                                    <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-none focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer hover:bg-gray-50">
                                        <option>Energy Type</option>
                                        <option>Physical</option>
                                        <option>Arts</option>
                                    </select>
                                </div>
                                <div className="relative group">
                                    <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-none focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer hover:bg-gray-50">
                                        <option>Factory Traits</option>
                                        <option>Production</option>
                                        <option>Efficiency</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-8 mt-2 pt-6 border-t border-gray-300">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Visualizer
                                    </span>
                                    <div className="relative inline-block w-12 h-6">
                                        <input
                                            className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
                                            id="toggle1"
                                            type="checkbox"
                                        />
                                        <label
                                            className="block w-full h-full bg-gray-200 rounded-full peer-checked:bg-yellow-200 transition-colors border border-gray-300 shadow-inner"
                                            htmlFor="toggle1"
                                        />
                                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6 peer-checked:bg-yellow-500 shadow-sm border border-gray-200" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Base Link
                                    </span>
                                    <div className="relative inline-block w-12 h-6">
                                        <input
                                            className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
                                            id="toggle2"
                                            type="checkbox"
                                        />
                                        <label
                                            className="block w-full h-full bg-gray-200 rounded-full peer-checked:bg-yellow-200 transition-colors border border-gray-300 shadow-inner"
                                            htmlFor="toggle2"
                                        />
                                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6 peer-checked:bg-yellow-500 shadow-sm border border-gray-200" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Elite Protocol
                                    </span>
                                    <div className="relative inline-block w-12 h-6">
                                        <input
                                            className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
                                            id="toggle3"
                                            type="checkbox"
                                        />
                                        <label
                                            className="block w-full h-full bg-gray-200 rounded-full peer-checked:bg-yellow-200 transition-colors border border-gray-300 shadow-inner"
                                            htmlFor="toggle3"
                                        />
                                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6 peer-checked:bg-yellow-500 shadow-sm border border-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-32 h-2 hazard-stripe" />
                </section>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-6 hazard-stripe-sm" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-800">
                            Personnel_Registry
                        </h2>
                    </div>
                    <button className="text-[10px] flex items-center gap-2 text-gray-500 hover:text-black transition-colors uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined text-sm">grid_view</span>
                        Grid View: Full
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Shone"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvt-KRopdZ3TeyHLiZK4GcJHjSLuDCTIziA6BVg9sqco2gM_8pFrpc4gYTnGNVEbhNVjjWsNoqQDpaZ941noHkgzZSc-nP7T3TME02lI69yLQeUCO4BQSnn8drHpJ6MZatvf5AWg2QtWoCeEs82d95uFKx-JcRI34j6jYKfZj5qOViHfKOcLkVdFo77pcAZxVv_IT5kyTTMYrC1zoGYi8hb9HpOlUWjEMG9PJz6Gja8PC-k2Eh69NPruIAIGZyHNDZKjZJqpES6ll"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Shone
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-yellow-400 bg-white/50 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-600 text-xl">
                                            shield
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Bhami"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPfKNlriE-FRlYNfXkUlrsqqyL-KvU9w4xqeThp1Ii2HszMgwIhDGku5KwzDqdgJ7EmFKxvKwobxMA85vDWKvKe0gdnch7WNYgY5cpXuXO0CiobUi9zLHi_ztRZq6B5MUJ8yKq-ZWGrL-SPWJ5SR8FVwwumYWCo3gsl6YBLriThxQjvjH9-GGmG2cJX5bzotcbIWK5FpNdhdXkJ54WXdNgVEosJ037aON0CghCYstfTNIOGgD-DEsP6GZtfGGewb2kK9k1o5rjcUG3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Bhami
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            bolt
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Shanbo"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_2xDPViU166-JDVxhTSf7MWeGftfZdSH0i9Oza2APJMp4xzuZzoUOyMwbSbX-phXNlxbaG6cUirZEqC3ZLQmTLIEy_VEkemClpz_pVvXb0AZFDifgdRqhM9AsNtpeoA2VFdO15bYr6RupYmawGWJZRG-56FUuoO-PvBg3cCDg69pNKD6Y7g4ZEhdUmiEUK1SCzvRPYQxcv2_T8qj00P-DDn6KcF4unPZTv8dm1Xn79o7umdTvs6iKYECLFlQGXayRcq-SUPR1D2dF"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Shanbo
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            target
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Mir'r"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpt3yt0JFMl_f9QQ1gV7173cb2fyd7iJIqV0-fPwotFunDv6KbvVMannN1vIPV9nSck_gHdkcq_6R0DOCjVNvEvEkISwkVu3CSDZF6_I-LEYKC3t7sPrK1HvhQ3Mpma4QTvAJB4RHVt86fxQR-4n0j2TgiNDKd8txRFT4aFzqY6Ud6Zvm4ADAa9dO04jqs46kgL4P44k0LpFB8rrjt4iPLl51SBOGRGMPep0Puo5bt3_ObBRtnq0bC4XR5I0rDI6rjrdW22PzcsYR"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            {`Mir'r`}
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            medical_services
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Moyr"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3yJLUZC75swZ_vhItKDTKriIBAMYQH2O2Q6cuhkF7CwxVFs7C2gnqa065SuryWk8KOVSCwenWE7u8MQd70n-VhlfYKZlWCUWWa_unaDWyfAtZ1XqLxHyIT_YAsN7y7SDaZdvv4WKAFmoroStqQFCeXbV4GVj5YYy1pUNRaBvt-r-cJqoaVR8qpaMZHISR7J486oGqu2GnPGHMkT35f635gv6qrf-2T6tFNptbXBglbievz1vac9PBhfp3EVAsY6_upyWvthiT6UFR"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Moyr
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            swords
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Burnyoro"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1CpOO6MeDAf7Ai6TlgWvYZ8wUMZUf2zle7sg_o8r2VPEqHThzufjbUjch70GDwoVH0gG_KKWK2e8jzAai9c_8uL3JUBIZOl4VmyrqW2-iG31p0j7W_oUhrhnCrHppdiOx0gvA1FthAOHYwTkOJ3-eKHkSsuPnpuu2f4Ji6jjP_NUdVqZtZQe8Bh0Lf_vlLmPjI35lgD2dmXeJQnUsTWdqPQJoLcd3oHi7XkU1DMLqNC54Y7I71PxAC4pgqP3IPa5H8U4C72L-iqCP"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Burnyoro
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            fire_extinguisher
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Hafe"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGTUfj76EH62i1lM47Hg4aeKbdRUatUTGlOoptiwfH7AfXzzCQNTxdpJT_KUCvBRT2FG05rCBYo4Lg2UcM_uDX-oAiiiA-pgybNDPwblC5Q3b2p64cQwJ71BTuKt24zRU9QV1Iz-RL4oMeOHQXpvO71Yi3xcqm8BT6uXd8tdGH1h9BdkYdkisnAK3b8SiSMlmBtEzA1X2CSDPpcC0kUbV927tfZm5Q6lF4-O6rbRVv7X8KesOEb8JQ0b48iqOHpyGbFbUHuOsLcZNb"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Hafe
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            shield_person
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-card-glass group relative overflow-hidden rounded-sm">
                        <div className="absolute top-0 right-0 w-8 h-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-0 right-0 w-full h-full hazard-stripe-sm"
                                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                            />
                        </div>
                        <div className="aspect-[4/5] relative">
                            <img
                                alt="Nova"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVFPRt1SYJoDAaNQyKb_d0DHOtGkZBI03BcP6HVvlVuIOwdxq-6sTaZtMNo5qTmU2atSL3SqfFZbxNusNJx9m9W8AG7tDzRhlcqtkpRqp9JufgWAbDrfbXu65q4Fs_zmxeg8OH_smNUDOwwMq1MNAKl8EMRTveMSfk1uIe8zCwTuVXfpFNdbfpr_6uxIYbths3WI7hKJc5wf3tr-DHbpTdE-HUBYZVeefhitTYsro1EcBdaAhwV4JvXbfBaPtVWrhFt7ypcFmN1sWq"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-20" />
                            <div className="codename-overlay absolute bottom-0 left-0 w-full p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Codename
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase group-hover:text-yellow-600 transition-colors">
                                            Nova
                                        </h3>
                                    </div>
                                    <div className="glass-module p-2 border-gray-200 bg-white/50 group-hover:border-yellow-400 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-yellow-600 text-xl">
                                            settings_input_component
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
