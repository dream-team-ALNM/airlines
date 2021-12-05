import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getOccupiedPlaces, buyTicket } from '../../services';

const router: Router = Router();

router.get(
  '/places/:id',
  run((req) => getOccupiedPlaces(req.params.id)),
);

router.post(
  '/',
  run((req) => buyTicket(req.body)),
);
export default router;
