function Form() {
  return (
    <div className="App">
      <label htmlFor="url">Qwiklabs Profile URL</label>
      <input type="text" name="url" id="url" />
      <button onClick={findStatus} type="submit">
        Find
      </button>
    </div>
  );
}

function findStatus(){
  const url = document.getElementById("url").value;
  
}

export default Form;
