// import React from "react";
// import { geoCentroid } from "d3-geo";
// import {
//     useTheme,
//   } from "@mui/material";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   Annotation,
// } from "react-simple-maps";


// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// const markers :{
//     markerOffset:number,
//     name:string,
//     coordinates:[number,number]
// }[] = [
//   { markerOffset: -20, name: "Chicago", coordinates: [-87.6298, 41.8781] },
//   { markerOffset: -20, name: "Boston", coordinates: [-71.0589, 42.3601] },
//   { markerOffset: -20, name: "Tulsa", coordinates: [-95.9928, 36.154] },
//   { markerOffset: -20, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
//   { markerOffset: -20, name: "Miami", coordinates: [-80.1918, 25.7617] },
//   {
//     markerOffset: 30,
//     name: "Washington, D.C.",
//     coordinates: [-77.0369, 38.9072],
//   },
//   { markerOffset: -20, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
// ];

// const MapChart = () => {
//     const theme = useTheme();
//     const orange = theme.palette.customColors.orange;
//     const dark1 = theme.palette.customColors.primaryDark1;
//     const white = theme.palette.customColors.primaryWhite;
//   return (
//     <ComposableMap projection="geoAlbersUsa">
//       <Geographies geography={geoUrl}>
//         {({ geographies, outline , borders }) => (
//           <>
//             <Geography geography={outline} fill={white} />
//             <Geography geography={borders} fill="none" stroke={orange} />
//           </>
//         )}
//       </Geographies>
//       {markers.map(({ name, coordinates , markerOffset }) => (
//         <Marker key={name} coordinates={coordinates} id={name}>
//           <circle r={15} fill={orange} stroke="#fff" strokeWidth={2} />
//           {/* <text
//             textAnchor="middle"
//             y={markerOffset}
//             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//           >
//             {name}
//           </text> */}
//         </Marker>
//       ))}
//     </ComposableMap>
//   );
// };

// export default MapChart;

import React from "react";
import { useTheme } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers: {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}[] = [
  { markerOffset: -20, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: -20, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -20, name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { markerOffset: -20, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { markerOffset: -20, name: "Miami", coordinates: [-80.1918, 25.7617] },
  {
    markerOffset: 30,
    name: "Washington, D.C.",
    coordinates: [-77.0369, 38.9072],
  },
  { markerOffset: -20, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

const MapChart = () => {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  // const dark1 = theme.palette.customColors.primaryDark1;
  const white = theme.palette.customColors.primaryWhite;

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <React.Fragment key={geo.rsmKey}>
              <Geography
                geography={geo}
                fill={white}
                stroke={orange}
                strokeWidth={0.5}
              />
            </React.Fragment>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} id={name}>
          <circle r={15} fill={orange} stroke="#fff" strokeWidth={2} />
          {/* Uncomment and style the text */}
          {/* <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;


