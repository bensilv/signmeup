/* taQueueList */

Template.taQueueList.helpers({
  disableActions: function() {
    var ended = (this.status === "done");
    var activeTicketsExist = _activeTickets(this.tickets).length;
    return (!ended && activeTicketsExist) ? "" : "disabled";
  }
});

Template.taQueueList.events({
  "click .js-shuffle-queue": function() {
    Meteor.call("shuffleQueue", this._id, function(err) {
      if(err)
        console.log(err);
    });
  }
});

/* taQueueTicket */

Template.taQueueTicket.onRendered(function() {
  $(this.findAll(".js-ticket-actions")).dropdown();
});

Template.taQueueTicket.events({
  "click .js-mark-as-done": function(event) {
    Meteor.call("markTicketAsDone", this._id, function(err) {
      if(err)
        console.log(err);
    })
  },
});