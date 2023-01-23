var paraGety = function paraGety(para) {
  var pageURL = window.location.search.substring(1),
  urlValue = pageURL.split('&'), paraName;
  for(var i = 0; i < urlValue.length; i++) {
    paraName = urlValue[i].split('=');
    if (paraName[0] === para) {
      return paraName[1] === undefined ? true : decodeURIComponent(paraName[1]);
    }
  }
};

let number = paraGety('number'),
    talk_type = paraGety('talk_type');

$(function() {
	var tmpl_number = Hogan.compile($('#tpl_number').text());
	var html_number = tmpl_number.render({
	number: number
	});
	$('#number').append(html_number);


    let talk_time;
    if (talk_type == 'regular') {
        talk_time = '15:00';
    } else {
        talk_time = '30:00';
    }
    var tmpl_disp_time = Hogan.compile($('#tpl_disp_time').text());
    var html_disp_time = tmpl_disp_time.render({
    talk_time: talk_time
    });
    $('#disp_time').append(html_disp_time);
});
