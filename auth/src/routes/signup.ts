import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  res.send({
    route: 'user signup',
  });
});

export { router as signupRouter };
