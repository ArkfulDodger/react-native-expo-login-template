import AuthButton from "../atoms/AuthButton";

const FacebookAuthButton = ({ text }) => {
  return (
    <AuthButton
      onPress={() => console.log("log in with Facebook")}
      icon="facebook"
    >
      {text && text}
    </AuthButton>
  );
};

export default FacebookAuthButton;
