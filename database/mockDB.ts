// database/mockDB.ts

export const mockDatabase = {
  usuarios: [
    {
      id: 1,
      nome: "Usuário Teste",
      email: "teste@solisorium.com",
      cpf: "111.222.333-44",
      tipo: "cliente"
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
    {
      id: 1,
      empresa_id: 1,
      nome: "EletroPosto Centro",
      latitude: -3.119027,
      longitude: -60.021731,
      potencia_kw: 50,
      valor_kwh: 1.50,
      status: "disponível"
    },
    {
      id: 2,
      empresa_id: 2,
      nome: "Shopping Solar",
      latitude: -3.098412,
      longitude: -60.023190,
      potencia_kw: 22,
      valor_kwh: 1.20,
      status: "ocupado"
    }
  ],
  reservas: []
};