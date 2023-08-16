db.estados.insertOne(
    {
        nome: "São Paulo",
        sigla: "SP",
        regiao: "Sudeste",
        cidades: [
            {
                _id: ObjectId(),
                nome: "Campinas",
                area: 123123,
                prefeito: "Jonas Donizette",
                populacao: 987987
            },
            {
                _id: ObjectId(),
                nome: "Guarulhos",
                populacao: 234234
            },
            {
                _id: ObjectId(),
                nome: "Sorocaba",
                distanciaCapital: 87,
                populacao: 456456
            }]
    })
