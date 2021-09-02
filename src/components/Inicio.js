const Inicio = () => {
    function sayHello() {
        alert('You clicked me!');
      }

    return (
        <div>
            <h1><center>Juego Open Trivia</center></h1>
            <center>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Usuario:</label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                />
            </div>
            <br></br>
            <div>
                <select className="browser-default custom-select">
                <option>Categoría</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            <div>
                <select className="browser-default custom-select">
                <option>Dificultad</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            <button onClick={sayHello}>Default</button>
            </center>
        </div>
    );
};

export default Inicio;
