export class Pokemon {
    id: number;
    name: string;
    species: {
        url: string;
    };
    // tslint:disable-next-line:variable-name
    capture_rate: number;
    color: {
        name: string,
        url: string
    };
    happiness: number;
    experience: number;
    abilities?: [{
        ability: {
            name: string,
        }

    }];
    height?: number;
    sprites?: {
        front_default: string,
        back_default: string
    };
    stats?: [{
        base_stat: number,
        stat: {
            name: string
        }

    }];
    types?: [{
        type: {
            name: string
        }
    }];
    weight?: number;
    description?: string;
}
