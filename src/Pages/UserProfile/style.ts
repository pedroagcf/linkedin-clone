import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center; 
`
const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  width: 1128px;
`
const Title = styled.h1`
  font-size: 24px;
  color: black; 
  font-weight: bold;
  margin-bottom: 8px;
`
const TimeLine = styled.div`
  display: flex;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px; 
  border: 1px solid #ccc;
  border-radius: 8px; 
  background-color: #ffff;
`
const UserBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px; 
  border: 1px solid #ccc;
  border-radius: 8px; 
  background-color: #ffff;
`

const JobHistory = styled.div`
  border-bottom: solid 1px #ccc;
  padding: 10px;
`

const UserInfo = styled.div`
  display: flex;
  flex: 1;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

const UserName = styled.h3`
  margin-bottom: 4px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const UserMeta = styled.div`
  margin-left: 16px;
`;

const UserRole = styled.p`
  margin-bottom: 4px;
  font-size: 1rem;
  color: gray;
`;

const UserCompany = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #0073b1;
`
export {
  Container,
  Content, JobHistory, ProfilePicture, Row, TimeLine, Title, UserBackground, UserCompany, UserInfo, UserMeta, UserName, UserRole
};

