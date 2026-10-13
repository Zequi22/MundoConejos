const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`;

export const IMAGES = {
  rabbit: unsplash('1747184046952-8890127c598a'),
  breeds: unsplash('1589933767411-38a58367efd7'),
  habitat: unsplash('1767016627558-3f41c7432e2e'),
  eating: unsplash('1695827406639-befb948fb513'),
  care: unsplash('1585110396000-c9ffd4e4b308'),
};

export const HERO_IMAGES = {
  home: IMAGES.rabbit,
  breeds: IMAGES.breeds,
  nutrition: IMAGES.eating,
  care: IMAGES.habitat,
  health: IMAGES.rabbit,
  faq: IMAGES.rabbit,
};
