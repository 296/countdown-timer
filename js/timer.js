var timer1; //タイマーを格納する変数（タイマーID）の宣言


//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart()
{
  document.timer.elements[0].disabled=true;
  timer1=setInterval("countDown()",1000);
}

//タイマー停止関数
function cntStop()
{
  document.timer.elements[0].disabled=false;
  clearInterval(timer1);
}

//カウントダウン関数
function countDown()
{
  let time_seq = document.getElementById('disp_time').textContent.replace(/\r?\n/g,"").split(':'),
      min = time_seq[0],
      sec = time_seq[1];

  min=parseInt(min);
  sec=parseInt(sec);

  tmWrite(min*60+sec-1);
}

//残り時間を書き出す関数
function tmWrite(int)
{
  int=parseInt(int);

  if (int<=0)
  {
    reSet();
    alert("時間です！");
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    document.getElementById('disp_time').textContent=Math.floor(int/60) + ':' + int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
  document.timer.elements[0].disabled=false;
  clearInterval(timer1);
}