export class Pokemon {
    specs: {
        abilities: {
            ability: {
                name: string,
                url: string
            },
            is_hidden: boolean,
            slot: number
        }[];
        base_experience: number;
        forms: {
            name: string,
            url: string
        }[];
        game_indices: {
            game_index: number,
            version: {
                name: string,
                url: string
            }
        }[];

        height: number;
        held_items: {
            item: {
                name: string,
                url: string
            },
            version_details: {
                rarity: number,
                version: {
                    name: string,
                    url: string
                }
            }[]
        }[];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: {
            move: {
                name: string,
                url: string
            },
            version_group_details: {
                level_learned_at: number,
                move_learn_method: {
                    name: string,
                    url: string
                },
                version_group: {
                    name: string,
                    url: string
                }
            }[]
        }[];
        name: string;
        order: number;
        species: {
            name: string,
            url: string
        };
        sprites: {
            back_default: string,
            back_female: string,
            back_shiny: string,
            back_shiny_female: string,
            front_default: string,
            front_female: string,
            front_shiny: string,
            front_shiny_female: string
        };
        stats: {
            base_stat: number,
            effort: number,
            stat: {
                name: string,
                url: string
            }
        }[];
        types: {
            slot: number,
            type: {
                name: string,
                url: string
            }
        }[];
        weight: number;
    };
    species: {
        id: number,
        name: string,
        order: number,
        gender_rate: number,
        capture_rate: number,
        base_happiness: number,
        is_baby: boolean,
        hatch_counter: number,
        has_gender_differences: false,
        forms_switchable: false,
        growth_rate: {
            name: string,
            url: string
        },
        pokedex_numbers: {
                entry_number: number,
                pokedex: {
                    name: string,
                    url: string
                }
            }[],
        egg_groups: {
                name: string,
                url: string
            }[],
        color: {
            name: string,
            url: string
        },
        shape: {
            name: string,
            url: string
        },
        evolves_from_species: {
            name: string,
            url: string
        },
        evolution_chain: {
            url: string
        },
        habitat: string,
        generation: {
            name: string,
            url: string
        },
        names: {
                name: string,
                language: {
                    name: string,
                    url: string
                }
            }[],
        flavor_text_entries: {
                flavor_text: string,
                language: {
                    name: string,
                    url: string
                },
                version: {
                    name: string,
                    url: string
                }
            }[],
        form_descriptions: {
                description: string,
                language: {
                    name: string,
                    url: string
                }
            }[],
        genera: {
                genus: string,
                language: {
                    name: string,
                    url: string
                }
            }[],
        varieties: {
                is_default: boolean,
                pokemon: {
                    name: string,
                    url: string
                }
            }[]
    };
  }
