import { importAirports } from '@/lib/importAirports';
import { AIRPORTS } from '@/data/airports';

importAirports(AIRPORTS).then(() => {
  console.log('All airports imported!');
});
