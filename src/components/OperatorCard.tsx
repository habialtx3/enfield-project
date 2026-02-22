
export default function OperatorCard() {
    return (
        <>
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
        </>
    )
}
