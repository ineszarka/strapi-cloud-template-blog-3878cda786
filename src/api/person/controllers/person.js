'use strict';

/**
 * main-catalog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::person.person');
