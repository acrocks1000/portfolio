import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Abhinav",
    jobTitle: "Software Engineer",
    cvLink: "https://example.com/abhinav-cv.pdf", // Replace with your actual CV link
    email: "abhinav@example.com",
    location: "India",
    bio: "Passionate developer with experience in web technologies, UI/UX, and cloud solutions.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "CSS", "Cloud"],
    social: {
      linkedin: "https://linkedin.com/in/abhinav",
      github: "https://github.com/acrocks1000"
    }
  });
}
