const service = {}

service.genericResponse = (slackReqObj) => {
  const slackResponse = {
    attachments: [{

    }],
    channel: slackReqObj.channel_id,
    response_type: "in_channel"
  }

  return Promise.resolve(slackResponse)
}

module.exports = service
