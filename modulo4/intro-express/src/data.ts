export type User = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

export const users: User[] = [
  {
    id: 666,
    name: "Myllena",
    phone: 61998699509,
    email: "myllenamiranda1411@gmail.com",
    website: "NãoEnchaMeuSaco.com.br",
  },
  {
    id: 111,
    name: "Timothee Chalamet",
    phone: 4545121,
    email: "timothinho@gmail.com",
    website: "timothee.com.br",
  },
  {
    id: 333,
    name: "Post Malone",
    phone: 6465454,
    email: "postinho@gmail.com",
    website: "postinho.com.br",
  },
  {
    id: 444,
    name: "Finn Wolfhard",
    phone: 454512145,
    email: "finn@gmail.com",
    website: "finn.com.br",
  },
];

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const posts: Post[] = [
  {
    id: 123,
    title: "falta de dinheiro",
    body: "Não ter dinheiro é muito ruim",
    userId: 666,
  },
  {
    userId: 111,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 333,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 444,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];
