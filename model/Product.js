// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native';

const Product = t.struct({
  name: t.String,
  brand: t.String,
});

export const productFormOptions = {
  auto: 'none',
  legend: 'Artikel gegevens',
  fields: {
    name: {
      placeholder: 'Productnaam...'
    },
    brand: {
      placeholder: 'Merk van het product...'
    }
  }
}

export default Product;
