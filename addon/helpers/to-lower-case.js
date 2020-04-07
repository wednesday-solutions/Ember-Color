import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export function toLowerCase([param]) {
  if (isPresent(param)) {
    return param.toLowerCase();
  }
}

export default helper(toLowerCase);
