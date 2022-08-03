import AuthButton from "../atoms/AuthButton";

const FacebookAuthButton = (props) => {
  return (
    <AuthButton
      onPress={() => console.log("log in with Facebook")}
      icon="facebook"
    >
      log in
    </AuthButton>
  );
};

export default FacebookAuthButton;
