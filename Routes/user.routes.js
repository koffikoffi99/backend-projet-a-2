const express = require("express");
const router = express.Router();
const User = require("../Models/user");

//  Créer un utilisateur
router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        const userData = await user.save();
        res.status(201).json(userData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lire tous les utilisateurs
router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lire un utilisateur par ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mettre à jour un utilisateur
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Supprimer un utilisateur
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.status(200).json({ message: "Utilisateur supprimé avec succès", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
