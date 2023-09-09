import linkedinLogo from "../../assets/linkedin.svg";
import { Header } from "./style";

export function HeaderComponent() {
  return (
    <Header>
      <img src={linkedinLogo} alt="linkedin brand" />
    </Header>
  );
}
