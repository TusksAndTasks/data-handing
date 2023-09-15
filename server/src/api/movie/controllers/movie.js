'use strict';

/**
 * movie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::movie.movie', ({strapi}) => ({
  async find(ctx){
    const {data} = await super.find(ctx);

    const formattedMovies = data.map((movie) => ({
      movie_id: movie.id,
      ...movie.attributes,
      movie_directors: movie.attributes.movie_directors.map((director) => director.name),
      movie_writers: movie.attributes.movie_writers.map((writer) => writer.name),
      movie_lead_actors: movie.attributes.movie_lead_actors.map((actor) => actor.name)
    }))

    ctx.send(formattedMovies)
  },

 async findOne(ctx) {
    const {data} = await super.findOne(ctx);

    const formattedMovie = {
     movie_id: data.id,
     ...data.attributes,
     movie_directors: data.attributes.movie_directors.map((director) => director.name),
     movie_writers: data.attributes.movie_writers.map((writer) => writer.name),
     movie_lead_actors: data.attributes.movie_lead_actors.map((actor) => actor.name)
   }

   ctx.send(formattedMovie)
 },

  async update(ctx) {
    const {data} = await super.update(ctx);

    const formattedMovie = {
      movie_id: data.id,
      ...data.attributes,
      movie_directors: data.attributes.movie_directors.map((director) => director.name),
      movie_writers: data.attributes.movie_writers.map((writer) => writer.name),
      movie_lead_actors: data.attributes.movie_lead_actors.map((actor) => actor.name)
    }

    ctx.send(formattedMovie)
  },

  async create(ctx) {
    ctx.request.body.data = {
      movie_name: ctx.request.body.data.name,
      movie_directors: ctx.request.body.data.directors.map((director) => ({name: director})),
      movie_writers: ctx.request.body.data.writers.map((writer) => ({name: writer})),
      movie_lead_actors: ctx.request.body.data.leadActors.map((actor) => ({name: actor})),
      movie_tagline: ctx.request.body.data.tagline,
      movie_score: ctx.request.body.data.score,
    }

    const {data} = await super.create(ctx);

    const formattedMovie = {
      movie_id: data.id,
      ...data.attributes,
      movie_directors: data.attributes.movie_directors.map((director) => director.name),
      movie_writers: data.attributes.movie_writers.map((writer) => writer.name),
      movie_lead_actors: data.attributes.movie_lead_actors.map((actor) => actor.name)
    }

    ctx.send(formattedMovie)
  },


}));

