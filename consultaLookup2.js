db.empresas.aggregate([
    {$match: {nome: "Vale"}},
    {$lookup: {
        from: "estados",
        localField: "cidade_id",
        foreignField: "cidades._id",
        as: "estado"
    }},
    {$unwind: "$estado"},
    {$unwind: "$estado.cidades"},
    {$addFields: { mesmaCidade: {$cmp: ["$estado.cidades._id", "$cidadeId"]}}},
    {$match: {mesmaCidade: 0}}
]).pretty()