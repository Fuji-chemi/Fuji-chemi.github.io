$(document).ready(function() {
  $('#gyozaButton').click(function() {
    $.ajax({
      url: 'https://hooks.slack.com/services/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', // Webhook URL (ここは本来サーバーサイドで扱うべき)
      type: 'POST',
      contentType: 'application/json',  // コンテンツタイプを指定
      data: JSON.stringify({
        text: '餃子が食べたい！'
      }),
      success: function() {
        alert('Slackに通知が送信されました！');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('エラー: ' + textStatus + ', ' + errorThrown);
        alert('通知の送信に失敗しました。');
      }
    });
  });
});
