import {
    House,
    Film,
    MonitorCheck,
    User,
    History,
    ListVideo,
    Video,
    BookOpen,
    Clock,
    ThumbsUp,
    Download,
    ShoppingBag,
    Music,
    Clapperboard,
    Radio,
    Gamepad2,
    Newspaper,
    Trophy,
    GraduationCap,
    Shirt,
    Mic2
} from "lucide-react";

export const NAVBARITEMS = [
    {
        name: null,
        items: [
            { name: "Home", link: "/", icon: <House /> },
            { name: "Shorts", link: "/shorts", icon: <Film /> },
            { name: "Subscriptions", link: "/subscriptions", icon: <MonitorCheck /> }
        ],
    },
    {
        name: 'You',
        items: [
            { name: "History", link: "/history", icon: <History /> },
            { name: "Playlists", link: "/playlists", icon: <ListVideo /> },
            { name: "Your videos", link: "/your-videos", icon: <Video /> },
            { name: "Your courses", link: "/your-courses", icon: <BookOpen /> },
            { name: "Watch Later", link: "/watch-later", icon: <Clock /> },
            { name: "Liked videos", link: "/liked", icon: <ThumbsUp /> },
            { name: "Downloads", link: "/downloads", icon: <Download /> },
        ],
    },
    {
        name: "subscriptions",
        items: [
            { name: "CodeWithHarry", link: "/channel/codewithharry", icon: <MonitorCheck /> },
            { name: "Akshay Saini", link: "/channel/akshaysaini", icon: <MonitorCheck /> },
            { name: "Chai aur Code", link: "/channel/chaiaurcode", icon: <MonitorCheck /> },
            { name: "JavaScript Mastery", link: "/channel/javascript-mastery", icon: <MonitorCheck /> },
            { name: "Ashish Bharatvanshi", link: "/channel/ashish-bharatvanshi", icon: <MonitorCheck /> },
            { name: "All India Bakchod", link: "/channel/aib", icon: <MonitorCheck /> },
            { name: "Kevin Powell", link: "/channel/kevin-powell", icon: <MonitorCheck /> },
            { name: "Show more", link: "/subscriptions/more", icon: <MonitorCheck /> },
        ],
    },
    {
        name: "explore",
        items: [
            { name: "Shopping", link: "/explore/shopping", icon: <ShoppingBag /> },
            { name: "Music", link: "/explore/music", icon: <Music /> },
            { name: "Films", link: "/explore/films", icon: <Clapperboard /> },
            { name: "Live", link: "/explore/live", icon: <Radio /> },
            { name: "Gaming", link: "/explore/gaming", icon: <Gamepad2 /> },
            { name: "News", link: "/explore/news", icon: <Newspaper /> },
            { name: "Sport", link: "/explore/sport", icon: <Trophy /> },
            { name: "Courses", link: "/explore/courses", icon: <GraduationCap /> },
            { name: "Fashion & beauty", link: "/explore/fashion-beauty", icon: <Shirt /> },
            { name: "Podcasts", link: "/explore/podcasts", icon: <Mic2 /> },
        ],
    },
];

export const YOUTUBE_MOSTPOPULAR_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=`;

export const YOUTUBE_FILTERS = [
    "All",
    "Music",
    "Mixes",
    "Jukebox",
    "T-Series",
    "Playlists",
    "Arijit Singh",
    "Yo Yo Honey Singh",
    "Movie musicals",
    "Indian pop music",
    "Gaming",
    "Adele",
    "Live",
    "Chants",
    "Middle Eastern Music",
    "Kishore Kumar",
    "Free Fire MAX x NARUTO",
    "Folk Music",
    "Recently uploaded",
    "Watched",
    "New to you"
];