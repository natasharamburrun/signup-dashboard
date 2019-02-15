// import React from "react";
// import _ from "lodash";

// class search extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       signups: []
//     };
//   }

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value.toLowerCase()
//     });
//   };

//   searchfilter() {
//     if (!!this.state.search) {
//       const regEx = new regEx(this.state.search, "i");
//       return _.filter(this.state.signups, signups => regEx.test(signups.email));
//     }
//     return this.state.signups;
//   }

//   render() {
//     return (
//       <div className="search-wrapper">
//         {this.searchfilter().map(signups => (
//           <div className="control">
//             <div key={signups.i}>
//               <input
//                 type="text"
//                 className="searchField"
//                 placeholder="search the dashboard"
//                 onChange={this.handleChange}
//               />

//               {/* <div className="select-options">
//             <select id="campaign">
//               <option value="">Please select a campaign</option>
//               <option value="Newsletter">Newsletter</option>
//               <option value="Starwars">Starwars</option>
//               <option value="Education">Education</option>
//             </select>
//           </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
// export default search;
