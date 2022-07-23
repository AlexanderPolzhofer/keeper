import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";

function App() {
  return (
    <div>
      <Header
        name='Keeper'
      />
      <Note
        title='Note title'
        content='This is a text.'
      />
      <Footer />
    </div>
  );
}

export default App;
