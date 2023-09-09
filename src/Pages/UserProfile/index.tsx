import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockFeeds } from "../../utils/constants";
import { Feed } from "../../utils/types";
import {
  Container,
  Content,
  JobHistory,
  ProfilePicture,
  Row,
  TimeLine,
  Title,
  UserBackground,
  UserCompany,
  UserInfo,
  UserMeta,
  UserName,
  UserRole,
} from "./style";

export function UserProfilePage() {
  const [user, setUser] = useState<Partial<Feed> | undefined>({});
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const data = mockFeeds.find((el) => el.id === id);
    setUser(data);
  }, []);

  return (
    <Container>
      <Content>
        <Row>
          <UserInfo>
            <ProfilePicture src={user?.profilePicture} alt="user profile" />
            <UserMeta>
              <UserName>{user?.name}</UserName>
              <UserRole>{user?.role}</UserRole>
              <UserCompany>{user?.company}</UserCompany>
            </UserMeta>
          </UserInfo>
        </Row>
        <UserBackground>
          <Title>Background</Title>
          {user?.historyJobs
            ?.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .map((job) => (
              <JobHistory>
                <UserCompany>{job.companyName}</UserCompany>
                <UserRole>{job.role}</UserRole>
                <h1>{job.description}</h1>
                <TimeLine>
                  <h1>
                    {new Intl.DateTimeFormat("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }).format(job?.startDate)}
                  </h1>
                  <p> - </p>
                  <h1>
                    {new Intl.DateTimeFormat("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }).format(job?.endDate)}
                  </h1>
                </TimeLine>
              </JobHistory>
            ))}
        </UserBackground>
      </Content>
    </Container>
  );
}
