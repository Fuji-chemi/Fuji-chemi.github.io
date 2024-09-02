$(document).ready(function() {
  $('#gyozaButton').click(function() {
    $.ajax({
      url: 'https://hooks.slack.com/services/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', // Replace with your Slack Webhook URL
      type: 'POST',
      data: JSON.stringify({
        text: '餃子が食べたい！'
      }),
      success: function() {
        alert('Slackに通知が送信されました！');
      },
      error: function() {
        alert('通知の送信に失敗しました。');
      }
    });
  });
});
