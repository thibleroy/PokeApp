export interface Value {
    entry_number: number;
    pokemon_species: {
        name: string,
        url: string
    };
}
export interface Description {

base_happiness: number;
capture_rate: number;
color: {
    name: string,
    url: string
};
flavor_text_entries: [{

    flavor_text: string,
    language: {
        name: string
    }
}];
}

export interface Info {
    id: number;
    name: string;
    abilities: [{
        ability: {
            name: string
        }
    }
    ];
    base_experience: number;
    height: number;
    species: {
        url: string
    };
    stats: [{
        base_stat: number,
        stat: {
            name: string
        }
    }];
    types: [{
        type: {
            name: string
        }
    }];
    weight: number;
    sprites: {
        back_default: string,
        front_default: string
    };
}
