// database/api.ts
const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

export const DatabaseAPI = {
  getPontosRecarga: async () => {
    await delay(); // Simula o tempo de carregamento da internet
    
    // Retornamos os dados no formato que a interface PontoRecarga espera
    return [
      { id: "1", nome: "Estação Centro Sul", distanciaKm: 1.4, potenciaKw: 60, preco: 1.95, conector: "CCS2", status: "Disponivel", latitude: -23.5505, longitude: -46.6333 },
      { id: "2", nome: "Hub Solar Campinas", distanciaKm: 3.1, potenciaKw: 22, preco: 1.45, conector: "Tipo 2", status: "Em uso", latitude: -23.5308, longitude: -46.6395 },
      { id: "3", nome: "Eletro Park Norte", distanciaKm: 4.8, potenciaKw: 50, preco: 1.85, conector: "CCS2", status: "Disponivel", latitude: -23.5134, longitude: -46.6531 },
    ];
  }
};