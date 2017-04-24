import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues`).then(rawIssues => {
      return rawIssues.map(rawIssue => {
        rawIssue.oldId = rawIssue.id;
        rawIssue.id = rawIssue.name;
        return rawIssue;
      });
    });
  }
});
