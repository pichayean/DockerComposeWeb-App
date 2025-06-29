const express = require('express');
const router = express.Router();
const Team = require('../models/team.model');
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
  const teams = await Team.find();

  const enrichedTeams = teams.map(team => {
    let avatarUrl = null;
    
    if (team.avatar) {
      try {
        const filePath = path.join(__dirname, '../public/avatars', team.avatar);
        console.log(filePath)
        const fileData = fs.readFileSync(filePath);
        const base64 = fileData.toString('base64');
        const ext = path.extname(filePath).slice(1); // remove dot
        avatarUrl = `data:image/${ext};base64,${base64}`;
      } catch (err) {
        console.warn(`⚠️ ไม่พบ avatar: ${team.avatar}`);
      }
    }

    return {
      ...team.toObject(),
      avatarUrl
    };
  });

  res.json(enrichedTeams);
});

module.exports = router;
