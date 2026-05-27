// database/api.ts
import { mockDatabase } from './mockDB';

const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

export const DatabaseAPI = {
  getPontosRecarga: async () => {
    await delay(); // Simula o tempo de carregamento da internet
    return mockDatabase.pontos_de_recarga;
  },

  // Nova função de Login que valida com o mockDB
  login: async (perfil: string, email: string, senha: string, cnpj: string = "") => {
    await delay(1000); // Simula loading

    if (perfil === 'cliente') {
      const user = mockDatabase.usuarios.find(u => u.email === email && u.senha === senha && u.tipo === perfil);
      if (user) return { success: true, data: user };
      return { success: false, message: "Usuário ou senha incorretos." };
    } else {
      // Perfil: Integrador ou Ponto
      const empresa = mockDatabase.empresas.find(e => 
        e.email === email && 
        e.senha === senha && 
        e.tipo === perfil && 
        e.cnpj === cnpj
      );
      if (empresa) return { success: true, data: empresa };
      return { success: false, message: "Credenciais ou CNPJ incorretos." };
    }
  }
};