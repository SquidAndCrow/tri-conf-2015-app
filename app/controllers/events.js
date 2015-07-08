import Ember from 'ember';

export default Ember.Controller.extend({
    isAllEventsHidden : false,
    isCultureEventsHidden : false,
    isCommunityEventsHidden : false,
    isDesignEventsHidden : false,
    isEntrepreneurshipEventsHidden : false,
    isTechnologyEventsHidden : false,
    eventType : function() {
        console.log(true);
        return true;
    },
    actions : {
        filter: function(category) {
          this.set(`is${category}Hidden`, !this.get(`is${category}Hidden`));
        }
    }
});
