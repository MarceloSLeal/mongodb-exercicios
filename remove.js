db.estados.countDocument()

db.estados.remove({sigla: "AC"})

db.estados.remove({populacao: {$exists: true}}, 1)

db.estados.updateOne({sigla: "RJ"}, {$set: {populacao: 16720000}})

db.estados.remove({populacao: {$lt: 200000}})