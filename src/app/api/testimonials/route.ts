export interface Testimonial {
  id: number;
  message: string;
  name: string;
  age: number;
  course: string;
  facebookProfile: string;
  linkedinProfile: string;
  instagramProfile: string;
  photoUrl: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    message: "LOREM IPSUM LOREM IPSUM",
    name: "Sarah Johnson",
    age: 24,
    course: "Master of Business Administration",
    facebookProfile: "https://facebook.com/sarah.johnson",
    linkedinProfile: "https://linkedin.com/in/sarah-johnson-mba",
    instagramProfile: "https://instagram.com/sarah_johnson_biz",
    photoUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    message: "LOREM IPSUM LOREM IPSUM",
    name: "Marcus Chen",
    age: 22,
    course: "Bachelor of Computer Science",
    facebookProfile: "https://facebook.com/marcus.chen.dev",
    linkedinProfile: "https://linkedin.com/in/marcus-chen-developer",
    instagramProfile: "https://instagram.com/marcus_codes",
    photoUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    message: "LOREM IPSUM LOREM IPSUM",
    name: "Priya Patel",
    age: 26,
    course: "Master of International Relations",
    facebookProfile: "https://facebook.com/priya.patel.ir",
    linkedinProfile: "https://linkedin.com/in/priya-patel-international",
    instagramProfile: "https://instagram.com/priya_global",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    message: "LOREM IPSUM LOREM IPSUM",
    name: "James Williams",
    age: 23,
    course: "Bachelor of Mechanical Engineering",
    facebookProfile: "https://facebook.com/james.williams.engineer",
    linkedinProfile: "https://linkedin.com/in/james-williams-mechanical-eng",
    instagramProfile: "https://instagram.com/james_builds",
    photoUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    message: "LOREM IPSUM LOREM IPSUM",
    name: "Emma Rodriguez",
    age: 25,
    course: "Master of Clinical Psychology",
    facebookProfile: "https://facebook.com/emma.rodriguez.psych",
    linkedinProfile: "https://linkedin.com/in/emma-rodriguez-psychology",
    instagramProfile: "https://instagram.com/emma_mindmatters",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

export async function GET() {
  return Response.json(mockTestimonials);
}
