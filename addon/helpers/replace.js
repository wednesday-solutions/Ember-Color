import { helper } from '@ember/component/helper';

export function replace(params) {
  return params[0].replace(params[1], params[2]);
}

export default helper(replace);
