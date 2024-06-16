import Avatar from "../../common/Avatar/Avatar";
import PageLayout from "../../common/PageLayout/PageLayout";
import Bulbasaur from "../../assets/bulbasaur.png";

export default function UserProfile() {
  return (
    <PageLayout heading="Bulbasaur's profile">
      <Avatar src={Bulbasaur} name="Hi, Bulbasaur!" alt="Bulbasaur pokemon" />
    </PageLayout>
  );
}
