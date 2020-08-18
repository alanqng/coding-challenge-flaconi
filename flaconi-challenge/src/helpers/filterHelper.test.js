import { filterHelper } from './filterHelpers';

const mockData = [
  {
    id: '30150001',
    name: 'Lancôme La vie est belle Eau de Parfum',
    slug:
      'parfum/lancome/la-vie-est-belle/lancome-la-vie-est-belle-eau-de-parfum.html',
    brand: 'Lancôme',
    type: 'Eau de Parfum',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-la-vie-est-belle-eau-de-parfum-30-ml.jpg',
    price: 3895,
    size: '30ML',
    rating: 99
  },

  {
    id: '30103318',
    name: 'Jean Paul Gaultier Le Male Eau de Toilette',
    slug:
      'parfum/jean-paul-gaultier/le-male/jean-paul-gaultier-le-male-eau-de-toilette.html',
    brand: 'Jean Paul Gaultier',
    type: 'Eau de Toilette',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-le-male-eau-de-toilette-125-ml-3423470317534.jpg',
    price: 3395,
    size: '40ML',
    rating: 99
  },

  {
    id: '80020578-C',
    name: 'Jean Paul Gaultier Scandal Eau de Parfum',
    slug:
      'parfum/jean-paul-gaultier/scandal/jean-paul-gaultier-scandal-eau-de-parfum.html',
    brand: 'Jean Paul Gaultier',
    type: 'Eau de Parfum',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-scandal-eau-de-parfum-80-ml-8435415006408.jpg',
    price: 3895,
    size: '30ML',
    rating: 96
  },

  {
    id: '30103519',
    name: 'Paco Rabanne 1 Million Eau de Toilette',
    slug:
      'parfum/paco-rabanne/1-million/paco-rabanne-1-million-eau-de-toilette.html',
    brand: 'Paco Rabanne',
    type: 'Eau de Toilette',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-one-million-eau-de-toilette-100-ml-3349666007921.jpg',
    price: 4295,
    size: '50ML',
    rating: 99
  }
];

test('Filter functionality filtering just Paco Rabane', () => {
  expect(
    filterHelper(mockData, [{ name: 'Paco Rabanne', type: 'brand' }])
  ).toEqual([
    {
      id: '30103519',
      name: 'Paco Rabanne 1 Million Eau de Toilette',
      slug:
        'parfum/paco-rabanne/1-million/paco-rabanne-1-million-eau-de-toilette.html',
      brand: 'Paco Rabanne',
      type: 'Eau de Toilette',
      image:
        'https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-one-million-eau-de-toilette-100-ml-3349666007921.jpg',
      price: 4295,
      size: '50ML',
      rating: 99
    }
  ]);
});
