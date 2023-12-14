import { reactive } from 'vue';

export const store= reactive ({
    cards:[],
    cardArchtypes: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    apiUlrActhetypes:   'https://db.ygoprodeck.com/api/v7/archetypes.php',
});