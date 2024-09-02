$(document).ready(function() {
  $('#gyozaButton').click(function() {
    $.ajax({
      url: 'https://hooks.slack.com/services/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', // 発行されたWebhook URLをここに貼り付けます
      type: 'POST',
      data: JSON.stringify({
        text: '餃子が食べたい！' // Slackに送信されるメッセージ
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
