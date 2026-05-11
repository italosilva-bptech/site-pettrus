import {
  Gem,
  ShieldAlert,
  Handshake,
  ShieldCheck,
  Medal,
  Users,
  Flag,
  Eye
} from "lucide-react"

export function MissionVisionValues() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28 bg-cover bg-center"
      style={{
        /* DESTAQUE: LOCAL PARA A IMAGEM DE BACKGROUND */
        backgroundImage: "url('/images/bg-valores.jpg')",
      }}
    >
      {/* Overlay de fundo */}
      <div className="absolute inset-0 bg-[#f8faff]/90" />

      {/* Linhas decorativas circulares do print */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-blue-100 rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-blue-100 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        
        {/* Missão e Visão - Cards Superiores */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-50">
            <div className="flex items-center gap-4 mb-4">
              <Flag className="w-6 h-6 text-[#1a365d]" />
              <h3 className="text-2xl font-bold text-[#1a365d]">Missão</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Oferecer soluções em Proteção Patrimonial Mutualista com eficiência, transparência e acessibilidade, proporcionando segurança e tranquilidade aos nossos associados em todo o Brasil. 
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-50">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-6 h-6 text-[#1a365d]" />
              <h3 className="text-2xl font-bold text-[#1a365d]">Visão</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Ser reconhecida nacionalmente como referência em proteção patrimonial mutualista, pela solidez da gestão, qualidade no atendimento e alto nível de satisfação dos associados. 
            </p>
          </div>
        </div>

        {/* Container Branco Principal (Valores) */}
        <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-sm border border-slate-50">
          
          {/* Título de Valores Centralizado no Topo */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Gem className="w-7 h-7 text-[#1a365d]" />
            <h3 className="text-2xl font-bold text-[#1a365d]">Nossos Valores</h3>
          </div>

          {/* Grid de Cards de Valores Ajustado para 3+2 */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: ShieldAlert,
                title: "Transparência",
                description: "Atuamos com clareza e ética em cada processo.",
              },
              {
                icon: Handshake,
                title: "Comprometimento",
                description: "Assumimos a responsabilidade de cuidar de cada associado com seriedade.",
              },
              {
                icon: ShieldCheck,
                title: "Confiança",
                description: "Fortalecemos relações duradouras baseadas no respeito e na integridade.",
              },
              {
                icon: Medal,
                title: "Excelência",
                description: "Buscamos eficiência e proximidade em cada interação.",
              },
              {
                icon: Users,
                title: "Valorização Humana",
                description: "Colocamos as pessoas no centro de tudo o que fazemos.",
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-[#C4C6CD]/10 rounded-[24px] p-8 flex flex-col items-center text-center w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-24px)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <value.icon className="w-6 h-6 text-[#1a365d]" />
                  <h4 className="font-bold text-[#1a365d]">
                    {value.title}
                  </h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[240px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}