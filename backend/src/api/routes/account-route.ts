import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getRoutes } from '../../services';

const router: Router = Router();

router.get(
  '/',
  run((req) => getRoutes(req.query.id)),
);

export default router;
