import NavBar from "./NavBar";
import Header from "./Header";
import Explanation from "./Explanation"
import ApiData from './ApiData';
import GetExercise from './GetExercise';
import AddExercise from './AddExercise';
import FormDropdown from './FormDropdown';
import Footer from "./Footer";

const MainContent = ({quote}) => {
    return(
        <>
          <NavBar />
          <Header />
        <main>
          <section>
            <div className="wrapper descriptionSection">
              <Explanation />
              <ApiData quote={quote}/>
            </div>
          </section>
          <FormDropdown />
          <AddExercise />
          <GetExercise />
        </main>
        <Footer />
        </>
        
    );
}

export default MainContent;