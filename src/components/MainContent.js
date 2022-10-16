import NavBar from "./NavBar";
import Header from "./Header";
import Explanation from "./Explanation"
import ApiData from './ApiData';
// import GetExercise from './GetExercise';
import AddExercise from './AddExercise';
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

          <section>
            <div className="wrapper exerciseContainer">
              <div>
                <AddExercise />
              </div>
              <div className="workoutCard">
                <ul>
                  {/* <GetExercise /> */}
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        </>
        
    );
}

export default MainContent;