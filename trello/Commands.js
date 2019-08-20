function Muthur() {};

/**
 * Check if Mother was mentioned in the given notification.
 */
Muthur.isMentioned = function(notif)
{
  if (notif.addedComment().card().comments().first().member().notTrellinator())
  {
    var is_mentioned = false;
    notif.mentionedMembers().each(function(member)
    {
      if (member.name() == "muthur6000")
        is_mentioned = true;
    });
    return is_mentioned;
  }
  else return false;
};

/**
 * Baseline test to see if bot is online.
 * Also a nice easter egg.
 */
function askStory(posted)
{
  var notif = new Notification(posted);
  if(notif.member().notTrellinator())
  {
    if (Muthur.isMentioned(notif))
    {
      var comment = notif.addedComment();
      if (new RegExp("what's the story", "i").test(comment.text())) {
        comment.card().postComment("@" + notif.member().name() + " All systems nominal.");
      }
      else if (new RegExp("Status report", "i").test(comment.text())) {
        comment.card().postComment("@" + notif.member().name() + " Seven bells and all's well.");
      }
    }
  }
}