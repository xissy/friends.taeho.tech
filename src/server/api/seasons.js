import Express from 'express';

const router = Express.Router(); //eslint-disable-line

const seasons = [{
  id: 1,
  episodes: [{
    id: 1,
    title: 'The Pilot',
  }, {
    id: 2,
    title: 'The One with the Sonogram at the End',
  }, {
    id: 3,
    title: 'The One with the Thumb',
  }, {
    id: 4,
    title: 'The One with George Stephanopoulos',
  }, {
    id: 5,
    title: 'The One with the East German Laundry Detergent',
  }, {
    id: 6,
    title: 'The One with the Butt',
  }, {
    id: 7,
    title: 'The One with the Blackout',
  }, {
    id: 8,
    title: 'The One Where Nana Dies Twice',
  }, {
    id: 9,
    title: 'The One Where Underdog Gets Away',
  }, {
    id: 10,
    title: 'The One with the Monkey',
  }, {
    id: 11,
    title: 'The One with Mrs. Bing',
  }, {
    id: 12,
    title: 'The One with the Dozen Lasagnas',
  }, {
    id: 13,
    title: 'The One with the Boobies',
  }, {
    id: 14,
    title: 'The One with the Candy Hearts',
  }, {
    id: 15,
    title: 'The One with the Stoned Guy',
  }, {
    id: '16-17',
    title: 'The One with Two Parts',
  }, {
    id: 18,
    title: 'The One with All the Poker',
  }, {
    id: 19,
    title: 'The One Where the Monkey Gets Away',
  }, {
    id: 20,
    title: 'The One with the Evil Orthodontist',
  }, {
    id: 21,
    title: 'The One with the Fake Monica',
  }, {
    id: 22,
    title: 'The One with the Ick Factor',
  }, {
    id: 23,
    title: 'The One with the Birth',
  }, {
    id: 24,
    title: 'The One Where Rachel Finds Out',
  }],
}];

router.get('/', (req, res) => {
  res.send(seasons);
});

export default router;
