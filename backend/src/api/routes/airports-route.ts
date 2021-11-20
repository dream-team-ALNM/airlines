import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getAirports } from '../../services';

const router: Router = Router();

router.get(
  '/',
  run(() => getAirports()),
);

export default router;
