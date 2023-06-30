let data = [
    {
        "nom": "Dupont",
        "prenom": "Jean",
        "message": "J'ai été vraiment impressionné par le service fourni. Nicolas était professionnel et courtoit. Je recommande vivement!"
    },
    {
        "nom": "Martin",
        "prenom": "Sophie",
        "message": "Je suis vraiment impressionné par le service fourni. Nicolas était professionnel!"
    },
    {
        "nom": "Lefevre",
        "prenom": "Pierre",
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

export const updateTemoigneur = (req, res) => {
    const { numero } = req.params
    const allTemoigneurNumeros = data.map(temoigneur => temoigneur.numero)
    if (!numero) {
        res.status(400).json({ error: true, message: "Le numero de témoigneur est requis" })
    } else if (!allTemoigneurNumeros.includes(numero)) {
        res.status(404).json({ error: true, message: "Ce témoigneur n'existe pas" })
    }
    const updatedTemoigneur = req.body
    const newData = data.map(temoigneur => {
        if (temoigneur.numero === numero) {
            return updatedTemoigneur
        }
        return temoigneur
    })

    data=[...newData]
    res.status(200).json({ error: false, message: "Témoigneur mise à jour correctement" })
}

export const deleteTemoigneur = (req, res) => {
    const { numero } = req.params
    const allTemoigneurNumeros = data.map(temoigneur => temoigneur.numero)
    if (!numero) {
        res.status(400).json({ error: true, message: "Le numéro du témoigneur est requis" })
    } else if (!allTemoigneurNumeros.includes(numero)) {
        res.status(404).json({ error: true, message: "Ce témoigneur n'existe pas" })
    }
    const newData = data.filter(temoigneur => temoigneur.numero !== numero)
    data = newData
    res.status(200).json({ message: `Le témoigneur numéro ${numero} a éte supprimé avec succès` })
}


export const getTemoigneurById = (req, res) => {
    const { numero } = req.params
    const allTemoigneurNumeros = data.map(temoigneur => temoigneur.numero)
    if (!numero) {
        res.status(400).json({ error: true, message: "Le numéro de témoigneur est requis" })
    } else if (!allTemoigneurNumeros.includes(numero)) {
        res.status(404).json({ error: true, message: "Ce témoigneur n'existe pas" })
    }
    const thisTemoigneur = data.find(temoigneur => temoigneur.numero === numero)
    res.status(200).json({ error: false, data: thisTemoigneur })
}