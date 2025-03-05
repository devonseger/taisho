export default function (c, client, handler) {
    c.guild.fetchAuditLogs({ actionType: 12 })  // Use the correct integer value for CHANNEL_CREATE
      .then(audit => {
        const entry = audit.entries.first();
        console.log(`${entry.executor.username} deleted a channel: ${c.name}`);
      })
      .catch(err => {
        console.error('Error fetching audit logs:', err);
      });
  };
  