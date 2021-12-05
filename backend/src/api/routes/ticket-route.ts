import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getOccupiedPlaces, buyTicket } from '../../services';

const router: Router = Router();

router.get(
  '/places',
  run(() => getOccupiedPlaces()),
);

router.post(
  '/',
  run((req) => buyTicket(req.body)),
);
export default router;
