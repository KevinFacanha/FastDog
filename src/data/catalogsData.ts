
export interface Catalog {
  id: string;
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
}

export const catalogsData: Catalog[] = [
  {
    id: 'luv-alecrim',
    title: 'Catálogo Produtos Luv e Alecrim',
    description: 'Petiscos naturais, sem conservantes e com ingredientes selecionados especialmente para cães de todos os portes.',
    image: 'https://images.pexels.com/photos/8434683/pexels-photo-8434683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pdfUrl: '/catalogs/catalogo-produtos-luv-e-alecrim.pdf'
  },
  {
    id: 'goodloving',
    title: 'Catálogo Produtos GoodLoving',
    description: 'Linha premium de biscoitos e petiscos para cães, com sabores exclusivos e formulações que promovem a saúde bucal.',
    image: 'https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pdfUrl: '/catalogs/catalogo-produtos-goodloving.pdf'
  },
  {
    id: 'natuka',
    title: 'Catálogo Produtos Natuka',
    description: 'Petiscos funcionais desenvolvidos com fórmulas exclusivas para proporcionar benefícios nutricionais ao seu pet.',
    image: 'https://images.pexels.com/photos/7210355/pexels-photo-7210355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pdfUrl: '/catalogs/catalogo-produtos-natuka.pdf'
  }
];