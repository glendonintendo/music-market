const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'rock'
    },
    {
        tag_name: 'metal'
    },
    {
        tag_name: 'synth'
    },
    {
        tag_name: 'indie'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'violin'
    },
    {
        tag_name: 'string'
    },
    {
        tag_name: 'piano'
    },
    {
        tag_name: 'snare drums'
    },
    {
        tag_name: 'percussion'
    },
    {
        tag_name: 'jazz'
    },
    {
        tag_name: 'r & b'
    },
    {
        tag_name: 'picks'
    },
    {
        tag_name: 'bows'
    },
    {
        tag_name: 'strings'
    },
    {
        tag_name: 'cd'
    },
    {
        tag_name: 'lp'
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;