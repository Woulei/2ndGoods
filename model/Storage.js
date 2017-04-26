// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native';

const Storage = t.struct({
  storage: t.Boolean,
});

var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.formGroup.normal.flexDirection = 'row';
stylesheet.formGroup.error.flexDirection = 'row';

export const formOptions = {
  auto: 'none',
  stylesheet: stylesheet,
  fields: {
    storage: {
      label: "Opslag verzorgd door 2ndGoods"
    }
  }
}

export default Storage;
