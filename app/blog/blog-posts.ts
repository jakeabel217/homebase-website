export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-coworking-spaces-baltimore-2026",
    title: "Top 10 Coworking Spaces in Baltimore (2026 Guide)",
    excerpt:
      "Looking for the best coworking space in Baltimore? Our comprehensive 2026 guide compares the top 10 coworking spaces in Charm City with pricing, amenities, and locations.",
    date: "2026-01-15",
    author: "HomeBase Baltimore",
    image: "/og-image.png",
    description:
      "Discover the best coworking spaces in Baltimore. Compare pricing, amenities, and locations to find your perfect workspace.",
  },
  {
    slug: "coworking-vs-traditional-office",
    title: "Coworking vs Traditional Office: Which is Right for Your Baltimore Business?",
    excerpt:
      "Choosing between coworking and traditional office space? Our comprehensive guide compares costs, flexibility, and amenities to help Baltimore businesses make the right decision.",
    date: "2026-01-20",
    author: "HomeBase Baltimore",
    image: "/og-image.png",
    description:
      "A comprehensive decision framework comparing coworking spaces and traditional offices for Baltimore businesses.",
  },
  {
    slug: "day-in-life-homebase-baltimore",
    title: "A Day in the Life: Working from HomeBase Baltimore",
    excerpt:
      "Experience a typical day at HomeBase Baltimore through a member's eyes. Discover the amenities, community, and workspace that makes HomeBase Baltimore's premier coworking space.",
    date: "2026-01-25",
    author: "Sarah Mitchell, Marketing Consultant & HomeBase Member",
    image: "/og-image.png",
    description:
      "Go behind the scenes with a HomeBase member for an authentic look at a day in Baltimore's premier coworking space.",
  },
];
