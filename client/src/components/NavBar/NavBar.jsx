// import React from "react";
// import { Link } from "react-router-dom";
// import { SearchBar } from "../SearchBar/SearchBar";



// export default function NavBar() {
//     const home = "/home"
//     const create = "/create"
//     const about = "/about"
//     return(
        
//         <div>
            
//             {"/create" ? <Link to="/home"><button>Home</button></Link> : <button>putos</button>}
//             {"/create" ? <Link to="/about"><button>About</button></Link> : null} 
//             {about ? <Link to="/home"><button>Home</button></Link> : null}
//             {about ? <Link to="/create"><button>Create</button></Link> : null}
//             {home ? <Link to="/create"><button>Create Pokemon</button></Link> :null}
//             {home ? <Link to="/about"><button>About</button></Link> : null}

//             <Link to="/home"><button>Home</button></Link> 
//             <Link to="/create"><button>Create Pokemon</button></Link>
//             <Link to="/about"><button>About</button></Link>
//         </div>
//     )
        
    
// let allPokes = [...state.pokePermanent];
//       let asf = allPokes.filter((ele) => ele.createdInDb)
//       let fff = asf.filter((t) => t.types[0].name === payload ||t.types[1].name === payload)
//       console.log(fff)
      
//       console.log(allPokes)
//       const filteredBy =
//         payload === "all"
//           ? allPokes
//           : allPokes.filter((ele) => ele.types.includes(payload))
          
//       if (filteredBy.length > 0) {
       
//         return {
//           ...state,
//           pokemons: filteredBy,
          
//         };
//       } else {
//         return {
//           ...state,
//         };
      