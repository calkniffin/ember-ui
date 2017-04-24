import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`).then( function(rawOrg) {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.login;
      return rawOrg
    }).then(function (data) {
      return new Ember.RSVP.Promise((res, rej) => {
        Ember.run.later(() => {
          res(data);
        }, 2000)
      })
    })
  }
});
