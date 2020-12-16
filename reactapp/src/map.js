import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";

const xLabels = ["Number of Police Incident Reports Since 2018"];
const yLabels = [
  "Bayview Hunters Point",
  "Bernal Heights",
  "Castro/Upper Market",
  "Chinatown",
  "Excelsior",
  "Financial District/South Beach",
  "Glen Park",
  "Golden Gate Park",
  "Haight Ashbury",
  "Hayes Valley",
  "Inner Richmond",
  "Inner Sunset",
  "Japantown",
  "Lakeshore",
  "Lone Mountain/USF",
  "Marina",
  "Mission",
  "Mission Bay",
  "Nob Hill",
  "Noe Valley",
  "North Beach",
  "Oceanview/Merced/Ingleside",
  "Outer Mission",
  "Outer Richmond",
  "Pacific Heights",
  "Portola",
  "Potrero Hill",
  "Presidio Heights",
  "Russian Hill",
  "South of Market",
  "Sunset/Parkside",
  "Tenderloin",
  "Visitacion Valley",
  "West of Twin Peaks",
  "Western Addition",
];

const data = [
  [12888],
  [7863],
  [4541],
  [40635],
  [11624],
  [33461],
  [9018],
  [2497],
  [6607],
  [4433],
  [6938],
  [8901],
  [5572],
  [4096],
  [11797],
  [3925],
  [11397],
  [6889],
  [43965],
  [10055],
  [4913],
  [4653],
  [3929],
  [4809],
  [5251],
  [10887],
  [6727],
  [4146],
  [2120],
  [34141],
  [6711],
  [7558],
  [12150],
  [7110],
  [23976],
];

const Map = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "sans-serif",
      }}
    >
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Reder cell with tooltip
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
        )}
        xLabelsStyle={(index) => ({
          color: "Black",
          fontSize: ".65rem",
        })}
        yLabelsStyle={() => ({
          fontSize: ".65rem",
          textTransform: "uppercase",
          color: "Black",
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(119,136,153, ${ratio})`,
          fontSize: ".7rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight="1.5rem"
        xLabelsPos="bottom"
      />
    </div>
  );
};

export default Map;
