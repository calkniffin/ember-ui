import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login')
    return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}`).then(rawRepo => {
      // backing up github's numeric ID
      rawRepo.oldId = rawRepo.id;
      // use the name of the repo as our ID
      rawRepo.id = rawRepo.name;
      console.log('repoid', params.id)
      return rawRepo;
    });
  }
});
