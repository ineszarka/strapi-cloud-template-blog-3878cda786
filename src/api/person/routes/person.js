'use strict';

/**
 * main-catalog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::person.person');
