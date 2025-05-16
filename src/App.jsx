//import RSVPForm from "./components/RSVPForm";
//import CountdownTimer from "./components/CountdownTimer";
//import Guestbook from "./components/Guestbook";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="font-sans">
      <header className="text-center p-6 bg-pink-100">
        <h1 className="text-4xl font-bold text-pink-700">Retto & Rossyy</h1>
        <p className="text-lg mt-2">You're invited to our wedding celebration!</p>
      </header>
      <CountdownTimer />
      <RSVPForm />
      <Guestbook />
      <MusicPlayer />
    </div>
  );
}

export default App;
