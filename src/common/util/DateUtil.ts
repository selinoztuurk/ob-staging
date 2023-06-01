import moment from 'moment';
import 'moment/dist/locale/tr';

import { EMPTY_DATA } from 'common/constants/generalConstants';

export default class DateUtil {
  static getRemainingTime(date: string): string {
    moment.locale('tr');
    return date ? moment(date).fromNow() : EMPTY_DATA;
  }

  static getFormattedDate(date: string): string {
    moment.locale('tr');
    return date ? moment(date).fromNow() : EMPTY_DATA; // TODO: Display date with format DD.MM.YYYY
  }
}
