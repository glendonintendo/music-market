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
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    },
    {
        tag_name: 'guitar'
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;