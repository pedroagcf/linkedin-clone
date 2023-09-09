import { Feed } from "../../components/Feed";
import { mockFeeds } from "../../utils/constants";
import { Container, Content } from "./style";

export function HomePage() {
  return (
    <Container>
      <Content>
        {mockFeeds.map((user) => (
          <Feed
            key={user.id}
            id={user.id}
            name={user.name}
            role={user.role}
            company={user.company}
            profilePictureUrl={user.profilePicture}
            postContent={user.postContent}
          />
        ))}
      </Content>
    </Container>
  );
}
