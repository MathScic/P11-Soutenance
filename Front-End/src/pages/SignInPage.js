import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";

export default function SignInPage() {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </>
  );
}
