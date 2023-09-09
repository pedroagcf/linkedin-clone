import {
  Container,
  PostContent,
  ProfilePicture,
  UserCompany,
  UserInfo,
  UserMeta,
  UserName,
  UserRole,
} from "./style";

interface FeedProps {
  id: string;
  name: string;
  role: string;
  company: string;
  profilePictureUrl: string;
  postContent: string;
}

export function Feed({
  id,
  name,
  role,
  company,
  profilePictureUrl,
  postContent,
}: FeedProps) {
  return (
    <Container>
      <UserInfo>
        <ProfilePicture src={profilePictureUrl} alt="user profile" />
        <UserMeta>
          <UserName to={`/profile/${id}`}>{name}</UserName>
          <UserRole>{role}</UserRole>
          <UserCompany>{company}</UserCompany>
        </UserMeta>
      </UserInfo>
      <PostContent>{postContent}</PostContent>
    </Container>
  );
}
