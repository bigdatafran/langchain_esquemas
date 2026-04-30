/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Bot, MessageSquare, ChevronRight, Binary, Cpu, Layers } from "lucide-react";

const pages = [
  {
    title: "Agentes",
    description: "Configuración y orquestación de agentes inteligentes utilizando LangGraph.",
    url: "/Agentes.html",
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    tag: "LangGraph",
    id: "page-agentes"
  },
  {
    title: "Messages",
    description: "Gestión de historial, esquemas de mensajes y estados en cadenas de LangChain.",
    url: "/messages.html",
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
    tag: "LangChain",
    id: "page-messages"
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-tech-bg">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" id="bg-grid"></div>
      
      {/* Decorative Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" id="glow-top-left"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" id="glow-bottom-right"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32">
        {/* Header Section */}
        <header className="mb-20" id="main-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 rounded-full border border-tech-line bg-tech-card/50 text-xs font-mono text-emerald-400 tracking-wider uppercase">
                Directorio v1.0
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6" id="title">
              LangChain <span className="text-tech-line text-4xl lg:text-5xl mx-2">&</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                LangGraph Hub
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light" id="description">
              Punto de entrada profesional para la documentación y recursos de orquestación de LLMs. 
              Explora las implementaciones de agentes, arquitecturas de grafos y gestión de mensajes.
            </p>
          </motion.div>
        </header>

        {/* Index Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="index-section">
          {pages.map((page, index) => (
            <motion.a
              key={page.id}
              href={page.url}
              id={page.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block p-8 rounded-2xl border border-tech-line bg-tech-card/30 hover:bg-tech-card hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-tech-bg border border-tech-line group-hover:border-emerald-500/30 transition-colors">
                  {page.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {page.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                {page.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {page.description}
              </p>
              
              <div className="flex items-center text-xs font-mono text-emerald-400 font-medium group-hover:gap-2 transition-all">
                ACCEDER DOCUMENTO <ChevronRight className="w-4 h-4" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.a>
          ))}

          {/* Placeholder for future pages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl border border-dashed border-tech-line flex flex-col items-center justify-center text-center opacity-60"
            id="future-page-placeholder"
          >
            <div className="p-4 rounded-full bg-tech-line/30 mb-4">
              <Layers className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-gray-500 font-medium mb-1">Próximamente</h3>
            <p className="text-gray-600 text-xs text-balance">
              Nuevas secciones sobre Cadenas, Memoria y Tooling se añadirán pronto.
            </p>
          </motion.div>
        </section>

        {/* Footer Technical Detail */}
        <footer className="mt-32 pt-8 border-t border-tech-line flex flex-wrap gap-8 items-center justify-between text-gray-600 text-[10px] font-mono tracking-widest uppercase" id="main-footer">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Binary className="w-3 h-3" />
              <span>LangChain Orchestration</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3" />
              <span>Multi-Agent Systems</span>
            </div>
          </div>
          <div>
            © 2024 AI Systems Director
          </div>
        </footer>
      </main>
    </div>
  );
}
