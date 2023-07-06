let data = [
    {
        "numero": "1A00",
        "name": "Jean Dupont",
        "message": "J'ai été vraiment impressionné par le service fourni. Nicolas était professionnel et courtoit. Je recommande vivement!"
    },
    {
        "numero": "2A00",
        "name": "Sophie Martin",
        "message": "Je suis vraiment impressionné par le service fourni. Nicolas était professionnel!"
    },
    {
        "numero": "3A00",
        "name": "Pierre Lefevre",
        "message": "Je suis extrêmement satisfait du travail de Nicolas. Il est vraiment gentil."
    }
]

export const addTemoigneur = (req, res) => {
    const temoigneurInfo = req.body
    const itExists = data.find(temoigneur => temoigneur.numero === temoigneurInfo.numero)
    
    if (itExists) return res.status(403).json({ error: true, message: "Le témoigneur existe deja" })
    data = [...data, temoigneurInfo]
    res.status(200).json({ error: false, data, message: "Le témoigneur à été ajouté avec succès" })
}

export const temoigneurList = (req, res) => {
    if (!data.length) return res.status(200).json({ error: false, message: "Pas de témoigneur dans la liste" })
    res.status(200).json({ error: false, data, message: "Listes des témoigneurs" })
}