import { useState } from "react";
import data from "./../../resources/countryData.json";


function Textbox() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const search = (searchTerm) => {
    setValue(searchTerm);
  };

  const handleKey = (e)=>{
    if(e.key=="Escape"){
      console.log(e.key)
      document.getElementById("dropdown").style.display = "none";
    }
    else{
      document.getElementById("dropdown").style.display = "block";
    }
  }

  return (
    <div>
      <div>
        <div>
            <h3>Search</h3>
          <input type="text" value={value} onChange={onChange} onKeyDown={handleKey} />
          <button>Search</button>
        </div>
        <div id="dropdown" >
          {data.filter((item) => {
              const searchTerm = value.toLowerCase();
              const countryName = item.name.toLowerCase();

              return (
                searchTerm && countryName.startsWith(searchTerm) && countryName != searchTerm
              );
            })
            .slice(0,10)
            .map((item) => (
              <div onClick={() => search(item.name)} key={item.code}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Textbox;