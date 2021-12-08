import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getTime, getEnd } from '../../services';

const router: Router = Router();

router.get(
  '/time',
  run((req) => getTime(req.query.from, req.query.to, req.query.startDate)),
);

router.get(
  '/end',
  run((req) => getEnd(req.query.id)),
);
export default router;
