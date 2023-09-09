
export interface Feed {
  id: string;
  profilePicture: string;
  name: string;
  role: string;
  company: string;
  postContent: string;
  historyJobs: {
    role: string;
    companyName: string;
    description: string;
    startDate: Date;
    endDate: Date;
  }[];
}


