export type Point = {
    x: number;
    y: number;
}

export type Polar = {
    t: number;
    r: number;
}

export type Quadrant = {
    radial_min: number;
    radial_max: number;
    factor_x: number;
    factor_y: number;
}

export type Ring = {
    radius: number;
}

type Color = {
    background: string;
    grid: string;
    inactive: string;
}

type QuadrantConfig = {
    name: string;
}

type RingConfig = {
    name: string;
    color: string;
}

export type Entry = {
    id?: string;
    quadrant: number;
    ring: number;
    label: string;
    link?: string;
    active: boolean;
    moved: number;
    segment?: {clipx: (d: Point) => number;
    clipy: (d: Point) => number;
    random: () => {
        x: number;
        y: number;
    };};
    x?: number;
    y?: number;
    color?: string;
}

export type RadarConfig = {
    svg_id: string;
    width: number;
    height: number;
    colors: Color;
    title: string;
    date: string;
    quadrants: QuadrantConfig[];
    rings: RingConfig[];
    print_layout: boolean;
    links_in_new_tabs: boolean;
    //zoomed_quadrant: number;
    entries: Entry[];
}