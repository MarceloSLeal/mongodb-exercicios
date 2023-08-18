db.estados.updateOne({sigla: "SP"}, {$set: {populacao: 453400000}})

db.estados.updateOne({sigla: "AL"}, {$set: {cidades: [{nome: "Sergipe"}]}})

db.estados.updateOne(
    {sigla: "SP"},
    {$push: {cidades: {nome: "Santos", populacao: 433966}}}
)

db.estados.find({populacao: {$exists: true}}, {_id: 0, nome: 1})