import { RadarConfig } from "../models/type";
import { ENTRIES } from "./data";

export const radarConfiguration: RadarConfig = {
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
      background: "#fff",
      grid: '#dddde0',
      inactive: "#ddd"
    },
    title: "IAD Tech Radar",
    date: "2023.02",
    quadrants: [
      { name: "Languages" },
      { name: "Infrastructure" },
      { name: "Datastores" },
      { name: "Data Management" },
    ],
    rings: [
      { name: "ADOPT", color: "#5ba300" },
      //{ name: "TRIAL", color: "#009eb0" },
      //{ name: "ASSESS", color: "#c7ba00" },
      { name: "HOLD", color: "#e09b96" }
    ],
    print_layout: true,
    links_in_new_tabs: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: ENTRIES
    //ENTRIES
  }