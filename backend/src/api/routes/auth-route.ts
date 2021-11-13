import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { login, register } from '../../services';

const router: Router = Router();

router.post(
  '/login',
  run((req) => login(req.body)),
);

router.post(
  '/signup',
  run((req) => register(req.body)),
);

export default router;
