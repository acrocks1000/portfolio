export interface IUser {
    name: string,
    jobTitle: string,
    cvLink: string,
    email: string,
    location: string,
    bio: string,
    skills: string[],
    social: {
      linkedin: string,
      github: string
  }
}