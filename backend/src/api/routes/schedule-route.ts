import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getTime } from '../../services';

const router: Router = Router();

router.get(
  '/time',
  run((req) => getTime(req.query.from, req.query.to, req.query.startDate)),
);

export default router;
