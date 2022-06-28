export interface Product {
  id: number;
  thumbnail: string;
  titulo: string;
  precio: number;
  peso: number;
  formato: string;
}

export const products = [
  {
    id: 1,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/0214398df72517cf903b166e92e11bca.jpg?fit=crop&h=300&w=300',
    titulo: 'Azúcar, caramelos y chocolate',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
  {
    id: 2,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/aa3a4cd534eeeb52ad2ddd8fea969c8f.jpg?fit=crop&h=300&w=300',
    titulo: 'Azúcar y chocolate',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
  {
    id: 3,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/c402c82c0caf8ff549ec508651892379.jpg?fit=crop&h=300&w=300',
    titulo: 'Azúcar, caramelos y chocolate',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
  {
    id: 4,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/a31ae512911f27da1b4242d03a39896f.jpg?fit=crop&h=300&w=300',
    titulo: 'Azúcar',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
  {
    id: 5,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/1ba54a16b6d6053ac38c4d5a1cef430e.jpg?fit=crop&h=300&w=300',
    titulo: 'caramelos',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
  {
    id: 6,
    thumbnail:
      'https://prod-mercadona.imgix.net/images/0a756c531b9150f8cf53ae207177a9df.jpg?fit=crop&h=300&w=300',
    titulo: 'Azúcar, caramelos',
    precio: 0.75,
    peso: 1,
    formato: 'Kg',
  },
];
