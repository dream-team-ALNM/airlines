import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getPrices } from '../../services';

const router: Router = Router();

router.get(
  '/prices/:id',
  run((req) => getPrices(req.params.id)),
);

export default router;
