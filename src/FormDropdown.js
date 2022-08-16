const FormDropdown = () => {
    return(
        <section>
            <div className="wrapper">
                <h2 className="exerciseTitle">Choose Your Exercise</h2>
                <form className="exerciseFormDropdown">
                    <div className="formFlexChild1">
                        <label className="exerciseLabel">Upper Body</label>
                        <select>
                            <option>Bench Press</option>
                            <option>Barbell Row</option>
                        </select>
                    </div>

                    <div className="formFlexChild2">
                        <label className="exerciseLabel">Lower Body</label>
                        <select>
                            <option>Squat</option>
                            <option>forward lunge</option>
                        </select>
                    </div>

                    <div className="formFlexChild3">
                        <label className="exerciseLabel">Core</label>
                        <select>
                            <option>crunches</option>
                            <option>plank</option>
                        </select>
                    </div>

                    <div className="formFlexChild4">
                        <label className="exerciseLabel">Conditioning</label>
                        <select>
                            <option>sprints</option>
                            <option>jog</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    )
}    


export default FormDropdown