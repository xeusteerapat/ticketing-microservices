import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send({
    status: 'user signout',
  });
});

export { router as signoutRouter };
