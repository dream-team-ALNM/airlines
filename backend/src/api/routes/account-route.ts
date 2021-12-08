import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getRoutes, getTicketInfo } from '../../services';

const router: Router = Router();

router.get(
  '/routes',
  run((req) => getRoutes(req.query.id)),
);

router.get(
  '/ticket',
  run((req) => getTicketInfo(req.query.id)),
);

export default router;
