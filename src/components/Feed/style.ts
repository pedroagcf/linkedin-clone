import { Link } from 'react-router-dom';
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px; 
  border: 1px solid #ccc;
  border-radius: 8px; 
  background-color: #ffff;
`

const UserInfo = styled.div`
  display: flex;
  flex: 1;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const UserName = styled(Link)`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const UserMeta = styled.div`
  margin-left: 16px;
`;

const UserRole = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const UserCompany = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #0073b1; /* LinkedIn's primary color */
`;

const PostContent = styled.div`
  margin-top: 10px;
`;
export { Container, PostContent, ProfilePicture, UserCompany, UserInfo, UserMeta, UserName, UserRole };

