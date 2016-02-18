import Express from 'express';
import fs from 'fs';

const router = Express.Router(); //eslint-disable-line

router.get('/seasons/:seasonId/episodes/:episodeId', (req, res) => {
  const seasonId = req.params.seasonId;
  const episodeId = req.params.episodeId;

  fs.readFile(`${__dirname}/friends/${seasonId}/${episodeId}.smi.json`, (err, data) => {
    if (err) {
      return res.status(403).send('Forbidden');
    }
    res.send(data.toString());
  });
});

export default router;
