import { Router } from 'express';
import { run } from '../../common/helpers/route.helper';
import { getOccupiedPlaces } from '../../services';

const router: Router = Router();

router.get(
  '/places',
  run(() => getOccupiedPlaces()),
);

export default router;
