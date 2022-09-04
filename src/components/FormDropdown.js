const FormDropdown = () => {
    return(
        <section>
            <div className="wrapper">
                <h2 className="exerciseTitle">Choose Your Exercise</h2>
                <form className="exerciseFormDropdown" action="">
                    <div className="formFlexChild1">
                        <label className="exerciseLabel" htmlFor="upperBody">Upper Body</label>
                        <select name="upperBody" id="upperbody">
                            <option value="chest">Bench Press</option>
                            <option value="back">Dumbell Rows</option>
                            <option value="shoulder">Dumbell Seated Press</option>
                            <option value="lats">Lat Pulldowns</option>
                        </select>
                    </div>

                    <div className="formFlexChild2">
                        <label className="exerciseLabel" htmlFor="lowerBody">Lower Body</label>
                        <select name="lowerBody" id="lowerBody">
                            <option value="glutes">Barbell Back Squat</option>
                            <option value="quads">Dumbell Forward lunge</option>
                            <option value="hamstring">Barbell Deadlifts</option>
                            <option value="calves">Standing Calf Raise</option>
                        </select>
                    </div>

                    <div className="formFlexChild3">
                        <label className="exerciseLabel" htmlFor="core">Core</label>
                        <select name="core" id="core">
                            <option value="lowerAbs">Crunches</option>
                            <option value="upper Abs">V-Ups</option>
                            <option value="obliques">Side Plank</option>
                            <option value="fullAbs">Full Body Plank</option>
                        </select>
                    </div>

                    <div className="formFlexChild4">
                        <label className="exerciseLabel" htmlFor="conditioning">Conditioning</label>
                        <select name="conditioning" id="conditioning">
                            <option value="mediumTempo">Biking</option>
                            <option value="lowTempo">Jogging</option>
                            <option value="highTempo">20 meter Sprints</option>
                            <option value="moderateTempo">2:1min Interval Sprint:Jog</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    )
}    


export default FormDropdown