// database/mockDB.ts

export const mockDatabase = {
  usuarios: [
    {
      id: 1,
      nome: "Usuário Cliente",
      email: "adm",
      senha: "123",
      cpf: "111.222.333-44",
      tipo: "cliente"
    }
  ],
  empresas: [
    {
      id: 1,
      nome: "Empresa Integrador Teste",
      email: "adm",
      senha: "123",
      cnpj: "11.222.333/0001-44", // CNPJ de teste para integrador
      tipo: "integrador"
    },
    {
      id: 2,
      nome: "Posto de Recarga Teste",
      email: "adm",
      senha: "123",
      cnpj: "55.666.777/0001-88", // CNPJ de teste para ponto
      tipo: "ponto"
    }
  ],
  veiculos: [
    {
      id: 1,
      usuario_id: 1,
      marca: "Nissan",
      modelo: "Leaf",
      placa: "ABC-1234",
      autonomia_km: 270,
      capacidade_kwh: 40
    }
  ],
  pontos_de_recarga: [
    { id: "1", nome: "Estação Centro Sul", distanciaKm: 1.4, potenciaKw: 60, preco: 1.95, conector: "CCS2", status: "Disponivel", latitude: -23.5505, longitude: -46.6333 },
    { id: "2", nome: "Hub Solar Campinas", distanciaKm: 3.1, potenciaKw: 22, preco: 1.45, conector: "Tipo 2", status: "Em uso", latitude: -23.5308, longitude: -46.6395 },
    { id: "3", nome: "Eletro Park Norte", distanciaKm: 4.8, potenciaKw: 50, preco: 1.85, conector: "CCS2", status: "Disponivel", latitude: -23.5134, longitude: -46.6531 },
  ],
  reservas: []
};