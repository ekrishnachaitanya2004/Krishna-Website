export const SITE = {
  website: "https://khvlove.me", // Your deployed domain
  author: "Krishna Chaitanya Ethamukkala",
  profile: "https://ekrishnachaitanya2004.netlify.app/about/",
  desc: "Hey future me, Everything you did, everything you felt, it’s all written here...",
  title: "Time Machine",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // Show back button in post detail
  editPost: {
    url: "https://github.com/ekrishnachaitanya2004/Time-Machine/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;