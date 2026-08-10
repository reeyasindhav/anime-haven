export type Anime = {
  id: string;
  title: string;
  genres: string[];
  score: number;
  year: number;
  status: "Airing" | "Completed" | "Upcoming";
  episodes: number;
  studio: string;
  synopsis: string;
  poster: string;
  banner: string;
  members: string;
  mood: string;
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const ANIME: Anime[] = [
  {
    id: "neon-ronin",
    title: "Neon Ronin",
    genres: ["Action", "Sci-Fi"],
    score: 9.4,
    year: 2025,
    status: "Airing",
    episodes: 12,
    studio: "Studio Kaji",
    synopsis:
      "A masterless swordsman wakes in a rain-slick megacity where memory is currency. Hunting the syndicate that erased his past, he learns that every blade he draws rewrites someone else's history.",
    poster: img("photo-1526374965328-7f61d4dc18c5"),
    banner: img("photo-1526374965328-7f61d4dc18c5", 1600),
    members: "412K",
    mood: "Kinetic",
  },
  {
    id: "moonlit-atelier",
    title: "Moonlit Atelier",
    genres: ["Fantasy", "Slice of Life"],
    score: 9.1,
    year: 2025,
    status: "Airing",
    episodes: 24,
    studio: "Hoshi Works",
    synopsis:
      "In a harbour town that only exists after midnight, a young restorer repairs objects people have grieved over. Each repair returns a memory that the owner had bargained away.",
    poster: img("photo-1470813740244-df37b8c1edcb"),
    banner: img("photo-1470813740244-df37b8c1edcb", 1600),
    members: "298K",
    mood: "Tender",
  },
  {
    id: "garden-of-echoes",
    title: "Garden of Echoes",
    genres: ["Fantasy", "Drama"],
    score: 8.9,
    year: 2024,
    status: "Completed",
    episodes: 13,
    studio: "Aoi Line",
    synopsis:
      "Twin sisters inherit a lake that repeats the last words spoken on its shore. When one of them stops echoing, the village realises the water has started choosing what to keep.",
    poster: img("photo-1506744038136-46273834b3fb"),
    banner: img("photo-1506744038136-46273834b3fb", 1600),
    members: "221K",
    mood: "Wistful",
  },
  {
    id: "starfall-academy",
    title: "Starfall Academy",
    genres: ["Romance", "Drama"],
    score: 8.8,
    year: 2025,
    status: "Airing",
    episodes: 22,
    studio: "Petal Studio",
    synopsis:
      "At a cliffside school where students are graded on the light they emit, two rivals discover that the brightest records belong to those who burn out first.",
    poster: img("photo-1470071459604-3b5ec3a7fe05"),
    banner: img("photo-1470071459604-3b5ec3a7fe05", 1600),
    members: "186K",
    mood: "Warm",
  },
  {
    id: "paper-tigers",
    title: "Paper Tigers",
    genres: ["Comedy", "Action"],
    score: 8.7,
    year: 2025,
    status: "Airing",
    episodes: 12,
    studio: "Studio Kaji",
    synopsis:
      "A crumbling castle rents itself out to fake heroes. The trouble starts when a genuinely terrifying threat books a room and asks for the full tour.",
    poster: img("photo-1467269204594-9661b134dd2b"),
    banner: img("photo-1467269204594-9661b134dd2b", 1600),
    members: "174K",
    mood: "Playful",
  },
  {
    id: "afterimage",
    title: "Afterimage",
    genres: ["Mystery", "Thriller"],
    score: 8.5,
    year: 2025,
    status: "Airing",
    episodes: 11,
    studio: "Nightline",
    synopsis:
      "A detective who can photograph the last ten seconds of any death starts finding herself in the frame — always standing just behind the victim, always smiling.",
    poster: img("photo-1493976040374-85c8e12f0c0e"),
    banner: img("photo-1493976040374-85c8e12f0c0e", 1600),
    members: "163K",
    mood: "Tense",
  },
  {
    id: "tidebound",
    title: "Tidebound",
    genres: ["Adventure", "Fantasy"],
    score: 8.4,
    year: 2024,
    status: "Completed",
    episodes: 25,
    studio: "Hoshi Works",
    synopsis:
      "A crew of cartographers maps an ocean that redraws itself every full moon, chasing an island that appears only to those willing to forget the way home.",
    poster: img("photo-1500375592092-40eb2168fd21"),
    banner: img("photo-1500375592092-40eb2168fd21", 1600),
    members: "142K",
    mood: "Sweeping",
  },
  {
    id: "ashfall-choir",
    title: "Ashfall Choir",
    genres: ["Drama", "Supernatural"],
    score: 8.3,
    year: 2025,
    status: "Upcoming",
    episodes: 12,
    studio: "Aoi Line",
    synopsis:
      "Every winter a village sings to keep the mountain asleep. This year the choir is one voice short, and the replacement can hear what the mountain is dreaming.",
    poster: img("photo-1499346030926-9a72daac6c63"),
    banner: img("photo-1499346030926-9a72daac6c63", 1600),
    members: "118K",
    mood: "Haunting",
  },
  {
    id: "hollow-summer",
    title: "Hollow Summer",
    genres: ["Slice of Life", "Mystery"],
    score: 8.2,
    year: 2024,
    status: "Completed",
    episodes: 12,
    studio: "Petal Studio",
    synopsis:
      "Three friends spend the last August of childhood documenting a town that keeps losing one building a day, and no one else seems to notice the gaps.",
    poster: img("photo-1441974231531-c6227db76b6e"),
    banner: img("photo-1441974231531-c6227db76b6e", 1600),
    members: "96K",
    mood: "Nostalgic",
  },
  {
    id: "iron-lullaby",
    title: "Iron Lullaby",
    genres: ["Action", "Drama"],
    score: 8.1,
    year: 2025,
    status: "Airing",
    episodes: 16,
    studio: "Nightline",
    synopsis:
      "A decommissioned war automaton becomes a night-shift nurse in a border hospital, and slowly relearns the difference between stopping a heart and steadying one.",
    poster: img("photo-1439337153520-7082a56a81f4"),
    banner: img("photo-1439337153520-7082a56a81f4", 1600),
    members: "88K",
    mood: "Solemn",
  },
  {
    id: "cerulean-signal",
    title: "Cerulean Signal",
    genres: ["Sci-Fi", "Mystery"],
    score: 8.0,
    year: 2024,
    status: "Completed",
    episodes: 10,
    studio: "Studio Kaji",
    synopsis:
      "A radio operator on a frozen research base picks up a broadcast from the same base, dated forty years later, warning her not to answer.",
    poster: img("photo-1458668383970-8ddd3927deed"),
    banner: img("photo-1458668383970-8ddd3927deed", 1600),
    members: "74K",
    mood: "Cold",
  },
  {
    id: "sakura-static",
    title: "Sakura Static",
    genres: ["Romance", "Comedy"],
    score: 7.9,
    year: 2025,
    status: "Upcoming",
    episodes: 12,
    studio: "Petal Studio",
    synopsis:
      "Two rival campus radio hosts fall for each other's on-air personas without realising they share a dorm wall — and a very thin one at that.",
    poster: img("photo-1522383225653-ed111181a951"),
    banner: img("photo-1522383225653-ed111181a951", 1600),
    members: "69K",
    mood: "Bubbly",
  },
];

export const GENRES = [
  "All shows",
  "Action",
  "Fantasy",
  "Romance",
  "Drama",
  "Comedy",
  "Mystery",
  "Sci-Fi",
];

export const byId = (id: string) => ANIME.find((a) => a.id === id);

export type ScheduleItem = {
  day: string;
  date: number;
  time: string;
  animeId: string;
  episode: number;
};

export const SCHEDULE: ScheduleItem[] = [
  { day: "MON", date: 14, time: "18:30", animeId: "paper-tigers", episode: 7 },
  { day: "TUE", date: 15, time: "20:00", animeId: "starfall-academy", episode: 9 },
  { day: "WED", date: 16, time: "22:15", animeId: "moonlit-atelier", episode: 18 },
  { day: "THU", date: 17, time: "19:00", animeId: "afterimage", episode: 4 },
  { day: "FRI", date: 18, time: "23:30", animeId: "neon-ronin", episode: 11 },
  { day: "SAT", date: 19, time: "17:45", animeId: "iron-lullaby", episode: 6 },
  { day: "SUN", date: 20, time: "21:00", animeId: "tidebound", episode: 12 },
];

export const CONTINUE_WATCHING = [
  { animeId: "neon-ronin", episode: 8, total: 12, progress: 68 },
  { animeId: "moonlit-atelier", episode: 10, total: 24, progress: 42 },
  { animeId: "afterimage", episode: 3, total: 11, progress: 21 },
];

export const HISTORY = [
  { animeId: "neon-ronin", episode: 8, watchedAt: "Today · 21:14", minutes: 24 },
  { animeId: "moonlit-atelier", episode: 10, watchedAt: "Today · 18:02", minutes: 23 },
  { animeId: "afterimage", episode: 3, watchedAt: "Yesterday · 23:40", minutes: 24 },
  { animeId: "paper-tigers", episode: 6, watchedAt: "Yesterday · 20:11", minutes: 22 },
  { animeId: "garden-of-echoes", episode: 13, watchedAt: "Apr 12 · 19:30", minutes: 25 },
  { animeId: "starfall-academy", episode: 8, watchedAt: "Apr 11 · 22:05", minutes: 24 },
  { animeId: "tidebound", episode: 25, watchedAt: "Apr 10 · 20:48", minutes: 24 },
];
